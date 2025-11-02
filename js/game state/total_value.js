const value_per_card = {
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
    "king": 10,

    "special_value:random": 0,
    "special_value:none": 0,
    "special_value:increase_max": 0,
    "special_value:reusable+retrigger": 0,
    "special_value:run_save": 0,
    "special_value:suit_rally": 0,
    "special_value:value_rally": 0,

    "special_value:2": 2,
    "special_value:5_1": 5,
    "special_value:5_2": 5,
    "special_value:lower_score": 2,
};

var increase_max_total_value_count = 0;
var total_value = 0;
var ace_count = 0;


async function update_Total_Value(from_calculate_score = false) {
    amount_cards_in_deck_text.textContent = (window.available_cards.length) + "/" + (window.available_cards.length + used_cards.length);

    total_value = 0;
    ace_count = 0;
    window.max_total_value -= increase_max_total_value_count;
    increase_max_total_value_count = 0;

    const specialCards = [];

    for (let i = 0; i < window.held_cards.length; i++) {
        //make the card a variable for cleaner code
        const card = window.held_cards[i];

        total_value += value_per_card[card.value];

        // Collect special functions to execute later
        if (card.special_location === "total value" && card.special) {
            specialCards.push(card.special);
        }
        if (card.special === lower_required_score) {
            background_music_karmelita_no_vocal();
        }
    }

    // Execute special functions after calculating the total value
    for (let i = 0; i < specialCards.length; i++) {
        const specialFunction = specialCards[i];
        specialFunction();
    }

    window.max_total_value += increase_max_total_value_count; // total value special handling


    // ace special handling
    while (total_value > window.max_total_value && ace_count > 0) {
        total_value -= 10; // convert one ace from 11 to 1
        ace_count--;
    }


    if (from_calculate_score) {
        if (total_value === window.max_total_value) {
            return [true, total_value];
        }
        else {
            return [false, total_value];
        }
    }

    

    //https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-an-element-using-javascript
    document.getElementById("total_value_text").textContent="Total value: " + total_value  + " / " + window.max_total_value;
}


function ace_special() {
    ace_count += 1;
}

function increase_max_total_value_7() {
    increase_max_total_value_count += 7;
}
