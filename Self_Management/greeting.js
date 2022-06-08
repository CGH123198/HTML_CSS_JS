const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    changeGreeting();
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked");
}

function changeGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.textContent = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(localStorage.getItem("username") !== null){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    changeGreeting();
}

loginForm.addEventListener("submit", onLoginSubmit);
