const use_cardsContainer = document.getElementById("use_cardsContainer");


function use_cards() {
    for (let i = 0; i < window.held_cards.length; i++) {
        const card = window.held_cards[i];
        console.log("used a card");
        console.log(card);

        create_new_card(card, use_cardsContainer);
    }

    window.held_cards = [];
}