const overlay = document.getElementById('overlay');

//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));




async function go_to_game() {
    overlay.style.zIndex = 99999;
    overlay.style.opacity = 1;

    await delay(1000);

    window.location.href = "play_cards.html";
}