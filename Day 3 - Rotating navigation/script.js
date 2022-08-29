const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");


open.addEventListener("click", () => container.classList.add("show-nav"));
open.addEventListener("click", noScroll);
close.addEventListener("click", () => container.classList.remove("show-nav"));
close.addEventListener("click", showScroll);


function showScroll() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

function noScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}


