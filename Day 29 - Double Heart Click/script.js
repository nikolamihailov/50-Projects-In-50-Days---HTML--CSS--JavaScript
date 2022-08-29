const loveMe = document.querySelector(".loveMe");
const times = document.querySelector(".times");
let likes = 0;

loveMe.addEventListener("dblclick", (e) => {

    createHeart(e);

});


function createHeart(e) {
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const heartX = x - leftOffset;
    const heartY = y - topOffset;

    heart.style.top = `${heartY}px`;
    heart.style.left = `${heartX}px`;

    loveMe.appendChild(heart);
    likes++;
    times.innerHTML = likes;


    setTimeout(() => heart.remove(), 1000)

}