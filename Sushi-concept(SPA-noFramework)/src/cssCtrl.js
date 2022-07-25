const link = document.querySelectorAll('.urlchange');
let path = window.location.pathname;

function cssCtrl () {
    const body = document.querySelector("body");
    path = window.location.pathname;
    console.log(path);
    if (path === "/product") {
        body.className="product";
    } else if (path === "/") {
        body.className="home";
    } else if(path === "/about") {
        body.className="about";
    } else if(path === "/promo") {
        body.className="promo";
    } else if(path === "/contact") {
        body.className="contact";        
    } else if(path === "/search") {
        body.className= "search";
    }
};

for(let tag of link) {
    tag.addEventListener("click", cssCtrl);
}