function show_Card_Info(card, name, text) {
    const infoBox = document.createElement("div");
    infoBox.className = "card-info-box";


    const coloredName = text_color_change(name);
    const coloredText = text_color_change(text);

    infoBox.innerHTML = `<strong>${coloredName}</strong><br><p>${coloredText}</p>`;

    // Position the box
    const rect = card.getBoundingClientRect();

    infoBox.style.top = (rect.bottom + 5) + "px"; // 5px below the card
    infoBox.style.left = (rect.left - 100) + "px"; // center the box

    document.body.appendChild(infoBox);
}

function hide_Card_Info() {
    const infoBoxes = document.getElementsByClassName("card-info-box");
    while (infoBoxes[0]) {
        infoBoxes[0].parentNode.removeChild(infoBoxes[0]);
    }
}

function text_color_change(text) {
    let new_text = text
    new_text = new_text.replace(/(hearts|diamonds)/g, '<span style="color: red;">$1</span>');
    new_text = new_text.replace(/(spades|clubs)/g, '<span style="color: black;">$1</span>');

    new_text = new_text.replace(/(value)/g, '<span style="color: blue;">$1</span>');
    new_text = new_text.replace(/(score)/g, '<span style="color: lightblue;">$1</span>');
    new_text = new_text.replace(/(1|2|3|4|5|6|7|8|9|0)/g, '<span style="color: darkblue;">$1</span>');

    new_text = new_text.replace(/(face|jack|queen|king)/g, '<span style="color: lightgreen;">$1</span>');
    new_text = new_text.replace(/(card)/g, '<span style="color: green;">$1</span>');

    return new_text;
}