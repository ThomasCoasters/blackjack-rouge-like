window.forced_amount_draw = 2;

window.max_total_value = 21;

window.blackjack_bonus_multiplier = 1.5;

winning_score = 75;

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

            addCard();
            addCard();
            break;
        
        case 1:
            tutorial_overlay.style.zIndex = -4000;
            
            window.isDealing = false;
            tutorial_text_p.innerHTML = "You need to draw cards to be able to win.<br>To draw a card, drag the bottom right card that is face down to the bottom dotted line box.";
            break;

        case 2:
            tutorial_overlay.addEventListener('click', () => tutorial_play(3), { once: true });
            tutorial_text_p.innerHTML = "Great job!<br>On the bottom you can see the total value of your hand.";

            document.getElementById("total_value_text").classList.add('tutorial_text_animated');
            break;
            
        case 3:
            document.getElementById("total_value_text").classList.remove('tutorial_text_animated');
            tutorial_overlay.style.zIndex = -4000;
            
            window.isDealing = false;
            tutorial_text_p.innerHTML = "Now lets play the cards.<br>To play a hand, drag the bottom right card again but now to the top.";
            break;

        case 4:
            tutorial_overlay.addEventListener('click', () => tutorial_play(5), { once: true });
            tutorial_text_p.innerHTML = "Well done!<br>You just gained some score.<br>You can see the score you gained at the left of your screen";

            document.getElementById("current_score_text").classList.add('tutorial_text_animated');
            break;

        case 5:
            document.getElementById("current_score_text").classList.remove('tutorial_text_animated');

            tutorial_overlay.addEventListener('click', () => tutorial_play(6), { once: true });
            tutorial_text_p.innerHTML = "above the score you can see what score you need to beat to win the round.<br>Each round this score increases.";

            score_to_beat_amount_text.classList.add('tutorial_text_animated');
            break;
        case 6:
            score_to_beat_amount_text.classList.remove('tutorial_text_animated');

            tutorial_overlay.addEventListener('click', () => tutorial_play(7), { once: true });
            tutorial_text_p.innerHTML = "If you look under the score you can see your amount of hands.<br>You have a limited amount of hands to reach this score.<br>If you run out of hands before reaching the score to beat, you lose.";
            
            total_hands_text.classList.add('tutorial_text_animated');

            addCard();
            addCard();
            
            break;

        case 7:
            total_hands_text.classList.remove('tutorial_text_animated');

            tutorial_overlay.style.zIndex = -4000;
            
            window.isDealing = false;
            tutorial_text_p.innerHTML = "You still have some hands left to reach the required score.<br>draw a card to get some more score next play.";
            break;

        case 8:
            tutorial_overlay.style.zIndex = -4000;

            window.isDealing = false;
            tutorial_text_p.innerHTML = "You still can get some more score next play.<br>Draw another card.";
            break;

        case 9:
            tutorial_overlay.addEventListener('click', () => tutorial_play(10), { once: true });
            tutorial_text_p.innerHTML = "Oh no! Your total value went over 21!<br>This is called a bust and you won't gain any score if you play this hand.";
            break;

        case 10:
            total_discards_text.classList.add('tutorial_text_animated');

            tutorial_overlay.addEventListener('click', () => tutorial_play(11), { once: true });
            tutorial_text_p.innerHTML = "Luckily you have some discards, you can see them under the hands text!<br>You can use them to get rid of cards you don't need.<br>But be careful, you have a limited amount of discards each round.";
            break;

        case 11:
            total_discards_text.classList.remove('tutorial_text_animated');

            tutorial_overlay.style.zIndex = -4000;
            
            tutorial_text_p.innerHTML = "Let's discard a card.<br>If you look at the total value it is 2 to high.<br>So let's discard the 2 by clicking on it.";
            break;

        case 12:
            blackjack_bonus_text.classList.add('tutorial_text_animated');

            tutorial_overlay.addEventListener('click', () => tutorial_play(13), { once: true });
            tutorial_text_p.innerHTML = "Great!<br>Your total value is now exactly the 21, that means it is a blackjack.<br>if you look under the discards you can see the blackjack bonus.<br>This means your score gained this round is multiplied by this amount if you get a blackjack.";
            break;

        case 13:
            blackjack_bonus_text.classList.remove('tutorial_text_animated');

            tutorial_overlay.style.zIndex = -4000;

            window.isDealing = false;
            tutorial_text_p.innerHTML = "Now let's play the blackjack to get a lot of score!";
            break;
        
        case 14:
            tutorial_overlay.style.zIndex = -4000;

            addCard();

            tutorial_text_p.innerHTML = "Well done!<br>You just got a lot of score!<br>But you just got an ace, Let's hover over it to see its special ability.";
            break;
        
        case 15:
            await delay(500);
            
            tutorial_overlay.style.zIndex = -4000;

            addCard();

            window.isDealing = false;
            tutorial_text_p.innerHTML = "Great job!<br>Let's just play another card for now.";
            break;
        
        case 16:
            tutorial_overlay.addEventListener('click', () => tutorial_play(17), { once: true });
            tutorial_text_p.innerHTML = "As you can see the ace can count as a value of 1 or 11.<br>So looking at what the card does can really help you get better.";
            break;

        case 17:
            tutorial_overlay.addEventListener('click', () => tutorial_play(18), { once: true });
            tutorial_text_p.innerHTML = "PLACEHOLDER";
            break;



        
        case 24:
            stop_tutorial();
            break;
        // Add more tutorial steps as needed



        // eerst vertellen welkom GEDAAN
        // laat player drawen GEDAAN 
        // leg value uit GEDAAN
        // laat ze playen GEDAAN
        // leg round score uit GEDAAN
        // leg score to beat uit GEDAAN
        // leg hands uit GEDAAN
        // laat nog geen keer pakken GEDAAN
        // laat nog geen keer pakken GEDAAN
        // het is > 21 GEDAAN
        // leg bust uit GEDAAN
        // leg discards uit GEDAAN
        // laat ze discarden GEDAAN
        // leg blackjack bonus uit GEDAAN
        // speel de blackjack GEDAAN
        // krijg een ace GEDAAN
        // hover uitleggen GEDAAN
        // speel een kaart GEDAAN
        // ace gaat van 11 naar 1 vertel van hover vertelde info GEDAAN


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

    tutorial_overlay.style.zIndex = 5000;
}


async function start_turn(score) {
    if (window.hands_amount <= 0 || score >= winning_score) {
        await win_round(score);
        return;
    } else {
        window.hands_amount -= 1;
    }
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

function stop_tutorial() {
    localStorage.setItem("tutorial", true);
    window.location.href = "start.html?"
}


