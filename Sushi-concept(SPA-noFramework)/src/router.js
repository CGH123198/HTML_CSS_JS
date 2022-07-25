const route = event => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.currentTarget.href);
    locationHandler();
};

const routes = {
    404:"/src/pages/404.html",
    "/":"/src/pages/home.html",
    "/about": "/src/pages/about.html",
    "/promo": "/src/pages/promo.html",
    "/product": "/src/pages/product.html",
    "/contact": "/src/pages/contact.html",
    "/search": "/src/pages/search.html",
}

const locationHandler = async () => {
    const path = window.location.pathname;
    const route = routes[path] || route[404];
    const html = await fetch(route).then(data => data.text());
    document.getElementById("root").innerHTML = html;
}


window.onpopstate = locationHandler;
window.route = route;

//locationHandler();

window.onload = () => {
    window.history.pushState({}, "", "/");
    locationHandler();
};