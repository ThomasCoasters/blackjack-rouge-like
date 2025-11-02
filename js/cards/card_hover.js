function show_Card_Info(card, name, text, card_raw = null, zIndex=4) {
    const infoBox = document.createElement("div");
    infoBox.className = "card-info-box";


    const coloredName = text_color_change(name);
    const coloredText = text_color_change(text);

    infoBox.innerHTML = `<strong>${coloredName}</strong><br><p>${coloredText}</p>`;

    // Position the box
    const rect = card.getBoundingClientRect();

    infoBox.style.top = (rect.bottom + 5) + "px"; // 5px below the card
    infoBox.style.left = (rect.left - 120) + "px"; // center the box

    infoBox.style.zIndex = zIndex;

    document.body.appendChild(infoBox);

    look_for_special_hover_texts(card, card_raw, infoBox, zIndex);
}

function hide_Card_Info() {
    const infoBoxes = document.getElementsByClassName("card-info-box");
    while (infoBoxes[0]) {
        infoBoxes[0].parentNode.removeChild(infoBoxes[0]);
    }

    const specialBoxes = document.getElementsByClassName("card-special-box");
    while (specialBoxes[0]) {
        specialBoxes[0].parentNode.removeChild(specialBoxes[0]);
    }
}

function text_color_change(text) {
    let new_text = text

    new_text = new_text.replace(/(1|2|3|4|5|6|7|8|9|0|\.|\-)/g, '<span style="color: darkblue;">$1</span>');



    new_text = new_text.replace(/Invincible, Fearless, Sensual, Mysterious, Enchanting, Vigorous, Diligent, Overwhelming, Gorgeous, Passionate, Terrifying, Beautiful, Powerful, Grey Prince Zote/g, '<span style="font-size: 12px; line-height: 0.8; display: block; background: linear-gradient(to right, red, green, blue, indigo, violet);-webkit-background-clip: text;background-clip: text;color: transparent;">$&</span>');

    new_text = new_text.replace(/(hearts|diamonds)/g, '<span style="color: red;">$1</span>');
    new_text = new_text.replace(/(spades|clubs)/g, '<span style="color: black;">$1</span>');

    new_text = new_text.replace(/(total|value)/g, '<span style="color: blue;">$1</span>');
    new_text = new_text.replace(/(score|hands|hand)/g, '<span style="color: lightblue;">$1</span>');

    
    new_text = new_text.replace(/(blackjack)/g, '<span style="background: linear-gradient(to top, orange, gold);-webkit-background-clip: text;background-clip: text;color: transparent;">$1</span>');

    new_text = new_text.replace(/(?<!black)(?<!shoc)(face|faces|jack|queen|king)/g, '<span style="color: lightgreen;">$1</span>');
    new_text = new_text.replace(/((?:dis)?card(?:s)?)/g, '<span style="color: MediumSpringGreen;">$1</span>');

    new_text = new_text.replace(/\bretrigger(?:able)?(?:ed)?(?:ing)?|shocking\b/gi, '<span style="background: linear-gradient(to top, purple, violet);-webkit-background-clip: text;background-clip: text;color: transparent;">$&</span>');
    new_text = new_text.replace(/\breus(?:able)?(?:ing)?(?:ed)?\b/gi, '<span style="background: linear-gradient(to top, Fuchsia, indigo);-webkit-background-clip: text;background-clip: text;color: transparent;">$&</span>');

    new_text = new_text.replace(/\b(bust|win)\b/g, '<span style="background: linear-gradient(to right, MediumTurquoise, DodgerBlue);-webkit-background-clip: text;background-clip: text;color: transparent;">$1</span>');

    new_text = new_text.replace(/\b(?:increas(?:e|es|ing)?|max(?:imum)?)\b/gi, '<span style="background: linear-gradient(to top, LawnGreen, LightGreen);-webkit-background-clip: text;background-clip: text;color: transparent;">$&</span>');
    new_text = new_text.replace(/\b(?:decreas(?:e|es|ing)?|min(?:imum)?|but)\b/gi, '<span style="background: linear-gradient(to top, Salmon, GoldenRod);-webkit-background-clip: text;background-clip: text;color: transparent;">$&</span>');

    new_text = new_text.replace(/(a random joker|\?\?\?|permanent upgrade:|DEAL!!|one of a kind)/g, '<span style="background: linear-gradient(to right, red, green, blue, indigo, violet);-webkit-background-clip: text;background-clip: text;color: transparent;">$1</span>');
    new_text = new_text.replace(/(chaos, chaos|free, free)/g, '<span style="background: linear-gradient(to top, red, purple);-webkit-background-clip: text;background-clip: text;color: transparent;">$1</span>');

    return new_text;
}





function look_for_special_hover_texts(card, card_raw, infoBox, zIndex) {
    if (!card_raw) return;


    let specials = [];
    let specials_names = [];

    if (card_raw.retrigger > 0) {
        specials_names.push("retrigger");
        // card_raw.retrigger = 2; // temp for testing
        specials.push("This card can retrigger" + (" up to " + card_raw.retrigger + " times"));
    }

    if (card_raw.different_value_and_score === true) {
        specials_names.push("score difference");
        specials.push("this card can have a different value and score");
    }

    if (card_raw.reusing === true) {
        specials_names.push("reusable");
        specials.push("this card can be reused until you bust or win");
    }

    if (specials.length > 0) {
        special_hover_texts(specials, specials_names, card, infoBox, zIndex);
    }
}


function special_hover_texts(specials, specials_names, card, infoBox, zIndex) {
    const specialBox = document.createElement("div");
    specialBox.className = "card-special-box";

    specialBox.style.zIndex = zIndex;

    for (let i = 0; i < specials.length; i++) {
        const coloredName = text_color_change(specials_names[i]);
        const coloredText = text_color_change(specials[i]);

        specialBox.innerHTML += `<strong>${coloredName}</strong><br><p>${coloredText}</p>`;
    }

    // Position the special box
    const cardRect = card.getBoundingClientRect();
    const infoRect = infoBox.getBoundingClientRect();


    specialBox.style.top = (infoRect.top + infoRect.height/2) + "px";
    specialBox.style.left = (cardRect.left - 100 + infoRect.width) + "px";

    document.body.appendChild(specialBox);
}