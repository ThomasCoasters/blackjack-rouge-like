async function calculate_score(card_index, score_text_scale, is_blackjack) {
    let card_score = 0;

    
    const card = using_cards[card_index];
    const card_value = card.value;

    if (card_value in score_per_card) {
        card_score += score_per_card[card_value];
    }

    if (card.special && card.special_location === "score") {
        card.special();
    }




    await scoring_visuals(card_index, is_blackjack);


    if (is_blackjack == true) {
        card_score = Math.round(card_score * window.blackjack_bonus_multiplier); // blackjack bonus
    }
    
    score += card_score;
    score_text_move(score_text_scale);




    if (card.retrigger > 0) {
        using_cards[card_index].retrigger -= 1;

        await delay(500 * (1 / window.animation_speed));

        use_cardsContainer.children[card_index].style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

        await calculate_score(card_index, score_text_scale);
    }
}







async function scoring_visuals(card_index, is_blackjack, amount = 1) {
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
        scoring_visuals(card_index, is_blackjack, 0);
    } else {
        score_box.style.animationName = "score_pop_movement_left";
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