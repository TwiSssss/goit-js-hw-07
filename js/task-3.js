const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
    const username = event.currentTarget.value.trim();
    if (username) {
        output.textContent = username;
      } else {
        output.textContent = "Anonymous";
      }
});