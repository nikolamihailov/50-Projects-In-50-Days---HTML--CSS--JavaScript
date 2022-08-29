const search = document.querySelector(".search");
const searchButton = document.querySelector(".btn");
const input = document.querySelector(".input");

searchButton.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});




