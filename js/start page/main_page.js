const overlay = document.getElementById('overlay');

const background_color_setting_output = document.getElementById('background_color_setting');

var current_background_color = null;

const urlvars = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

var animation_speed;
const animation_speeds = [0.1, 0.5, 1, 1.5, 2, 3, 100];

var music_volume = null;
const music_volumes = [0, 25, 50, 75, 100];


const music_volume_button = document.getElementById('music_volume_button');
const animation_speed_button = document.getElementById('animation_speed_button');
const seed_button = document.getElementById('seed_setting');

if ((localStorage.getItem("begin") === null || localStorage.getItem("begin") === "false") && window.location.pathname.indexOf("begin.html") === -1) {
    window.location.href = "begin.html?";
}

if ((localStorage.getItem("tutorial") === null || localStorage.getItem("tutorial") === "false") && window.location.pathname.indexOf("tutorial.html") === -1) {
    window.location.href = "tutorial.html?";
}

if (urlvars) {
    const urlparams = new URLSearchParams(urlvars);
    current_background_color = urlparams.get('background_color');

    animation_speed = parseFloat(urlparams.get('animation_speed'));

    music_volume = parseInt(urlparams.get('volume'));

    seed = urlparams.get('seed');

    if (current_background_color == "null") {
        current_background_color = "#357D35";;
    }

    if (animation_speed == "null" || isNaN(animation_speed)) {
        animation_speed = 1;
    }

    if (music_volume == "null" || isNaN(music_volume)) {
        music_volume = 100;
    }
}


if (background_color_setting_output) { // failsafe for other pages
    if (current_background_color) {
        background_color_setting_output.value = current_background_color;
    }
    else {
        background_color_setting_output.value = "#357D35"; //default color
    }

    background_color_setting_output.addEventListener('input', (event) => {
        current_background_color = event.target.value;
        document.body.style.backgroundColor = current_background_color;
    });
}
else if (!current_background_color) {
    current_background_color = "#357D35"; //default color
}

if (seed_button) { // failsafe for other pages
    if (seed && seed !== "null") {
        seed_button.value = seed;
    }
    else {
        seed = Math.floor(Math.random() * 1000000).toString();
        seed_button.value = seed;
    }

    seed_button.addEventListener('input', (event) => {
        const v = event.target.value;
        if (v === '' || v === 'null') {
            // fallback to a random seed if the input is cleared
            seed = Math.floor(Math.random() * 1000000).toString();
            seed_button.value = seed;
        } else {
            seed = v.toString();
        }
    });
}




if (animation_speed_button) { // failsafe for other pages
    if (animation_speed) {
        animation_speed_button.innerText = "animation speed: " + animation_speed + "×";
    }
}

if (music_volume_button) { // failsafe for other pages
    if (music_volume) {
        music_volume_button.innerText = "volume: " + music_volume + "%";
    }
}

//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));




async function go_to_link(location) {
    overlay.style.zIndex = 99999;
    overlay.style.opacity = 1;

    await delay(1000);

    window.location.href = location+".html?" + "background_color=" + current_background_color + "&animation_speed=" + animation_speed + "&volume=" + music_volume + "&seed=" + seed;
}

async function begin_done() {
    overlay.style.zIndex = 99999;
    overlay.style.opacity = 1;

    await delay(1000);

    localStorage.setItem("begin", true);

    window.location.href = "tutorial.html";
}



async function page_just_loaded() {
    overlay.style.zIndex = -10;
    overlay.style.opacity = 0;

    overlay.style.transition = "all 0.35s ease";


    background_music_play_normal();


    await delay(1000);
}


// https://stackoverflow.com/questions/520812/how-do-i-detect-when-a-web-page-is-loaded
window.onload = function() {
  page_just_loaded();
}

function animation_speed_change() {
    const current_index = animation_speeds.indexOf(animation_speed);
    let new_index = current_index + 1;
    if (new_index >= animation_speeds.length) {
        new_index = 0;
    }
    animation_speed = animation_speeds[new_index];
    animation_speed_button.innerText = "animation speed: " + animation_speed + "×";
}

function music_volume_change() {
    const current_index = music_volumes.indexOf(music_volume);
    let new_index = current_index + 1;
    if (new_index >= music_volumes.length) {
        new_index = 0;
    }
    music_volume = music_volumes[new_index];
    music_volume_button.innerText = "volume: " + music_volume + "%";
}














var background_audio = new Audio('../../../audio/music/silksong.mp3');

var type = null;

var currentTime = 3;

background_audio.currentTime = currentTime;

function background_music_play_normal() {
    if (type === "normal") {return;}

    type = "normal";

    currentTime = background_audio.currentTime;
    background_audio.pause();
    background_audio.src = '../../../audio/music/silksong.mp3';

    background_audio.loop = true;
    background_audio.currentTime = currentTime;
    background_audio.play();
    background_audio.volume = 0.3*(music_volume/100);
}

function background_music_play_zote() {
    if (type === "zote_da_goat") {return;}

    type = "zote_da_goat";

    currentTime = background_audio.currentTime;
    background_audio.pause();
    background_audio.src = '../../../audio/music/silksong zote.mp3';

    background_audio.loop = true;
    background_audio.currentTime = currentTime;
    background_audio.play();
    background_audio.volume = 0.3*(music_volume/100);
}