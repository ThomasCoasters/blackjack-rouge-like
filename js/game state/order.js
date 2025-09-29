var forced_amount_draw = 2;

//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));




async function start_turn() {
    // https://byby.dev/js-global-variables#:~:text=In%20JavaScript%2C%20you%20can%20use%20global%20variables%20across,system%20to%20import%20and%20export%20variables%20between%20files.
    window.isDealing = true;
    
    for (let i = 0; i < forced_amount_draw; i++) {
        addCard();
        //https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
        await delay(500);
    }

    // https://byby.dev/js-global-variables#:~:text=In%20JavaScript%2C%20you%20can%20use%20global%20variables%20across,system%20to%20import%20and%20export%20variables%20between%20files.
    window.isDealing = false;
}

start_turn();