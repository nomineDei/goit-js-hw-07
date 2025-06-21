const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const result = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    };

    if (result.email ==="" || result.password ==="") {
        alert("All form fields must be filled in");
        return;
    }

    console.log(result);
   event.target.reset();
}
