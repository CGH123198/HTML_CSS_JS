const images = [ "back1.jpg", "back2.jpg", "back3.jpg" ];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");

bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);