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

    "special_value:5": 5
};

var total_value = 0;
var ace_count = 0;


async function update_Total_Value() {
    total_value = 0;
    ace_count = 0;

    const specialCards = [];

    for (let i = 0; i < window.held_cards.length; i++) {
        //make the card a variable for cleaner code
        const card = window.held_cards[i];

        total_value += value_per_card[card.value];

        // Collect special functions to execute later
        if (card.special_location === "total value" && card.special) {
            specialCards.push(card.special);
        }
    }

    // Execute special functions after calculating the total value
    for (let i = 0; i < specialCards.length; i++) {
        const specialFunction = specialCards[i];
        specialFunction();
    }


    // ace special handling
    while (total_value > window.max_total_value && ace_count > 0) {
        total_value -= 10; // convert one ace from 11 to 1
        ace_count--;
    }

    

    if (total_value > window.max_total_value) {
        // player bust
        player_bust();
        return;
    }

    
    //https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-an-element-using-javascript
    document.getElementById("total_value_text").textContent="Total value: " + total_value  + " / " + window.max_total_value;
}


function ace_special() {
    ace_count += 1;
}
