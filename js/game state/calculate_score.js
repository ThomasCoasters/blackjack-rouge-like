async function calculate_score(card_index, score_text_scale, is_blackjack, retriggering_number = null) {
    let card_score = 0;

    
    const card = using_cards[card_index];
    const card_value = card.value;

    if (card_value in score_per_card) {
        card_score += score_per_card[card_value];
    }

    if (card.special && card.special_location === "score") {
        if (card.special.name === "random_score" || card.special.name === "run_save" || card.special.name === "suit_rally" || card.special.name === "value_rally") { // special case for score adding specials
            card_score += await card.special();
        } else {
            await card.special();
        }
    }





    if (is_blackjack == true) {
        card_score = Math.round(card_score * window.blackjack_bonus_multiplier); // blackjack bonus
    }

    await scoring_visuals(card_score, card_index, is_blackjack);
    
    score += card_score;
    score_text_move(score_text_scale);



    if (retriggering_number === null) {
        retriggering_number = card.retrigger || 0;
    }

    if (card.retrigger > 0 && retriggering_number > 0) {
        retriggering_number -= 1;

        await delay(250 * (1 / window.animation_speed));

        use_cardsContainer.children[card_index].style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

        await calculate_score(card_index, score_text_scale, is_blackjack, retriggering_number);
    }
}










async function scoring_visuals(card_score, card_index, is_blackjack, amount = 1) {
    const score_box = document.createElement("div");
    score_box.className = "card_score_box";

    

    if (is_blackjack) {
        score_box.style.backgroundColor = "gold";
    } else {
        score_box.style.backgroundColor = "lightblue";
    }



    score_box.style.animationDuration = 2 * (1 / window.animation_speed) + "s";
    score_box.style.animationTimingFunction = "ease";

    if (amount === 1) {
        score_box.style.animationName = "score_pop_movement_right";
        scoring_visuals(card_score, card_index, is_blackjack, 0);
    } else {
        score_box.style.animationName = "score_pop_movement_left";

        // add score text
        const score_text = document.createElement("div");
        score_text.className = "card_score_text";
        score_text.textContent = "+" + card_score;
        score_box.appendChild(score_text);

        score_text.style.animationDuration = 2 * (1 / window.animation_speed) + "s";

        hide_score_box(score_text);
    }





    const containerRect = use_cardsContainer.getBoundingClientRect();

    const baseLeftPct = 10 + (card_index) * 100 / using_cards.length;
    const cardHalfPct = (44 / containerRect.width) * 100; // 44px = half of 88px (card width)


    score_box.style.top = "100%";
    score_box.style.left = (baseLeftPct - cardHalfPct) + "%";


    use_cardsContainer.appendChild(score_box);

    hide_score_box(score_box);
}


async function hide_score_box(score_box) {
    await delay(1900 * (1 / window.animation_speed));

    score_box.parentNode.removeChild(score_box);
}








async function random_score() {
    value_for_card = 0;
    while (true) {
        if (Math.random() < 0.25) {
            break;
        } else {
            value_for_card += 1;
        }
    }
    return value_for_card;
}

async function retrigger_all_kings() {
    const cardArrays = [window.held_cards, window.available_cards, used_cards, window.all_upgrades["normal_cards"]];
    
    for (const cardArray of cardArrays) {
        for (let i = 0; i < cardArray.length; i++) {
            if (cardArray[i].value === "king") {
                cardArray[i].retrigger = (cardArray[i].retrigger || 0) + 1;
            }
        }
    }
}

async function scrap_drone_special() {
    window.discards_amount += 1;
}

async function reusable_and_retrigger() {
    weird_sfx()
    
    const card = using_cards[Math.floor(Math.random() * using_cards.length)];

    card.retrigger = (card.retrigger || 0) + 1;
    card.reusing = true;
}

async function run_save() {
    const score_to_beat = winning_score;
    const current_score = parseInt(current_score_text.textContent);

    if (current_score < score_to_beat && window.hands_amount == 0) {
        // If the current score is less than the winning score, activate the special effect

        const cardArrays = [window.held_cards, window.available_cards, used_cards];
    
        for (const cardArray of cardArrays) {
            for (let i = cardArray.length - 1; i >= 0; i--) {
                if (cardArray[i].value === "special_value:run_save") {
                    cardArray.splice(i, 1); // remove the card after use
                }
            }
        }

        runs_save_sfx()

        return Math.ceil(score_to_beat);
    }
    return 0;
}

async function suit_rally() {
    amount_per_suit = {};

    extra_score = 0;

    for (const card of using_cards) {
        if (amount_per_suit[card.suit]) {
            amount_per_suit[card.suit] += 1;
        } else {
            amount_per_suit[card.suit] = 1;
        }
    }

    for (const suit in amount_per_suit) {
        if (amount_per_suit[suit] > 1) {
            extra_score += amount_per_suit[suit] * 3;
        }
    }

    return extra_score;
}


async function value_rally() {
    amount_per_value = {};

    extra_score = 0;

    for (const card of using_cards) {
        if (amount_per_value[card.value]) {
            amount_per_value[card.value] += 1;
        } else {
            amount_per_value[card.value] = 1;
        }
    }

    for (const value in amount_per_value) {
        if (amount_per_value[value] > 1) {
            extra_score += amount_per_value[value] * 7;
        }
    }

    return extra_score;
}