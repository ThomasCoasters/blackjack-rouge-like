const cardWidth = 88;  // width of the cards
const cardHeight = 124; //height of the cards

const cardsContainer = document.getElementById("cardsContainer");

//list stolen from zweeds pensten in godot + modifications
var available_cards = [
	{"suit": "hearts", "value": "ace", "hover_name": "ace of hearts", "hover_text": "hearts card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "hearts", "value": "2", "hover_name": "2 of hearts", "hover_text": "hearts card with an value of 2"}, {"suit": "hearts", "value": "3", "hover_name": "3 of hearts", "hover_text": "hearts card with an value 3"}, {"suit": "hearts", "value": "4", "hover_name": "4 of hearts", "hover_text": "hearts card with an value of 4"}, {"suit": "hearts", "value": "5", "hover_name": "5 of hearts", "hover_text": "hearts card with an value of 5"}, {"suit": "hearts", "value": "6", "hover_name": "6 of hearts", "hover_text": "hearts card with an value of 6"}, {"suit": "hearts", "value": "7", "hover_name": "7 of hearts", "hover_text": "hearts card with an value of 7"}, {"suit": "hearts", "value": "8", "hover_name": "8 of hearts", "hover_text": "hearts card with an value of 8"}, {"suit": "hearts", "value": "9", "hover_name": "9 of hearts", "hover_text": "hearts card with an value of 9"}, {"suit": "hearts", "value": "10", "hover_name": "10 of hearts", "hover_text": "hearts card with an value of 10"}, {"suit": "hearts", "value": "jack", "hover_name": "jack of hearts", "hover_text": "hearts face card with an value of 10"}, {"suit": "hearts", "value": "queen", "hover_name": "queen of hearts", "hover_text": "hearts face card with an value of 10"}, {"suit": "hearts", "value": "king", "hover_name": "king of hearts", "hover_text": "hearts face card with an value of 10"},
	{"suit": "diamonds", "value": "ace", "hover_name": "ace of diamonds", "hover_text": "diamonds card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "diamonds", "value": "2", "hover_name": "2 of diamonds", "hover_text": "diamonds card with an value of 2"}, {"suit": "diamonds", "value": "3", "hover_name": "3 of diamonds", "hover_text": "diamonds card with an value of 3"}, {"suit": "diamonds", "value": "4", "hover_name": "4 of diamonds", "hover_text": "diamonds card with an value of 4"}, {"suit": "diamonds", "value": "5", "hover_name": "5 of diamonds", "hover_text": "diamonds card with an value of 5"}, {"suit": "diamonds", "value": "6", "hover_name": "6 of diamonds", "hover_text": "diamonds card with an value of 6"}, {"suit": "diamonds", "value": "7", "hover_name": "7 of diamonds", "hover_text": "diamonds card with an value of 7"}, {"suit": "diamonds", "value": "8", "hover_name": "8 of diamonds", "hover_text": "diamonds card with an value of 8"}, {"suit": "diamonds", "value": "9", "hover_name": "9 of diamonds", "hover_text": "diamonds card with an value of 9"}, {"suit": "diamonds", "value": "10", "hover_name": "10 of diamonds", "hover_text": "diamonds card with an value of 10"}, {"suit": "diamonds", "value": "jack", "hover_name": "jack of diamonds", "hover_text": "diamonds face card with an value of 10"}, {"suit": "diamonds", "value": "queen", "hover_name": "queen of diamonds", "hover_text": "diamonds face card with an value of 10"}, {"suit": "diamonds", "value": "king", "hover_name": "king of diamonds", "hover_text": "diamonds face card with an value of 10"},
	{"suit": "spades", "value": "ace", "hover_name": "ace of spades", "hover_text": "spades card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "spades", "value": "2", "hover_name": "2 of spades", "hover_text": "spades card with an value of 2"}, {"suit": "spades", "value": "3", "hover_name": "3 of spades", "hover_text": "spades card with an value 3"}, {"suit": "spades", "value": "4", "hover_name": "4 of spades", "hover_text": "spades card with an value of 4"}, {"suit": "spades", "value": "5", "hover_name": "5 of spades", "hover_text": "spades card with an value of 5"}, {"suit": "spades", "value": "6", "hover_name": "6 of spades", "hover_text": "spades card with an value of 6"}, {"suit": "spades", "value": "7", "hover_name": "7 of spades", "hover_text": "spades card with an value of 7"}, {"suit": "spades", "value": "8", "hover_name": "8 of spades", "hover_text": "spades card with an value of 8"}, {"suit": "spades", "value": "9", "hover_name": "9 of spades", "hover_text": "spades card with an value of 9"}, {"suit": "spades", "value": "10", "hover_name": "10 of spades", "hover_text": "spades card with an value of 10"}, {"suit": "spades", "value": "jack", "hover_name": "jack of spades", "hover_text": "spades face card with an value of 10"}, {"suit": "spades", "value": "queen", "hover_name": "queen of spades", "hover_text": "spades face card with an value of 10"}, {"suit": "spades", "value": "king", "hover_name": "king of spades", "hover_text": "spades face card with an value of 10"},
	{"suit": "clubs", "value": "ace", "hover_name": "ace of clubs", "hover_text": "clubs card with an value of 1 or 11 but an score of 11", "special": ace_special, "special_location": "total value", "different_value_and_score": true}, {"suit": "clubs", "value": "2", "hover_name": "2 of clubs", "hover_text": "clubs card with an value of 2"}, {"suit": "clubs", "value": "3", "hover_name": "3 of clubs", "hover_text": "clubs card with an value 3"}, {"suit": "clubs", "value": "4", "hover_name": "4 of clubs", "hover_text": "clubs card with an value of 4"}, {"suit": "clubs", "value": "5", "hover_name": "5 of clubs", "hover_text": "clubs card with an value of 5"}, {"suit": "clubs", "value": "6", "hover_name": "6 of clubs", "hover_text": "clubs card with an value of 6"}, {"suit": "clubs", "value": "7", "hover_name": "7 of clubs", "hover_text": "clubs card with an value of 7"}, {"suit": "clubs", "value": "8", "hover_name": "8 of clubs", "hover_text": "clubs card with an value of 8"}, {"suit": "clubs", "value": "9", "hover_name": "9 of clubs", "hover_text": "clubs card with an value of 9"}, {"suit": "clubs", "value": "10", "hover_name": "10 of clubs", "hover_text": "clubs card with an value of 10"}, {"suit": "clubs", "value": "jack", "hover_name": "jack of clubs", "hover_text": "clubs face card with an value of 10"}, {"suit": "clubs", "value": "queen", "hover_name": "queen of clubs", "hover_text": "clubs face card with an value of 10"}, {"suit": "clubs", "value": "king", "hover_name": "king of clubs", "hover_text": "clubs face card with an value of 10"},
  // {"suit": "special_row_1", "value": "special_value:5", "retrigger": 1, "hover_name": "reusable waste", "hover_text": "card that can be reused with no suit but a value of 5"},
  // {"suit": "special_row_1", "value": "special_value:5", "reusing": true, "hover_name": "reusable waste", "hover_text": "card that can be reused with no suit but a value of 5"},
];

var used_cards = [];

window.held_cards = []; // cards that are currently held by the player

// also stolen =)
const suit_map = {
  "hearts": 2,
  "diamonds": 1,
  "spades": 3,
  "clubs": 0,
  
  "special_row_1": 4
};

// also stolen =)
const value_map = {
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

  "special_value:5": 0
};



// Function to create a new card
function addCard() {
  //check if there are available cards and reshuffle if not
  if (available_cards.length === 0) {
    available_cards = used_cards;
    used_cards = [];
  }



  //choose random card from available cards
  const card = available_cards[Math.floor(Math.random() * available_cards.length)];

  //remove chosen card from available cards
  const index = available_cards.indexOf(card); // volgens google geeft indexof -1 als het niet bestaat dus daarom de in inderx !== -1 (waarom deed ik dit nl?)

  if (index !== -1) {
    available_cards.splice(index, 1); // reomevs 1 card
  }


  used_cards.push(card); //add chosen card to used cards
  window.held_cards.push(card); // add to held cards


  create_new_card(card, cardsContainer, "card");
}



function create_new_card(card, container, new_class_name) {
  // Create new card
  const newCard = document.createElement("div");
  newCard.className = new_class_name;
  
  // Get selected values
  const col = value_map[card.value];  // column = value index
  const row = suit_map[card.suit];    // row = suit index

  // Calculate position
  const x = -col * cardWidth;
  const y = -row * cardHeight;

  // Set background position
  newCard.style.backgroundPosition = `${x}px ${y}px`;


  if (!card.hover_name && !card.hover_text) { // failsafe for if it doesn't exist
    card.hover_name = "Unknown";
    card.hover_text = "No description available.";
  }

  if (new_class_name === "used card" && !card.reusing) { // only reusing cards (that are used) get the hover text
    newCard.style.pointerEvents = "none"; // disable hover effects
    container.appendChild(newCard);
    return; 
  }

  // Add hover event listeners to show card info

  newCard.addEventListener('mouseover', () => {
    show_Card_Info(newCard, card.hover_name, card.hover_text, card);
  });

  newCard.addEventListener('mouseout', () => {
    hide_Card_Info();
  });
  
  // Add the new card to the container
  container.appendChild(newCard);

  if (new_class_name === "used card") {
    return; 
  }

  update_Total_Value();
}