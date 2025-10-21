function calculate_score(card_index) {
    score = 0;
    
    console.log(card_index);
    const card = using_cards[card_index];
    const card_value = card.value;

    console.log(card_value);

    if (card_value in score_per_card) {
        score += score_per_card[card_value];
    }

    if (card.special && card.special_location === "score") {
        card.special();
    }

    return score;
}

