const upgrade_container = document.getElementById("upgrade_container");

window.gain_discard_each_hand_amount = 0;

window.all_upgrades = {
    "normal_cards": [{"suit": "hearts", "value": "ace", "hover_name": "ace of hearts", "hover_text": "hearts card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "hearts", "value": "2", "hover_name": "2 of hearts", "hover_text": "hearts card with an value of 2"}, {"suit": "hearts", "value": "3", "hover_name": "3 of hearts", "hover_text": "hearts card with an value 3"}, {"suit": "hearts", "value": "4", "hover_name": "4 of hearts", "hover_text": "hearts card with an value of 4"}, {"suit": "hearts", "value": "5", "hover_name": "5 of hearts", "hover_text": "hearts card with an value of 5"}, {"suit": "hearts", "value": "6", "hover_name": "6 of hearts", "hover_text": "hearts card with an value of 6"}, {"suit": "hearts", "value": "7", "hover_name": "7 of hearts", "hover_text": "hearts card with an value of 7"}, {"suit": "hearts", "value": "8", "hover_name": "8 of hearts", "hover_text": "hearts card with an value of 8"}, {"suit": "hearts", "value": "9", "hover_name": "9 of hearts", "hover_text": "hearts card with an value of 9"}, {"suit": "hearts", "value": "10", "hover_name": "10 of hearts", "hover_text": "hearts card with an value of 10"}, {"suit": "hearts", "value": "jack", "hover_name": "jack of hearts", "hover_text": "hearts face card with an value of 10"}, {"suit": "hearts", "value": "queen", "hover_name": "queen of hearts", "hover_text": "hearts face card with an value of 10"}, {"suit": "hearts", "value": "king", "hover_name": "king of hearts", "hover_text": "hearts face card with an value of 10"},
	{"suit": "diamonds", "value": "ace", "hover_name": "ace of diamonds", "hover_text": "diamonds card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "diamonds", "value": "2", "hover_name": "2 of diamonds", "hover_text": "diamonds card with an value of 2"}, {"suit": "diamonds", "value": "3", "hover_name": "3 of diamonds", "hover_text": "diamonds card with an value of 3"}, {"suit": "diamonds", "value": "4", "hover_name": "4 of diamonds", "hover_text": "diamonds card with an value of 4"}, {"suit": "diamonds", "value": "5", "hover_name": "5 of diamonds", "hover_text": "diamonds card with an value of 5"}, {"suit": "diamonds", "value": "6", "hover_name": "6 of diamonds", "hover_text": "diamonds card with an value of 6"}, {"suit": "diamonds", "value": "7", "hover_name": "7 of diamonds", "hover_text": "diamonds card with an value of 7"}, {"suit": "diamonds", "value": "8", "hover_name": "8 of diamonds", "hover_text": "diamonds card with an value of 8"}, {"suit": "diamonds", "value": "9", "hover_name": "9 of diamonds", "hover_text": "diamonds card with an value of 9"}, {"suit": "diamonds", "value": "10", "hover_name": "10 of diamonds", "hover_text": "diamonds card with an value of 10"}, {"suit": "diamonds", "value": "jack", "hover_name": "jack of diamonds", "hover_text": "diamonds face card with an value of 10"}, {"suit": "diamonds", "value": "queen", "hover_name": "queen of diamonds", "hover_text": "diamonds face card with an value of 10"}, {"suit": "diamonds", "value": "king", "hover_name": "king of diamonds", "hover_text": "diamonds face card with an value of 10"},
	{"suit": "spades", "value": "ace", "hover_name": "ace of spades", "hover_text": "spades card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "spades", "value": "2", "hover_name": "2 of spades", "hover_text": "spades card with an value of 2"}, {"suit": "spades", "value": "3", "hover_name": "3 of spades", "hover_text": "spades card with an value 3"}, {"suit": "spades", "value": "4", "hover_name": "4 of spades", "hover_text": "spades card with an value of 4"}, {"suit": "spades", "value": "5", "hover_name": "5 of spades", "hover_text": "spades card with an value of 5"}, {"suit": "spades", "value": "6", "hover_name": "6 of spades", "hover_text": "spades card with an value of 6"}, {"suit": "spades", "value": "7", "hover_name": "7 of spades", "hover_text": "spades card with an value of 7"}, {"suit": "spades", "value": "8", "hover_name": "8 of spades", "hover_text": "spades card with an value of 8"}, {"suit": "spades", "value": "9", "hover_name": "9 of spades", "hover_text": "spades card with an value of 9"}, {"suit": "spades", "value": "10", "hover_name": "10 of spades", "hover_text": "spades card with an value of 10"}, {"suit": "spades", "value": "jack", "hover_name": "jack of spades", "hover_text": "spades face card with an value of 10"}, {"suit": "spades", "value": "queen", "hover_name": "queen of spades", "hover_text": "spades face card with an value of 10"}, {"suit": "spades", "value": "king", "hover_name": "king of spades", "hover_text": "spades face card with an value of 10"},
	{"suit": "clubs", "value": "ace", "hover_name": "ace of clubs", "hover_text": "clubs card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "clubs", "value": "2", "hover_name": "2 of clubs", "hover_text": "clubs card with an value of 2"}, {"suit": "clubs", "value": "3", "hover_name": "3 of clubs", "hover_text": "clubs card with an value 3"}, {"suit": "clubs", "value": "4", "hover_name": "4 of clubs", "hover_text": "clubs card with an value of 4"}, {"suit": "clubs", "value": "5", "hover_name": "5 of clubs", "hover_text": "clubs card with an value of 5"}, {"suit": "clubs", "value": "6", "hover_name": "6 of clubs", "hover_text": "clubs card with an value of 6"}, {"suit": "clubs", "value": "7", "hover_name": "7 of clubs", "hover_text": "clubs card with an value of 7"}, {"suit": "clubs", "value": "8", "hover_name": "8 of clubs", "hover_text": "clubs card with an value of 8"}, {"suit": "clubs", "value": "9", "hover_name": "9 of clubs", "hover_text": "clubs card with an value of 9"}, {"suit": "clubs", "value": "10", "hover_name": "10 of clubs", "hover_text": "clubs card with an value of 10"}, {"suit": "clubs", "value": "jack", "hover_name": "jack of clubs", "hover_text": "clubs face card with an value of 10"}, {"suit": "clubs", "value": "queen", "hover_name": "queen of clubs", "hover_text": "clubs face card with an value of 10"}, {"suit": "clubs", "value": "king", "hover_name": "king of clubs", "hover_text": "clubs face card with an value of 10"}
    ],

    "special_cards": [
    {"suit": "special_row_1", "value": "special_value:random", "hover_name": "a random joker", "hover_text": "'they locked me in, but I got free, free, now I make chaos, chaos with my value of ???'", "special": random_score, "special_location": "score", "effect": play_freedom_motif}, // jevil deltarune reference
    {"suit": "special_row_1", "value": "special_value:none", "hover_name": "king of the jokers", "hover_text": "'I am the king here, here and like chaos, chaos so I'll retrigger, retrigger all king cards' (ALL king cards get +1 retrigger for every use)" , "special": retrigger_all_kings, "special_location": "score", "effect": play_freedom_motif},// jevil deltarune reference
    {"suit": "special_row_1", "value": "special_value:5_1", "reusing": true, "hover_name": "reusable waste", "hover_text": "card that can be reused with a value of 5"},
    {"suit": "special_row_1", "value": "special_value:5_2", "retrigger": 1, "hover_name": "retriggerable trash", "hover_text": "card that gets retriggered with a value of 5"},
    {"suit": "special_row_1", "value": "special_value:2", "reusing": true, "hover_name": "scarp drone", "hover_text": "reusable card with a value of 2 but gives 1 discard when used", "special": scrap_drone_special, "special_location": "score"},
    ],

    "permanent_upgrades": [
    {"suit": "permanent_upgrade_row_1", "value": "increase_max_total_value", "hover_name": "increase max total value", "hover_text": "increases the maximum total value by 2", "effect": increase_max_total_value},
    {"suit": "permanent_upgrade_row_1", "value": "increase_max_total_value_but_less_discards", "hover_name": "increase max total value", "hover_text": "increases the maximum total value by 5 but have 1 less discard", "effect": increase_max_total_value_but_less_discards},
    {"suit": "permanent_upgrade_row_1", "value": "increase_blackjack_bonus", "hover_name": "increase blackjack bonus", "hover_text": "increases the blackjack bonus multiplier by 0.5", "effect": increase_blackjack_bonus},
    {"suit": "permanent_upgrade_row_1", "value": "extra_upgrade_slot_but_decrease_max_total_value", "hover_name": "extra slot", "hover_text": "increases the amount of upgrades you can choose from by 1 but maximum total value decreases by 3", "effect": extra_upgrade_slot_but_decrease_max_total_value},
    {"suit": "permanent_upgrade_row_1", "value": "extra_upgrade_slot_but_decrease_hands", "hover_name": "extra slot", "hover_text": "increases the amount of upgrades you can choose from by 1 but maximum number of hands decreases by 1", "effect": extra_upgrade_slot_but_decrease_hands},
    {"suit": "permanent_upgrade_row_1", "value": "increase_hands_but_negative_blackjack", "hover_name": "extra hands", "hover_text": "increases number of hands by 1 but decrease blackjack multiplier to -0.5 (losing points for blackjack)", "effect": increase_hands_but_negative_blackjack},
    {"suit": "permanent_upgrade_row_1", "value": "increase_hands_but_less_discards", "hover_name": "trade", "hover_text": "increases number of hands by 1 but have 1 less discard", "effect": increase_hands_but_less_discards},
    {"suit": "permanent_upgrade_row_1", "value": "increase_discards_but_less_hands", "hover_name": "trade", "hover_text": "increases number of discards by 1 but have 1 less hand", "effect": increase_discards_but_less_hands},
    {"suit": "permanent_upgrade_row_1", "value": "increase_discards_but_draw_more", "hover_name": "test your luck", "hover_text": "increases number of discards by 3 but draw 5 more cards at the beginning", "effect": increase_discards_but_draw_more},
    {"suit": "permanent_upgrade_row_1", "value": "1_hand_now", "hover_name": "glass hand", "hover_text": "this round you have 1 hand but after this round you will get 2", "effect": hand_now_1_later_2},
    {"suit": "permanent_upgrade_row_1", "value": "gain_discard_each_hand", "hover_name": "tactician", "hover_text": "gain a discard every round but start with 2 less discards", "effect": gain_discard_each_hand},
],


};


const col_map = {
    "ace": 0,
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
    "10": 9,
    "jack": 10,
    "queen": 11,
    "king": 12,


    "special_value:random": 0,
    "special_value:none": 1,
    "special_value:5_1": 2,
    "special_value:5_2": 3,
    "special_value:2": 4,



    "increase_max_total_value": 0,
    "increase_max_total_value_but_less_discards": 1,
    "increase_blackjack_bonus": 2,
    "extra_upgrade_slot_but_decrease_max_total_value": 3,
    "extra_upgrade_slot_but_decrease_hands": 4,
    "increase_hands_but_negative_blackjack": 5,
    "increase_discards_but_draw_more": 6,
    "1_hand_now": 7,
    "increase_hands_but_less_discards": 8,
    "increase_discards_but_less_hands": 9,
    "gain_discard_each_hand": 10
};


const row_map = {
    "hearts": 2,
    "diamonds": 1,
    "spades": 3,
    "clubs": 0,

    "special_row_1": 4,
    "permanent_upgrade_row_1": 4

};






async function choose_upgrade_setup() {
    screen_darker(0.8);

    start_upgrade_music();

    await delay(1000);

    await choose_upgrade_type();
}


async function choose_upgrade_type() {
    const upgradeTypes = Object.keys(window.all_upgrades);
    
    for (let i = 0; i < window.max_upgrades_amount; i++) {
        const randomIndex = Math.floor(Math.random() * upgradeTypes.length);
        const selectedType = upgradeTypes[randomIndex];

        const upgrade = await choose_upgrade(selectedType);

        upgrade_container.appendChild(await create_upgrade_card(upgrade, selectedType));
    }
}


async function choose_upgrade(type) {
    const upgradeArray = window.all_upgrades[type];
    const upgrade_index = Math.floor(Math.random() * upgradeArray.length);

    return upgradeArray[upgrade_index];
}

async function create_upgrade_card(upgrade, selectedType) {
    // Create new card
    const newCard = document.createElement("div");
    newCard.className = "upgrade_card";

    newCard.style.zIndex = 13;
  
    // Get selected values
    const col = col_map[upgrade.value];
    const row = row_map[upgrade.suit];

    // Calculate position
    const x = -col * cardWidth;
    const y = -row * cardHeight;

    // Set background position
    newCard.style.backgroundPosition = `${x}px ${y}px`;


    if (!upgrade.hover_name && !upgrade.hover_text) { // failsafe for if it doesn't exist
        upgrade.hover_name = "Unknown";
        upgrade.hover_text = "No description available.";
    }

    // Add hover event listeners to show card info

    newCard.addEventListener('mouseover', () => {
        show_Card_Info(newCard, upgrade.hover_name, upgrade.hover_text, upgrade, 14);
    });

    newCard.addEventListener('mouseout', () => {
        hide_Card_Info();
    });


    newCard.addEventListener('click', async () => {
        await upgrade_card_chosen(upgrade, selectedType);
    });

    return newCard;
}



async function upgrade_card_chosen(upgrade, upgrade_type) {
    stop_upgrade_music();

    if (upgrade.effect) {
        await upgrade.effect();
    }

    if (upgrade_type === "special_cards" || upgrade_type === "normal_cards") {
        window.available_cards.push(upgrade);
    }

    upgrade_container.innerHTML = "";
    hide_Card_Info();
    await screen_light();
    start_turn();
}



async function increase_max_total_value() {
    window.max_total_value += 2;
}

async function increase_max_total_value_but_less_discards() {
    window.max_total_value += 5;
    window.max_discards_amount -= 1;
}

async function increase_blackjack_bonus() {
    window.blackjack_bonus_multiplier += 0.5;
}

async function extra_upgrade_slot_but_decrease_max_total_value() {
    window.max_upgrades_amount += 1;
    window.max_total_value -= 3;
}

async function extra_upgrade_slot_but_decrease_hands() {
    window.max_upgrades_amount += 1;
    window.hands_amount -= 1;
    window.max_hands_amount -= 1;
}

async function increase_hands_but_negative_blackjack() {
    window.hands_amount += 1;
    window.max_hands_amount += 1;
    window.blackjack_bonus_multiplier = -0.5;
}

async function increase_hands_but_less_discards() {
    if (window.discards_amount <= 0) { return; } // prevent negative discards
    window.hands_amount += 1;
    window.max_hands_amount += 1;
    window.discards_amount -= 1;
    window.max_discards_amount -= 1;
}
async function increase_discards_but_less_hands() {
    if (window.hands_amount <= 1) { return; } // prevent having no hands
    window.discards_amount += 1;
    window.max_discards_amount += 1;
    window.hands_amount -= 1;
    window.max_hands_amount -= 1;
}

async function increase_discards_but_draw_more() {
    window.discards_amount += 3;
    window.max_discards_amount += 3;
    window.forced_amount_draw += 5;
}

async function hand_now_1_later_2() {
    window.hands_amount = 1;
    window.max_hands_amount += 2;
}

async function gain_discard_each_hand() {
    window.discards_amount -= 3;
    window.max_discards_amount -= 3;
    window.gain_discard_each_hand_amount += 1;
}