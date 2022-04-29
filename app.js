const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    changeGreeting(localStorage.getItem(USERNAME_KEY));
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked");
}

function changeGreeting(username){
    greeting.textContent = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(localStorage.getItem("username") !== null){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    changeGreeting(localStorage.getItem(USERNAME_KEY));
}

loginForm.addEventListener("submit", onLoginSubmit);
