const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);