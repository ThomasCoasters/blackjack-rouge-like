const cardWidth = 88;  // width of the cards
const cardHeight = 124; //height of the cards

const cardsContainer = document.getElementById("cardsContainer");

//list stolen from zweeds pensten in godot
var available_cards = [
	{"suit": "hearts", "value": "ace"}, {"suit": "hearts", "value": "2"}, {"suit": "hearts", "value": "3"}, {"suit": "hearts", "value": "4"}, {"suit": "hearts", "value": "5"}, {"suit": "hearts", "value": "6"}, {"suit": "hearts", "value": "7"}, {"suit": "hearts", "value": "8"}, {"suit": "hearts", "value": "9"}, {"suit": "hearts", "value": "10"}, {"suit": "hearts", "value": "jack"}, {"suit": "hearts", "value": "queen"}, {"suit": "hearts", "value": "king"},
	{"suit": "diamonds", "value": "ace"}, {"suit": "diamonds", "value": "2"}, {"suit": "diamonds", "value": "3"}, {"suit": "diamonds", "value": "4"}, {"suit": "diamonds", "value": "5"}, {"suit": "diamonds", "value": "6"}, {"suit": "diamonds", "value": "7"}, {"suit": "diamonds", "value": "8"}, {"suit": "diamonds", "value": "9"}, {"suit": "diamonds", "value": "10"}, {"suit": "diamonds", "value": "jack"}, {"suit": "diamonds", "value": "queen"}, {"suit": "diamonds", "value": "king"},
	{"suit": "spades", "value": "ace"}, {"suit": "spades", "value": "2"}, {"suit": "spades", "value": "3"}, {"suit": "spades", "value": "4"}, {"suit": "spades", "value": "5"}, {"suit": "spades", "value": "6"}, {"suit": "spades", "value": "7"}, {"suit": "spades", "value": "8"}, {"suit": "spades", "value": "9"}, {"suit": "spades", "value": "10"}, {"suit": "spades", "value": "jack"}, {"suit": "spades", "value": "queen"}, {"suit": "spades", "value": "king"},
	{"suit": "clubs", "value": "ace"}, {"suit": "clubs", "value": "2"}, {"suit": "clubs", "value": "3"}, {"suit": "clubs", "value": "4"}, {"suit": "clubs", "value": "5"}, {"suit": "clubs", "value": "6"}, {"suit": "clubs", "value": "7"}, {"suit": "clubs", "value": "8"}, {"suit": "clubs", "value": "9"}, {"suit": "clubs", "value": "10"}, {"suit": "clubs", "value": "jack"}, {"suit": "clubs", "value": "queen"}, {"suit": "clubs", "value": "king"},
  // {"suit": "clubs", "value": "ace", "special": alert_ja},
];

var used_cards = [];

window.held_cards = []; // cards that are currently held by the player

// also stolen =)
const suit_map = {
  "hearts": 0,
  "diamonds": 1,
  "spades": 2,
  "clubs": 3
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
  "king": 12
};



// Function to create a new card
function addCard() {
  //check if there are available cards and reshuffle if not
  if (available_cards.length === 0) {
    alert("refill");
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
  held_cards.push(card); // add to held cards


  create_new_card(card, cardsContainer, "card");

  // if (card.special){
  //   card.special();
  // }
}


// function alert_ja() {
//     alert("ja");
// }

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

  // Add the new card to the container
  container.appendChild(newCard);

  update_Total_Value();
}