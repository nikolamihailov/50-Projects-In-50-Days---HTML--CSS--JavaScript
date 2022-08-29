const htmlEL = document.querySelector("html");
const modeBtn = document.querySelector(".toggle");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

modeBtn.addEventListener("click", () => {
    if (htmlEL.classList.contains("dark")) {
        htmlEL.classList.remove("dark");
        modeBtn.innerText = "Dark mode";
    } else {
        htmlEL.classList.add("dark");
        modeBtn.innerText = "Light mode";

    }

})



function setTime() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);


    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeEl.innerHTML = hours + ":" + minutes + ":" + seconds;

    dateEl.innerHTML = `<span class="circle">${dayOfMonth}</span> ${months[month]}, ${days[day]}`;



}

function checkTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000)

