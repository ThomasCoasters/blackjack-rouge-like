async function calculate_score(card_index, score_text_scale, is_blackjack, retriggering_number = null) {
    let card_score = 0;

    
    const card = using_cards[card_index];
    const card_value = card.value;

    if (card_value in score_per_card) {
        card_score += score_per_card[card_value];
    }

    if (card.special && card.special_location === "score") {
        if (card.special.name === "random_score" || card.special.name === "run_save" || card.special.name === "suit_rally" || card.special.name === "value_rally" || card.special.name === "win_round_score") { // special case for score adding specials
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

    grub_sfx();

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

    flea_sfx();

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


async function lower_required_score() {
    winning_score -= Math.round(using_cards.length / 2);

    if (winning_score < 1) {
        winning_score = 1;
    }
    score_to_beat_amount_text.textContent = window.winning_score;

    background_music_karmelita_vocal();
}

async function summon_zote_card() {
    const zote_cards = [
        {"suit": "zote_row", "value": "zote_card:zoteling", "hover_name": "zote's zoteling", "hover_text": "this has an value of 1"},
        {"suit": "zote_row", "value": "zote_card:winged_zoteling", "hover_name": "zote's winged zoteling", "hover_text": "this has an value of 2"},
        {"suit": "zote_row", "value": "zote_card:Heavy_zoteling", "hover_name": "zote's Heavy zoteling", "hover_text": "this has an value of 8"},
        {"suit": "zote_row", "value": "zote_card:turret_zoteling", "reusing": true, "hover_name": "zote's turret zoteling", "hover_text": "this has a value of 4 and is reusable"},
        {"suit": "zote_row", "value": "zote_card:Lanky_zoteling", "hover_name": "zote's Lanky zoteling", "hover_text": "this will give a random card retrigger when used" , "special": retrigger_random_card, "special_location": "score"},
        {"suit": "zote_row", "value": "zote_card:head_of_zote", "hover_name": "zote's head", "hover_text": "has no value but is worth 10 score", "different_value_and_score": true},
        {"suit": "zote_row", "value": "zote_card:volitile_zoteling", "hover_name": "zote's volitile zoteling", "hover_text": "this has no value and self destructs after use deleting all versions of this card, giving 12 score and destroys another random card", "different_value_and_score": true, "special": destroy_random_card_and_self_destruct, "special_location": "score"},
        {"suit": "zote_row", "value": "zote_card:Fluke_zoteling", "hover_name": "zote's fluke zoteling", "hover_text": "this has an value of -5 and no score", "different_value_and_score": true},
        {"suit": "zote_row", "value": "zote_card:zote_curse", "hover_name": "zote's Curse", "hover_text": "this has a value of 50 and the amount of score you need to win the round", "different_value_and_score": true, "special": win_round_score, "special_location": "score"},
        {"suit": "zote_row", "value": "zote_card:GPZ", "hover_name": "Invincible, Fearless, Sensual, Mysterious, Enchanting, Vigorous, Diligent, Overwhelming, Gorgeous, Passionate, Terrifying, Beautiful, Powerful, Grey Prince Zote", "hover_text": "Invincible, Fearless, Sensual, Mysterious, Enchanting, Vigorous, Diligent, Overwhelming, Gorgeous, Passionate, Terrifying, Beautiful, Powerful, Grey Prince Zote has a value of 11 and lowers the required score by 0.25 for all the zote cards you have in your deck", "special": GPZ_special, "special_location": "score"},
        {"suit": "zote_row", "value": "zote_card:the_mighty", "hover_name": "zote the mighty", "hover_text": "this has an value of 4 and gives another zote? type of card when used", "special": summon_zote_card, "special_location": "score"},
        {"suit": "zote_row", "value": "zote_card:the_getting_killed", "hover_name": "zote the getting killed", "hover_text": "this has an value of -6, no score and removes 1-3 random cards when scored", "special": remove_random_card, "special_location": "score"},
        {"suit": "zote_row", "value": "zote_card:the_fallen", "hover_name": "zote the fallen", "hover_text": "this card works like an ace", "special": ace_special, "special_location": "total value", "different_value_and_score": true},
    ];
    window.available_cards.push(zote_cards[Math.floor(Math.random() * zote_cards.length)]);
}

async function retrigger_random_card() {
    const card = window.available_cards[Math.floor(Math.random() * window.available_cards.length)];
    card.retrigger = (card.retrigger || 0) + 1;
}

async function destroy_random_card_and_self_destruct() {
    remove_one_random_card();

    const cardArrays = [window.held_cards, window.available_cards, used_cards];
    
    for (const cardArray of cardArrays) {
        for (let i = cardArray.length - 1; i >= 0; i--) {
            if (cardArray[i].value === "zote_card:volitile_zoteling") {
                cardArray.splice(i, 1); // remove the card after use
            }
        }
    }
}


async function win_round_score() {
    return winning_score;
}

async function GPZ_special() {
    let zote_card_count = 0;

    const cardArrays = [window.held_cards, window.available_cards, used_cards];

    for (const cardArray of cardArrays) {
        for (const card of cardArray) {
            if (card.value.startsWith("zote_card:")) {
                zote_card_count++;
            }
        }
    }

    winning_score -= Math.round(zote_card_count * 0.25);
    if (winning_score < 1) {
        winning_score = 1;
    }
    
    score_to_beat_amount_text.textContent = window.winning_score;
}

async function remove_random_card() {
    for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        remove_one_random_card();
    }
}

function remove_one_random_card() {
    const card_index = Math.floor(Math.random() * window.available_cards.length);
    window.available_cards.splice(card_index, 1);
}