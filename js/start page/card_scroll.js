const cardWidth = 88;  // width of the cards
const cardHeight = 124; //height of the cards

const deco_card = document.getElementById("deco_card");


choose_random_card()


// Function to create a new card
setInterval(() => {
  choose_random_card();
}, 1000);//tijd per card in ms



function change_card(col, row) {
  const xPercent = (col / 12) * 100; // change the 12 to the new value map numver (when changes)
  const yPercent = (row / 5) * 100;  // change the 5 to the new suit map numver (when changes)

  deco_card.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
}



function choose_random_card() {
  //choose random card from available cards
  let col = Math.floor(Math.random() * 13);
  let row = Math.floor(Math.random() * 6);

  if (row == 4 && col > 10) { // change coll higher depending on amount of special cards
    col = Math.floor(Math.random() * 11);
  }

  change_card(col, row);
}