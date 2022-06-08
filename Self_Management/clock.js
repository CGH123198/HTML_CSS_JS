const clock = document.querySelector("h2#clock");

/*function getClock() {
    const date = new Date();
    let minutes, seconds;

    minutes = getZero(date.getMinutes());
    seconds = getZero(date.getSeconds());

    clock.innerText = `${date.getHours()}:${minutes}:${seconds}`;
}


function getZero(x){
    if(x < 10) { return `0${x}`; }
    
    return `${x}`;
}*/

//String.padStart()
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);