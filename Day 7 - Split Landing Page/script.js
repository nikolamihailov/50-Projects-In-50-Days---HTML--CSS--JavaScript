const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => container.classList.add("left-hover"));
left.addEventListener("mouseleave", () => container.classList.remove("left-hover"));

right.addEventListener("mouseenter", () => container.classList.add("right-hover"));
right.addEventListener("mouseleave", () => container.classList.remove("right-hover"));

