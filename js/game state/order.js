window.forced_amount_draw = 2;

window.max_total_value = 21;

window.blackjack_bonus_multiplier = 1.5;

winning_score = 31;

current_round = 1;

window.max_upgrades_amount = 3;

//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));

const overlay = document.getElementById('overlay');

const total_hands_text = document.getElementById('total_hands_text');
const score_to_beat_amount_text = document.getElementById('score_to_beat_amount');
const blackjack_bonus_text = document.getElementById('blackjack_bonus_text');

const round_current = document.getElementById('round_current');

const amount_cards_in_deck_text = document.getElementById('cards_left_p');


window.hands_amount = 3;
window.max_hands_amount = 3;

const total_discards_text = document.getElementById('total_discards_text');

window.discards_amount = 4;
window.max_discards_amount = 4;


const urlvars = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

window.animation_speed;

if (urlvars) {
    const urlparams = new URLSearchParams(urlvars);
    current_background_color = urlparams.get('background_color');

    window.animation_speed = parseFloat(urlparams.get('animation_speed'));

    if (current_background_color == "null") {
        current_background_color = "#357D35";;
    }

    if (window.animation_speed == "null" || isNaN(window.animation_speed)) {
        window.animation_speed = 1;
    }



    document.body.style.backgroundColor = current_background_color;
}




async function start_turn(score) {
    // https://byby.dev/js-global-variables#:~:text=In%20JavaScript%2C%20you%20can%20use%20global%20variables%20across,system%20to%20import%20and%20export%20variables%20between%20files.
    amount_cards_in_deck_text.textContent = (window.available_cards.length - used_cards.length) + "/" + (window.available_cards.length + used_cards.length);

    window.discards_amount += window.gain_discard_each_hand_amount;
    window.isDealing = true;

    total_hands_text.textContent = hands_amount;
    score_to_beat_amount_text.textContent = winning_score;
    round_current.textContent = current_round;
    blackjack_bonus_text.textContent = "×" + window.blackjack_bonus_multiplier;

    total_discards_text.textContent = discards_amount;


    if (hands_amount <= 0 || score >= winning_score) {
        await win_round(score);
        return;
    } else {
        hands_amount -= 1;
    }

    for (let i = 0; i < forced_amount_draw; i++) {
        addCard();
        //https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
        await delay(500 * (1/window.animation_speed));
    }

    // https://byby.dev/js-global-variables#:~:text=In%20JavaScript%2C%20you%20can%20use%20global%20variables%20across,system%20to%20import%20and%20export%20variables%20between%20files.
    window.isDealing = false;
}


async function page_just_loaded() {
    screen_text_p.innerHTML = "<b>START</b>";
    
    
    screen_text.style.animation = "screen_text_animation";
    screen_text.style.animationDuration = 2500*(1/animation_speed) + "ms";
    screen_text.style.animationIterationCount = "1";

    background_music_play_normal();

    await screen_light();

    start_turn();

    await delay(1500*(1/animation_speed));
    screen_text.style.animation = "";
}


// https://stackoverflow.com/questions/520812/how-do-i-detect-when-a-web-page-is-loaded
window.onload = function() {
  page_just_loaded();
}




async function win_round(score) {
    if (score >= winning_score) {
        // Player wins the round
        await won_round();
        await reset();

        // start_turn(0);
    } else {
        // Player loses the round

        await delay(1000*(1/animation_speed));
        screen_text.style.animation = "none";
        void screen_text.offsetWidth; // trigger reflow to restart animation

        screen_text_p.innerHTML = "<b>You Lost</b>";

        screen_text.style.animation = "screen_text_animation";
        screen_text.style.animationDuration = 2500*(1/animation_speed) + "ms";
        screen_text.style.animationIterationCount = "1";

        await delay(1250*(1/animation_speed));

        await screen_darker(1);

        window.location.href = "start.html?" + "background_color=" + current_background_color + "&animation_speed=" + animation_speed;
        await delay(10000000000); // Prevent further code execution
    }
}

async function won_round() {
    hands_amount = max_hands_amount;
    discards_amount = max_discards_amount;
    winning_score += 10;
    current_round += 1;

    total_hands_text.textContent = hands_amount;
    score_to_beat_amount_text.textContent = winning_score;
    round_current.textContent = current_round;


    screen_text.style.animation = "none";
    void screen_text.offsetWidth; // trigger reflow to restart animation

    screen_text_p.innerHTML = "<b>You Won!</b>";
    
    
    screen_text.style.animation = "screen_text_animation";
    screen_text.style.animationDuration = 2500*(1/animation_speed) + "ms";
    screen_text.style.animationIterationCount = "1";

    await delay(1000*(1/animation_speed));

    await choose_upgrade_setup();
}




async function screen_darker(amount){
    overlay.style.zIndex = 10;
    overlay.style.opacity = amount;
    
    await delay(1000);
}

async function screen_light(){
    overlay.style.zIndex = -10;
    overlay.style.opacity = 0;
    await delay(1000);
}