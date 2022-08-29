const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxes);

showBoxes();
function showBoxes() {

    const bottom = window.innerHeight / 100 * 80;
    console.log(bottom);


    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if (boxTop < bottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");

        }
    })
}

