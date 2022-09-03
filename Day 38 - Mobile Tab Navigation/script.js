const images = document.querySelectorAll(".content");

/*console.log(images);*/
const menu = document.querySelectorAll(".menu li");


menu.forEach((item, idx) => {
    item.addEventListener("click", () => {
        console.log(images[idx]);
        setImage();
        removeActive();
        item.classList.add("active");
        images[idx].classList.add("show");

    });
})

function removeActive() {
    menu.forEach((menuItem) => {
        menuItem.classList.remove("active");
    })
}

function setImage() {
    images.forEach((img) => {
        img.classList.remove("show");
    })
}

