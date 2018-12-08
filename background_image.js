const body = document.querySelector("body");
const IMG_NUMBER = 6;

function drawImage(imgNumber) {
    const image = new Image();
    image.src = `./Images/${imgNumber + 1}.jpg`;
    image.classList.add("background-Image");
    body.prepend(image);
}

function getRandom() {
    const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
    return randomNumber;
}


function init() {
    const randomNumber = getRandom();
    drawImage(randomNumber);
}

init();