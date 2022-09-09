const container = document.querySelector(".image-feed");
const url_api = 'https://source.unsplash.com/random/';

let feedImages = 18;


for (i = 0; i < feedImages; i++) {
    getImages();
}
function getImages() {

    const img = document.createElement("img");

    img.src = `${url_api}${getRandomSize()}`;
    img.classList.add("randImg");

    container.appendChild(img);


}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}
