const cardWidth = 88;  // width of the cards
const cardHeight = 124; //height of the cards

const deco_card = document.getElementById("deco_card");

//list stolen from zweeds pensten in godot
var available_cards = [
	{"suit": "hearts", "value": "ace"}, {"suit": "hearts", "value": "2"}, {"suit": "hearts", "value": "3"}, {"suit": "hearts", "value": "4"}, {"suit": "hearts", "value": "5"}, {"suit": "hearts", "value": "6"}, {"suit": "hearts", "value": "7"}, {"suit": "hearts", "value": "8"}, {"suit": "hearts", "value": "9"}, {"suit": "hearts", "value": "10"}, {"suit": "hearts", "value": "jack"}, {"suit": "hearts", "value": "queen"}, {"suit": "hearts", "value": "king"},
	{"suit": "diamonds", "value": "ace"}, {"suit": "diamonds", "value": "2"}, {"suit": "diamonds", "value": "3"}, {"suit": "diamonds", "value": "4"}, {"suit": "diamonds", "value": "5"}, {"suit": "diamonds", "value": "6"}, {"suit": "diamonds", "value": "7"}, {"suit": "diamonds", "value": "8"}, {"suit": "diamonds", "value": "9"}, {"suit": "diamonds", "value": "10"}, {"suit": "diamonds", "value": "jack"}, {"suit": "diamonds", "value": "queen"}, {"suit": "diamonds", "value": "king"},
	{"suit": "spades", "value": "ace"}, {"suit": "spades", "value": "2"}, {"suit": "spades", "value": "3"}, {"suit": "spades", "value": "4"}, {"suit": "spades", "value": "5"}, {"suit": "spades", "value": "6"}, {"suit": "spades", "value": "7"}, {"suit": "spades", "value": "8"}, {"suit": "spades", "value": "9"}, {"suit": "spades", "value": "10"}, {"suit": "spades", "value": "jack"}, {"suit": "spades", "value": "queen"}, {"suit": "spades", "value": "king"},
	{"suit": "clubs", "value": "ace"}, {"suit": "clubs", "value": "2"}, {"suit": "clubs", "value": "3"}, {"suit": "clubs", "value": "4"}, {"suit": "clubs", "value": "5"}, {"suit": "clubs", "value": "6"}, {"suit": "clubs", "value": "7"}, {"suit": "clubs", "value": "8"}, {"suit": "clubs", "value": "9"}, {"suit": "clubs", "value": "10"}, {"suit": "clubs", "value": "jack"}, {"suit": "clubs", "value": "queen"}, {"suit": "clubs", "value": "king"},
];


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



choose_random_card()


// Function to create a new card
setInterval(() => {
  choose_random_card();
}, 1000);//tijd per card in ms



function change_card(card) {
  const col = value_map[card.value];
  const row = suit_map[card.suit];


  const xPercent = (col / 12) * 100; // change the 12 to the new value map numver (when changes)
  const yPercent = (row / 3) * 100;  // change the 3 to the new suit map numver (when changes)

  deco_card.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
}



function choose_random_card() {
  //choose random card from available cards
  const card = available_cards[Math.floor(Math.random() * available_cards.length)];

  change_card(card);
}