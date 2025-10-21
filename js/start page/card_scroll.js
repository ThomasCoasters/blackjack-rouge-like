const cardWidth = 88;  // width of the cards
const cardHeight = 124; //height of the cards

const deco_card = document.getElementById("deco_card");


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
};



choose_random_card()


// Function to create a new card
setInterval(() => {
  choose_random_card();
}, 1000);//tijd per card in ms



function change_card(col, row) {
  const xPercent = (col / 12) * 100; // change the 12 to the new value map numver (when changes)
  const yPercent = (row / 4) * 100;  // change the 4 to the new suit map numver (when changes)

  deco_card.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
}



function choose_random_card() {
  //choose random card from available cards
  let col = Math.floor(Math.random() * 13);
  let row = Math.floor(Math.random() * 5);

  if (row == 4 && col > 0) { // change coll higher depending on amount of special cards
    col = 0; // reset to first special card
  }

  change_card(col, row);
}