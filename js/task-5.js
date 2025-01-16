const button = document.querySelector(".change-color");
const textInpt = document.querySelector(".color");
const body = document.body;

button.addEventListener("click", handleSubmit);

function handleSubmit(event) {
 event.preventDefault();
 const randomColor = getRandomHexColor();
 body.style.backgroundColor = randomColor;
 textInpt.textContent = randomColor;
}

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
}