const overlay = document.getElementById('overlay');

const background_color_setting_output = document.getElementById('background_color_setting');

var current_background_color = null;

const urlvars = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

var animation_speed;
const animation_speeds = [0.1, 0.5, 1, 1.5, 2, 3];

var music_volume = 100;
const music_volumes = [0, 25, 50, 75, 100];


const music_volume_button = document.getElementById('music_volume_button');
const animation_speed_button = document.getElementById('animation_speed_button');

if (localStorage.getItem("tutorial") === null || localStorage.getItem("tutorial") === "false") {
    window.location.href = "tutorial.html?";
}

if (urlvars) {
    const urlparams = new URLSearchParams(urlvars);
    current_background_color = urlparams.get('background_color');

    animation_speed = parseFloat(urlparams.get('animation_speed'));

    if (current_background_color == "null") {
        current_background_color = "#357D35";;
    }

    if (animation_speed == "null" || isNaN(animation_speed)) {
        animation_speed = 1;
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

        console.log(current_background_color);
    });
}
else if (!current_background_color) {
    current_background_color = "#357D35"; //default color
}

if (animation_speed_button) { // failsafe for other pages
    if (animation_speed) {
        animation_speed_button.innerText = "animation speed: " + animation_speed + "×";
    }
}

//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));




async function go_to_link(location) {
    overlay.style.zIndex = 99999;
    overlay.style.opacity = 1;

    await delay(1000);

    window.location.href = location+".html?" + "background_color=" + current_background_color + "&animation_speed=" + animation_speed + "&volume=" + music_volume;
}



async function page_just_loaded() {
    overlay.style.zIndex = -10;
    overlay.style.opacity = 0;

    overlay.style.transition = "all 0.35s ease";

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