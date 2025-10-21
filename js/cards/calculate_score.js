async function calculate_score(card_index, score_text_scale) {
    let card_score = 0;
    
    console.log(card_index);
    const card = using_cards[card_index];
    const card_value = card.value;

    console.log(card_value);

    if (card_value in score_per_card) {
        card_score += score_per_card[card_value];
    }

    if (card.special && card.special_location === "score") {
        card.special();
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



