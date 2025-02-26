const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return console.log("All form fields must be filled in");
    }

    console.log(`Login: ${email}, Password: ${password}`);
    form.reset();
}
