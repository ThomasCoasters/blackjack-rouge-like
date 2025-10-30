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


window.window.hands_amount = 3;
window.max_hands_amount = 3;

const total_discards_text = document.getElementById('total_discards_text');

window.discards_amount = 4;
window.max_discards_amount = 4;

window.music_volume = 100;

window.animation_speed;

current_background_color = "#357D35";
window.animation_speed = 1;
music_volume = 100;

document.body.style.backgroundColor = current_background_color;


const tutorial_box = document.getElementById('tutorial_box');
const tutorial_text_p = document.getElementById('tutorial_text_p');

const tutorial_overlay = document.getElementById('tutorial_overlay');

window.step = 0;



async function tutorial_play(step) {
    update_values();
    window.step = step;
    switch (step) {
        case 0:
            tutorial_overlay.addEventListener('click', () => tutorial_play(1), { once: true });
            tutorial_text_p.innerHTML = "Welcome to the tutorial!<br>click or do the question asked to continue.";

            addCard(0);
            addCard(1);
            break;
        
        case 1:
            tutorial_overlay.style.zIndex = -4000;
            
            window.isDealing = false;
            tutorial_text_p.innerHTML = "You need to draw cards to be able to win.<br>To draw a card, drag the bottom right card that is face down to the bottom dotted line box.";
            break;
        case 2:
            tutorial_overlay.addEventListener('click', () => tutorial_play(3), { once: true });
            tutorial_overlay.style.zIndex = 5000;
            tutorial_text_p.innerHTML = "Great job!<br>On the bottom you can see the total value of your hand.";
            break;
        case 3:
            tutorial_overlay.style.zIndex = -4000;
            
            window.isDealing = false;
            tutorial_text_p.innerHTML = "Now lets play the cards.<br>To play a card, drag the bottom right card again but now to the top.";
            break;
        case 4:
            tutorial_overlay.addEventListener('click', () => tutorial_play(5), { once: true });
            tutorial_overlay.style.zIndex = 5000;
            tutorial_text_p.innerHTML = "Well done!<br>If your total value exceeds 21, you will bust and lose the round.";
            break;
        // Add more tutorial steps as needed



        // eerst vertellen welkom GEDAAN
        // laat player drawen GEDAAN 
        // leg value uit GEDAAN
        // laat ze playen GEDAAN


        // leg round score uit
        // leg score to beat uit
        // leg hands uit
        // laat nog geen keer pakken
        // laat nog geen keer pakken
        // het is > 21
        // leg bust uit
        // leg discards uit
        // laat ze discarden
        // leg blackjack bonus uit
        // speel de blackjack
        // krijg een ace
        // hover uitleggen
        // speel een kaart
        // ace gaat van 11 naar 1 vertel van hover vertelde info
        // speel en win de round
        // leg special cards uit
        // speel een special card en win de round
        // leg upgrades uit
        // laat ze een upgrade kiezen
        // win de round
        // einde tutorial
    }
}


async function update_values() {
    amount_cards_in_deck_text.textContent = window.available_cards.length + "/" + (window.available_cards.length + used_cards.length);

    window.isDealing = true;

    total_hands_text.textContent = window.hands_amount;
    score_to_beat_amount_text.textContent = winning_score;
    round_current.textContent = current_round;
    blackjack_bonus_text.textContent = "×" + window.blackjack_bonus_multiplier;

    total_discards_text.textContent = window.discards_amount;
}


async function start_turn(score) {
    // https://byby.dev/js-global-variables#:~:text=In%20JavaScript%2C%20you%20can%20use%20global%20variables%20across,system%20to%20import%20and%20export%20variables%20between%20files.
    


    if (window.hands_amount <= 0 || score >= winning_score) {
        await win_round(score);
        return;
    } else {
        window.hands_amount -= 1;
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
    screen_text_p.innerHTML = "<b>welcome</b>";
    
    
    screen_text.style.animation = "screen_text_animation";
    screen_text.style.animationDuration = 2500*(1/animation_speed) + "ms";
    screen_text.style.animationIterationCount = "1";

    background_music_play_normal();

    await screen_light();

    tutorial_play(0);

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
    window.hands_amount = max_hands_amount;
    window.discards_amount = max_discards_amount;
    window.winning_score += 10;
    window.current_round += 1;

    total_hands_text.textContent = window.hands_amount;
    score_to_beat_amount_text.textContent = window.winning_score;
    round_current.textContent = window.current_round;


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