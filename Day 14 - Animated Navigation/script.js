const btnToggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

btnToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
})