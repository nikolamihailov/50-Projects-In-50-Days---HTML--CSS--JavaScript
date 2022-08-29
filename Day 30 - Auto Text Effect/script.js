const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "I love programming!";
let index = 1;
let speed = 300 / speedEl.value;

console.log(text.length);
writeText();


function writeText() {

    textEl.innerText = text.slice(0, index);
    index++;

    if (index == text.length) {
        textEl.innerText = text;
    }

    setTimeout(writeText, speed);

}

speedEl.addEventListener("input", () => speed = 300 / speedEl.value);



