const use_cardsContainer = document.getElementById("use_cardsContainer");


function use_cards() {
    for (let i = 0; i < window.held_cards.length; i++) {
        const card = window.held_cards[i];
        console.log("used a card");
        console.log(card);

        create_new_card(card, use_cardsContainer, "used card");

        delete_old_card();
    }

    window.held_cards = [];

    start_turn();
}

function delete_old_card() {
    // https://stackoverflow.com/questions/7307776/how-do-i-remove-a-div-using-javascript
    var card = document.getElementsByClassName("card");

    card[0].parentNode.removeChild(card[0]);
}