const boxes = document.querySelectorAll(".hoverboard span");
const hoverboard = document.querySelector(".hoverboard");

const colors = ["red", "orange", "yellow", "blue", "green", "purple"];



const boxNum = 480;

for (i = 0; i < boxNum; i++) {

    const box = document.createElement("span");
    box.classList.add("box");

    box.addEventListener("mouseenter", () => {
        setColor(box);

    });
    box.addEventListener("mouseleave", () => {
        removeColor(box);
    });

    hoverboard.appendChild(box);

}



function setColor(el) {
    el.style.backgroundColor = `${colors[chooseColor()]}`;

    el.style.boxShadow = `0 0 2px ${colors[chooseColor]}`;

}

function removeColor(el) {
    el.style.backgroundColor = `rgb(45, 43, 43)`;

    el.style.boxShadow = `0 0 2px #000`;
}

function chooseColor() {
    return Math.floor(Math.random() * (colors.length - 1));

}