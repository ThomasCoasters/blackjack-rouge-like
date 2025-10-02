const value_per_card = {
    // "ace": 11, weg omdat geen constat value is
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


function update_Total_Value() {
    let total_value = 0;
    let ace_count = 0;

    for (let i = 0; i < window.held_cards.length; i++) {
        if (window.held_cards[i].value === "ace"){
            ace_count += 1;
            continue;
        }
        total_value += value_per_card[window.held_cards[i].value];
    }

    if (ace_count > 0) {
        total_value += best_ace_value(ace_count, total_value);
    }




    //https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-an-element-using-javascript
    document.getElementById("total_value_text").textContent="Total value: " + total_value;
}






function best_ace_value(ace_count, total_value) {
    let total_ace_value = 11 * ace_count;

    while (total_ace_value > ace_count && total_value + total_ace_value > window.max_total_value) {
        total_ace_value -= 10; // gaat van 11 naar 1 value per ace
    }


    return total_ace_value;
}