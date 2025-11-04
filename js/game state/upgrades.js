const upgrade_container = document.getElementById("upgrade_container");

window.gain_discard_each_hand_amount = 0;

window.upgrade_type_weights = {
    "normal_cards": 1,
    "special_cards": 4,
    "permanent_upgrades": 3
};
window.all_upgrades = {
    "normal_cards": [{"suit": "hearts", "value": "ace", "hover_name": "ace of hearts", "hover_text": "hearts card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "hearts", "value": "2", "hover_name": "2 of hearts", "hover_text": "hearts card with an value of 2"}, {"suit": "hearts", "value": "3", "hover_name": "3 of hearts", "hover_text": "hearts card with an value 3"}, {"suit": "hearts", "value": "4", "hover_name": "4 of hearts", "hover_text": "hearts card with an value of 4"}, {"suit": "hearts", "value": "5", "hover_name": "5 of hearts", "hover_text": "hearts card with an value of 5"}, {"suit": "hearts", "value": "6", "hover_name": "6 of hearts", "hover_text": "hearts card with an value of 6"}, {"suit": "hearts", "value": "7", "hover_name": "7 of hearts", "hover_text": "hearts card with an value of 7"}, {"suit": "hearts", "value": "8", "hover_name": "8 of hearts", "hover_text": "hearts card with an value of 8"}, {"suit": "hearts", "value": "9", "hover_name": "9 of hearts", "hover_text": "hearts card with an value of 9"}, {"suit": "hearts", "value": "10", "hover_name": "10 of hearts", "hover_text": "hearts card with an value of 10"}, {"suit": "hearts", "value": "jack", "hover_name": "jack of hearts", "hover_text": "hearts face card with an value of 10"}, {"suit": "hearts", "value": "queen", "hover_name": "queen of hearts", "hover_text": "hearts face card with an value of 10"}, {"suit": "hearts", "value": "king", "hover_name": "king of hearts", "hover_text": "hearts face card with an value of 10"},
	{"suit": "diamonds", "value": "ace", "hover_name": "ace of diamonds", "hover_text": "diamonds card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "diamonds", "value": "2", "hover_name": "2 of diamonds", "hover_text": "diamonds card with an value of 2"}, {"suit": "diamonds", "value": "3", "hover_name": "3 of diamonds", "hover_text": "diamonds card with an value of 3"}, {"suit": "diamonds", "value": "4", "hover_name": "4 of diamonds", "hover_text": "diamonds card with an value of 4"}, {"suit": "diamonds", "value": "5", "hover_name": "5 of diamonds", "hover_text": "diamonds card with an value of 5"}, {"suit": "diamonds", "value": "6", "hover_name": "6 of diamonds", "hover_text": "diamonds card with an value of 6"}, {"suit": "diamonds", "value": "7", "hover_name": "7 of diamonds", "hover_text": "diamonds card with an value of 7"}, {"suit": "diamonds", "value": "8", "hover_name": "8 of diamonds", "hover_text": "diamonds card with an value of 8"}, {"suit": "diamonds", "value": "9", "hover_name": "9 of diamonds", "hover_text": "diamonds card with an value of 9"}, {"suit": "diamonds", "value": "10", "hover_name": "10 of diamonds", "hover_text": "diamonds card with an value of 10"}, {"suit": "diamonds", "value": "jack", "hover_name": "jack of diamonds", "hover_text": "diamonds face card with an value of 10"}, {"suit": "diamonds", "value": "queen", "hover_name": "queen of diamonds", "hover_text": "diamonds face card with an value of 10"}, {"suit": "diamonds", "value": "king", "hover_name": "king of diamonds", "hover_text": "diamonds face card with an value of 10"},
	{"suit": "spades", "value": "ace", "hover_name": "ace of spades", "hover_text": "spades card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "spades", "value": "2", "hover_name": "2 of spades", "hover_text": "spades card with an value of 2"}, {"suit": "spades", "value": "3", "hover_name": "3 of spades", "hover_text": "spades card with an value 3"}, {"suit": "spades", "value": "4", "hover_name": "4 of spades", "hover_text": "spades card with an value of 4"}, {"suit": "spades", "value": "5", "hover_name": "5 of spades", "hover_text": "spades card with an value of 5"}, {"suit": "spades", "value": "6", "hover_name": "6 of spades", "hover_text": "spades card with an value of 6"}, {"suit": "spades", "value": "7", "hover_name": "7 of spades", "hover_text": "spades card with an value of 7"}, {"suit": "spades", "value": "8", "hover_name": "8 of spades", "hover_text": "spades card with an value of 8"}, {"suit": "spades", "value": "9", "hover_name": "9 of spades", "hover_text": "spades card with an value of 9"}, {"suit": "spades", "value": "10", "hover_name": "10 of spades", "hover_text": "spades card with an value of 10"}, {"suit": "spades", "value": "jack", "hover_name": "jack of spades", "hover_text": "spades face card with an value of 10"}, {"suit": "spades", "value": "queen", "hover_name": "queen of spades", "hover_text": "spades face card with an value of 10"}, {"suit": "spades", "value": "king", "hover_name": "king of spades", "hover_text": "spades face card with an value of 10"},
	{"suit": "clubs", "value": "ace", "hover_name": "ace of clubs", "hover_text": "clubs card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "clubs", "value": "2", "hover_name": "2 of clubs", "hover_text": "clubs card with an value of 2"}, {"suit": "clubs", "value": "3", "hover_name": "3 of clubs", "hover_text": "clubs card with an value 3"}, {"suit": "clubs", "value": "4", "hover_name": "4 of clubs", "hover_text": "clubs card with an value of 4"}, {"suit": "clubs", "value": "5", "hover_name": "5 of clubs", "hover_text": "clubs card with an value of 5"}, {"suit": "clubs", "value": "6", "hover_name": "6 of clubs", "hover_text": "clubs card with an value of 6"}, {"suit": "clubs", "value": "7", "hover_name": "7 of clubs", "hover_text": "clubs card with an value of 7"}, {"suit": "clubs", "value": "8", "hover_name": "8 of clubs", "hover_text": "clubs card with an value of 8"}, {"suit": "clubs", "value": "9", "hover_name": "9 of clubs", "hover_text": "clubs card with an value of 9"}, {"suit": "clubs", "value": "10", "hover_name": "10 of clubs", "hover_text": "clubs card with an value of 10"}, {"suit": "clubs", "value": "jack", "hover_name": "jack of clubs", "hover_text": "clubs face card with an value of 10"}, {"suit": "clubs", "value": "queen", "hover_name": "queen of clubs", "hover_text": "clubs face card with an value of 10"}, {"suit": "clubs", "value": "king", "hover_name": "king of clubs", "hover_text": "clubs face card with an value of 10"}
    ],

    "special_cards": [
    {"suit": "special_row_1", "value": "special_value:random", "hover_name": "a random joker", "hover_text": "'they locked me in, but I got free, free, now I make chaos, chaos with my value of ???'", "special": random_score, "special_location": "score", "effect": play_freedom_motif}, // jevil deltarune reference
    {"suit": "special_row_1", "value": "special_value:none", "hover_name": "king of the jokers", "hover_text": "'I am the king here, here and like chaos, chaos so I'll retrigger, retrigger all king cards' (ALL king cards get +1 retrigger for every use)" , "special": retrigger_all_kings, "special_location": "score", "effect": play_freedom_motif},// jevil deltarune reference
    {"suit": "special_row_1", "value": "special_value:5_1", "reusing": true, "hover_name": "shock em' and they'll stay", "hover_text": "maybe shocking this card will make it's 5 score be reusable", "special": shock_sfx, "special_location": "score"}, // hassan dog reference
    {"suit": "special_row_1", "value": "special_value:5_2", "retrigger": 1, "hover_name": "amazing performer", "hover_text": "this performance is so good that it got a 5/5 score and can be retriggered once", "special": trobbio_sfx, "special_location": "score"}, // trobbio refrence
    {"suit": "special_row_1", "value": "special_value:2", "reusing": true, "hover_name": "Spamton's Assistant", "hover_text": "Keeps coming back for another DEAL!! reusable card with a value of 2 and gives 1 discard when used", "special": scrap_drone_special, "special_location": "score"}, // spamton deltarune reference
    {"suit": "special_row_1", "value": "special_value:increase_max", "hover_name": "overclock monkey", "hover_text": "the monkeys designed some usefull stuff: this hand only, increase max total value by +7", "special": increase_max_total_value_7, "special_location": "total value"}, // btd6 refrence
    {"suit": "special_row_1", "value": "special_value:reusable+retrigger", "hover_name": "weird route", "hover_text": "maybe things took a weird route and a random held card will retrigger and be reusable", "special": reusable_and_retrigger, "special_location": "score"}, // deltarune reference
    {"suit": "special_row_1", "value": "special_value:run_save", "reusing": true, "hover_name": "yodelling protector", "hover_text": "this one of a kind card is reusable and will protect you if you did not get the required score in your last hand (while this card is in play) and breaks after use", "special": run_save, "special_location": "score", "effect": remove_run_save_special_card}, // shakra reference
    {"suit": "special_row_1", "value": "special_value:suit_rally", "hover_name": "horde of grubs", "hover_text": "this card will give 3 score for every card that has a suit that is the same as another card suit", "special": suit_rally, "special_location": "score", "effect": grub_sfx}, // hk refrence
    {"suit": "special_row_1", "value": "special_value:value_rally", "hover_name": "horde of fleas", "hover_text": "this card will give 7 score for every card that has a value that is the same as another card value", "special": value_rally, "special_location": "score", "effect": flea_sfx}, // hk refrence
    {"suit": "special_row_1", "value": "special_value:lower_score", "reusing": true, "hover_name": "deadly skarr traps", "hover_text": "this reusable card has a value of 2 and sets a trap that lowers the required score by 0.5 for every card in play (rounds up) every use", "special": lower_required_score, "special_location": "score"}, // hk refrence
    {"suit": "special_row_1", "value": "special_value:gain_card", "hover_name": "zote's boat", "hover_text": "this card has a value of 3 and gives a zote? type of card when used", "special": summon_zote_card, "special_location": "score", "weight": 3.5}, // hk refrence
],

    "permanent_upgrades": [
    {"suit": "permanent_upgrade_row_1", "value": "increase_max_total_value", "hover_name": "power of the vessel", "hover_text": "'Sealed away it's power grows' permanent upgrade: increases the maximum total value by 2", "effect": increase_max_total_value},// hk refrence
    {"suit": "permanent_upgrade_row_1", "value": "increase_max_total_value_but_less_discards", "hover_name": "fragile strength", "hover_text": "'Great strength but great risks' permanent upgrade: increases the maximum total value by 5 but have 1 less discard", "effect": increase_max_total_value_but_less_discards}, // hk refrence
    {"suit": "permanent_upgrade_row_1", "value": "increase_blackjack_bonus", "hover_name": "blue SOUL focus", "hover_text": "'patience brings better score' permanent upgrade: increases the blackjack bonus multiplier by 0.5", "effect": increase_blackjack_bonus}, // undertale reference
    {"suit": "permanent_upgrade_row_1", "value": "extra_upgrade_slot_but_decrease_max_total_value", "hover_name": "A 🕈︎📬︎🕈︎ ☝︎☟︎✌︎💧︎❄︎☜︎☼︎ deal", "hover_text": "'A deal with 🕈︎📬︎🕈︎ ☝︎☟︎✌︎💧︎❄︎☜︎☼︎ can't be good right?' permanent upgrade: increases the amount of upgrades you can choose from by 1 but maximum total value decreases by 3", "effect": extra_upgrade_slot_but_decrease_max_total_value}, // undertale reference
    {"suit": "permanent_upgrade_row_1", "value": "extra_upgrade_slot_but_decrease_hands", "hover_name": "Deal for a weird crystal", "hover_text": "'What does this crystal do?' permanent upgrade: increases the amount of upgrades you can choose from by 1 but maximum number of hands decreases by 1", "effect": extra_upgrade_slot_but_decrease_hands}, // detarune reference
    {"suit": "permanent_upgrade_row_1", "value": "increase_hands_but_negative_blackjack", "hover_name": "Jester's chaos", "hover_text": "'Chaos, Chaos! more turns less mercy!' permanent upgrade: increases number of hands by 1 but decrease blackjack multiplier to -0.5 (losing points for blackjack)", "effect": increase_hands_but_negative_blackjack}, // detarune reference
    {"suit": "permanent_upgrade_row_1", "value": "increase_hands_but_less_discards", "hover_name": "drifter's cloak", "hover_text": "'Go further, but remove what brings you down' permanent upgrade: increases number of hands by 1 but have 1 less discard", "effect": increase_hands_but_less_discards}, // hk refrence
    {"suit": "permanent_upgrade_row_1", "value": "increase_discards_but_less_hands", "hover_name": "silken strategy", "hover_text": "'Embrace the silk, but lose your grip' permanent upgrade: increases number of discards by 1 but have 1 less hand", "effect": increase_discards_but_less_hands}, // hk refrence
    {"suit": "permanent_upgrade_row_1", "value": "increase_discards_but_draw_more", "hover_name": "soul overflow", "hover_text": "'Embrace the chaos' permanent upgrade: increases number of discards by 6 but draw 5 more cards at the beginning", "effect": increase_discards_but_draw_more}, // hk reference
    {"suit": "permanent_upgrade_row_1", "value": "1_hand_now", "hover_name": "glass hand", "hover_text": "'make sure it does not shatter' permanent upgrade: this round you have 1 hand but after this round you will get 2", "effect": hand_now_1_later_2},
    {"suit": "permanent_upgrade_row_1", "value": "gain_discard_each_hand", "hover_name": "'Make it turn based'", "hover_text": "'Turns are really important' permanent upgrade: gain a discard every round but start with 2 less discards", "effect": gain_discard_each_hand},
    {"suit": "permanent_upgrade_row_1", "value": "less_hands_but_reuse_face_cards", "hover_name": "Mask of a performer", "hover_text": "'the show must go on' permanent upgrade: lose 1 hand but can reuse face cards", "effect": less_hands_but_reuse_face_cards},// hk refrence
    {"suit": "permanent_upgrade_row_1", "value": "less_hands_and_discards_but_retrigger_face_cards", "hover_name": "void's echo", "hover_text": "'From the abyss you will gain strength at a great cost' permanent upgrade: lose 1 hand and 1 discard but can retrigger face cards", "effect": less_hands_and_discards_but_retrigger_face_cards}, // hk refrence
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
    "special_value:increase_max": 5,
    "special_value:reusable+retrigger": 6,
    "special_value:run_save": 7,
    "special_value:suit_rally": 9,
    "special_value:value_rally": 8,
    "special_value:lower_score": 10,
    "special_value:gain_card": 11,



    "increase_max_total_value": 0,
    "increase_max_total_value_but_less_discards": 1,
    "increase_blackjack_bonus": 2,
    "extra_upgrade_slot_but_decrease_max_total_value": 3,
    "extra_upgrade_slot_but_decrease_hands": 4,
    "increase_hands_but_negative_blackjack": 5,
    "increase_hands_but_less_discards": 6,
    "increase_discards_but_less_hands": 7,
    "increase_discards_but_draw_more": 8,
    "1_hand_now": 9,
    "gain_discard_each_hand": 10,
    "less_hands_but_reuse_face_cards": 11,
    "less_hands_and_discards_but_retrigger_face_cards": 12
};


const row_map = {
    "hearts": 2,
    "diamonds": 1,
    "spades": 3,
    "clubs": 0,

    "special_row_1": 4,
    "permanent_upgrade_row_1": 5

};






async function choose_upgrade_setup() {
    upgrade_container.style.pointerEvents = "auto";

    screen_darker(0.8);

    start_upgrade_music();

    await delay(1000);

    await choose_upgrade_type();
}


async function choose_upgrade_type() {
    const upgradeTypes = Object.keys(window.all_upgrades);
    
    for (let i = 0; i < window.max_upgrades_amount; i++) {
        const selectedType = weightedPick(
            upgradeTypes,
            (key) => (window.upgrade_type_weights?.[key] ?? 1)
        );

        const upgrade = await choose_upgrade(selectedType);

        if (upgrade.special === summon_zote_card) {
            background_music_zote("upgrade");
        }

        upgrade_container.appendChild(await create_upgrade_card(upgrade, selectedType));
    }
}


async function choose_upgrade(type) {
    const upgradeArray = window.all_upgrades[type];

    // Use upgrade.weight if provided; default 1
    return weightedPick(
        upgradeArray,
        (u) => (typeof u.weight === "number" ? Math.max(0, u.weight) : 1)
    );
}


function weightedPick(array, getWeight) {
    const weights = array.map(getWeight);
    const total = weights.reduce((a, b) => a + b, 0);
    if (total <= 0) return array[Math.floor(Math.random() * array.length)];
    let r = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        r -= weights[i];
        if (r < 0) return array[i];
    }
    return array[array.length - 1];
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
    upgrade_container.style.pointerEvents = "none";

    if (upgrade_type === "special_cards" || upgrade_type === "normal_cards") {
        window.available_cards.push(upgrade);
    }

    upgrade_container.innerHTML = "";
    hide_Card_Info();
    if (upgrade.effect) {
        await upgrade.effect();
    }
    await screen_light();
    start_turn();
}



async function increase_max_total_value() {
    window.max_total_value += 2;
}

async function increase_max_total_value_but_less_discards() {
    window.max_total_value += 5;
    window.discards_amount -= 1;
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
    window.hands_amount += 1;
    window.max_hands_amount += 1;
    window.discards_amount -= 1;
    window.max_discards_amount -= 1;
}
async function increase_discards_but_less_hands() {
    window.discards_amount += 1;
    window.max_discards_amount += 1;
    window.hands_amount -= 1;
    window.max_hands_amount -= 1;
}

async function increase_discards_but_draw_more() {
    window.discards_amount += 6;
    window.max_discards_amount += 6;
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

async function less_hands_but_reuse_face_cards() {
    window.hands_amount -= 1;
    window.max_hands_amount -= 1;

    const cardArrays = [window.held_cards, window.available_cards, used_cards, window.all_upgrades["normal_cards"]];
    
    for (const cardArray of cardArrays) {
        for (let i = 0; i < cardArray.length; i++) {
            if (cardArray[i].value === "king" || cardArray[i].value === "queen" || cardArray[i].value === "jack") {
                cardArray[i].reusing = true;
            }
        }
    }
}

async function less_hands_and_discards_but_retrigger_face_cards() {
    window.hands_amount -= 1;
    window.max_hands_amount -= 1;
    window.discards_amount -= 1;
    window.max_discards_amount -= 1;
    
    const cardArrays = [window.held_cards, window.available_cards, used_cards, window.all_upgrades["normal_cards"]];
    
    for (const cardArray of cardArrays) {
        for (let i = 0; i < cardArray.length; i++) {
            if (cardArray[i].value === "king" || cardArray[i].value === "queen" || cardArray[i].value === "jack") {
                cardArray[i].retrigger = (cardArray[i].retrigger || 0) + 1;
            }
        }
    }
}

function remove_run_save_special_card() {
    window.all_upgrades["special_cards"] = window.all_upgrades["special_cards"].filter(card => card.value !== "special_value:run_save");
}