const userName = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userName.addEventListener("input", (event) => {
    const name = event.target.value.trim();
    
    userNameOutput.textContent = name || "Anonymous";

})