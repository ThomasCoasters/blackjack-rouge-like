const overlay = document.getElementById('overlay');

const background_color_setting_output = document.getElementById('background_color_setting');

var current_background_color = null;

const urlvars = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

if (urlvars) {
    const urlparams = new URLSearchParams(urlvars);
    current_background_color = urlparams.get('background_color');
    if (current_background_color == "null") {
        current_background_color = "#357D35";;
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

//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));




async function go_to_link(location) {
    overlay.style.zIndex = 99999;
    overlay.style.opacity = 1;

    await delay(1000);

    window.location.href = location+".html?" + "background_color=" + current_background_color;
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