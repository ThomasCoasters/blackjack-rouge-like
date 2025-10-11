const use_cardsContainer = document.getElementById("cards_used_anim_container");

var score = 0;

const score_per_card = {
    "ace": 11,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "jack": 10,
    "queen": 10,
    "king": 10
};

var using_cards = [];

async function use_cards() {
    window.isDealing = true;

    document.getElementById("total_value_text").textContent="Total value: 0";

    for (let i = 0; i < window.held_cards.length; i++) {
        const card = window.held_cards[i];
        console.log("used a card");
        console.log(card);

        using_cards.push(card);

        create_new_card(card, use_cardsContainer, "used card");

        delete_old_card();
    }

    window.held_cards = [];


    const use_cards_count = use_cardsContainer.children.length;
    const container_width = use_cardsContainer.getBoundingClientRect().width;


    for (let i = 0; i < use_cards_count; i++) {
        const card = use_cardsContainer.children[i];

        card.style.position = "absolute";

        const spacing = container_width / use_cards_count;

        card.style.left = Math.round(spacing * (i-1) - 88/2) + "px";


        card.style.transition = "all 0.5s ease";

        // set a concrete start position (not "auto")
        card.style.top = "50%";
        card.style.left = (10+((i) * 100 / use_cards_count)) + "%";

    }

    await delay(500);

    for (let i = 0; i < use_cards_count; i++) {
        const card = use_cardsContainer.children[i];

        card.style.top = "-10%";
        calculate_score(i);

        await delay(100);

        card.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

        await delay(300);
    }

    for (let i = 0; i < use_cards_count; i++) {
        const card = use_cardsContainer.children[i];

        card.style.top = "-200%";

        await delay(100);
    }

    start_turn();
}

function delete_old_card() {
    // https://stackoverflow.com/questions/7307776/how-do-i-remove-a-div-using-javascript
    var card = document.getElementsByClassName("card");

    card[0].parentNode.removeChild(card[0]);
}

function calculate_score(card_index) {
    console.log(card_index);
    card_value = using_cards[card_index].value;

    console.log(card_value);

    if (card_value in score_per_card) {
        score += score_per_card[card_value];
    }

    document.getElementById("total_score_text").textContent = score;
}
