const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

console.log(nav);

openBtn.addEventListener("click", () => {
    nav.forEach((navItem) => {
        navItem.classList.add("visible");
    })
})

closeBtn.addEventListener("click", () => {
    nav.forEach((navItem) => {
        navItem.classList.remove("visible");
    })
})