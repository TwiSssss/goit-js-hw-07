const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputFild = document.querySelector("#controls input");
const boxesCont = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
    const amount = inputFild.value;
    if (amount < 1 || amount > 100) {
        inputFild.value = "";
        return;
    }
    boxesCont.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        const divElem = document.createElement("div");
        divElem.style.width = `${30 + i * 10}px`;
        divElem.style.height = `${30 + i * 10}px`;
        divElem.style.backgroundColor = getRandomHexColor();
        boxesCont.appendChild(divElem);
    }
    inputFild.value = "";
}

function destroyBoxes() {
    boxesCont.innerHTML = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

