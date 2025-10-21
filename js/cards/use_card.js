const use_cardsContainer = document.getElementById("cards_used_anim_container");


const total_score_text = document.getElementById("current_score_text");

const screen_shake_div = document.getElementById("screen_shake_div");

const screen_text = document.getElementById("screen_text");
const screen_text_p = document.getElementById("screen_text_p");

score = 0;

const score_per_card = {
    "ace": 11,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "jack": 10,
    "queen": 10,
    "king": 10,

    "special_value:5": 5
};


var using_cards = [];


async function player_bust() {
    var animation_speed = window.animation_speed;

    using_cards = using_cards.filter(reuse_card => reuse_card.reusing);

    screen_text.style.animation = "none";
    void screen_text.offsetWidth; // trigger reflow to restart animation

    screen_text_p.innerHTML = "<b>BUST</b>";

    screen_text.style.animation = "screen_text_animation";
    screen_text.style.animationDuration = 2500*(1/animation_speed) + "ms";
    screen_text.style.animationIterationCount = "1";


    await delete_all_cards_of_type("used card");
    await delete_all_cards_of_type("card");

    
    using_cards = [];

    window.isDealing = true;

    document.getElementById("total_value_text").textContent="Total value: 0 / " + window.max_total_value;
    


    window.held_cards = [];


    

    await delay(500*(1/animation_speed));
    
    return_anim();

    start_turn(score);
}

async function use_cards() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    using_cards = using_cards.filter(reuse_card => reuse_card.reusing);

    var animation_speed = window.animation_speed;

    window.isDealing = true;

    document.getElementById("total_value_text").textContent="Total value: 0 / " + window.max_total_value;

    for (let i = 0; i < window.held_cards.length; i++) {
        const card = window.held_cards[i];
        console.log("used a card");
        console.log(card);

        using_cards.push(card);

        create_new_card(card, use_cardsContainer, "used card");

        delete_old_card("card", [0]);
    }

    window.held_cards = [];


    const use_cards_count = use_cardsContainer.children.length;
    const container_width = use_cardsContainer.getBoundingClientRect().width;


    for (let i = 0; i < use_cards_count; i++) {
        const card = use_cardsContainer.children[i];

        card.style.position = "absolute";

        const spacing = container_width / use_cards_count;

        card.style.left = Math.round(spacing * (i-1) - 88/2) + "px";


        card.style.transition = "all " + (0.5 / animation_speed) + "s ease";
        total_score_text.style.transition = "all " + (0.5 / animation_speed) + "s ease";

        // set a concrete start position (not "auto")
        card.style.top = "50%";
        card.style.left = (10+((i) * 100 / use_cards_count)) + "%";

    }

    await delay(250*(1/animation_speed));

    var score_text_scale = 1;

    for (let i = 0; i < use_cards_count; i++) {
        const card = use_cardsContainer.children[i];

        card.style.top = "-10%";

        await delay(100*(1/animation_speed));

        card.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

        score_text_scale = await score_visuals(i, score_text_scale);

        animation_speed = window.animation_speed * score_text_scale;
        

        await delay(300*(1/animation_speed));
    }

    screen_shake_div.style.animation = "";

    var to_be_deleted = [];

    for (let i = 0; i < use_cards_count; i++) {
        if (!using_cards[i].reusing) {
            to_be_deleted.push(i);
        }
    }

    await delete_old_card("used card", to_be_deleted);

    return_anim();

    start_turn(score);
}

async function delete_old_card(type, to_be_deleted) {
    // https://stackoverflow.com/questions/7307776/how-do-i-remove-a-div-using-javascript
    var card = document.getElementsByClassName(type);

    for (let i = 0; i < to_be_deleted.length; i++) {
        card[to_be_deleted[i]-i].parentNode.removeChild(card[to_be_deleted[i]-i]);
        await delay(200*(1/window.animation_speed));
    }
}

async function delete_all_cards_of_type(type) {
    var card = document.getElementsByClassName(type);
    while (card.length > 0) {
        card[0].parentNode.removeChild(card[0]);
        await delay(100*(1/window.animation_speed));
    }
}

async function score_visuals(card_index, score_text_scale) {
    score_text_scale += 0.1;

    if (!screen_shake_div.style.animation || screen_shake_div.style.animation === "") {
        screen_shake_div.style.animation = "shake";
    }

    screen_shake_div.style.animationDuration = Math.max(1.5 - (score_text_scale/3)*(1/window.animation_speed), 0.1) + "s";
    screen_shake_div.style.animationTimingFunction = "ease-in-out";
    screen_shake_div.style.animationIterationCount = "infinite";

    await calculate_score(card_index, score_text_scale);

    return score_text_scale;

}

function return_anim(){
    total_score_text.style.transition = "all " + (2 / animation_speed) + "s ease";

    total_score_text.style.transform = "rotate(0deg)";
    total_score_text.style.scale = 1;

    screen_shake_div.style.animation = "";
}

function reset() {
    delete_all_cards_of_type("used card");
    delete_all_cards_of_type("card");

    using_cards = [];

    score = 0;
    total_score_text.textContent = score;
}


function score_text_move(score_text_scale, extra_score=0) {
    total_score_text.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";
    total_score_text.style.scale = score_text_scale;

    total_score_text.textContent = score + extra_score;

    console.log("score updated to " + (score + extra_score));
}