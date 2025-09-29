const card = document.getElementById("deck_cards");
const cards = document.getElementsByClassName("deck_cards");
const play_card_box = document.getElementById("play_card_box");

// https://byby.dev/js-global-variables#:~:text=In%20JavaScript%2C%20you%20can%20use%20global%20variables%20across,system%20to%20import%20and%20export%20variables%20between%20files.
window.isDealing = false;

let is_dragging = false;
let card_x;
let card_y;

let start_pos_x = card.offsetLeft;
let start_pos_y = card.offsetTop;


// follow code gevonden op: https://www.youtube.com/watch?v=BfWZmBzVxlw

card.addEventListener("mousedown", (event) => {
    // Prevent dragging if cards are being dealt
    if (isDealing){
        return;
    }
    
    is_dragging = true;

    hide_drag_box();

    // calculate mouse offset inside the card
    offsetX = event.clientX - card.offsetLeft;
    offsetY = event.clientY - card.offsetTop;
    
    card.style.cursor = "grabbing";

    card.style.transition = "none";
});

document.addEventListener("mousemove", (event) => {
    if (is_dragging) {
        card_x = event.pageX;
        card_y = event.pageY;

        card.style.top = card_y - offsetY + "px";
        card.style.left = card_x - offsetX + "px";

        mouse_out_of_screen(card_y, card_x)
    }
});

document.addEventListener("mouseup", (event) => {
    stop_dragging();
});



function mouse_out_of_screen(y_pos, x_pos){
    if (y_pos < 0 || y_pos > window.innerHeight || x_pos < 0 || x_pos > window.innerWidth){
        stop_dragging();
    }
}



function stop_dragging() {
    if (is_dragging){
        is_dragging = false;
        card.style.cursor = "grab";


        resetPosition()
    }
}


function resetPosition() {
    hide_drag_box();

    if (is_card_in_draw_new_card(card, play_card_box)){
        addCard();
    }
    
    card.style.transition = "top 0.3s ease, left 0.3s ease"; // ik ben blij dat ik door de tutorial dit snap dus daarom weet ik nu ook hoe dit moest

    card.style.top = start_pos_y + "px";
    card.style.left = start_pos_x + "px";

    
}



// dit from enzo vind ik heel snel door gewoon beginnen met typen en dan door dingen scrollen tot ik iets vind dat klinkt als wat ik zoek
Array.from(cards).forEach((card) => {
    // na heel lan draggen zoeken vond ik eindelijk dit:https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#disabling_dragging
    card.addEventListener('dragstart', (e) => {
        console.log("drag did not start")
        e.preventDefault();
    });
});






//https://bobbyhadz.com/blog/javascript-check-if-two-elements-overlap
function is_card_in_draw_new_card(draw_card, play_card_box){
    const rect1 = draw_card.getBoundingClientRect();
    const rect2 = play_card_box.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

//https://stackoverflow.com/questions/6242976/javascript-hide-show-element met eigen twist (opacity inplaats van visibility)

function hide_drag_box(){
    if (is_dragging) {
        play_card_box.style.opacity = "1";
    } else {
        play_card_box.style.opacity = "0";
    }
}