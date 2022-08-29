const emptyBoxes = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

emptyBoxes.forEach((emptBox) => {
    emptBox.addEventListener("dragenter", dragEnter);
    emptBox.addEventListener("dragover", dragOver);
    emptBox.addEventListener("dragleave", dragLeave);
    emptBox.addEventListener("drop", dragDrop);
})

function dragStart() {
    this.className += " hold";
    setInterval(() => this.className = "fill", 0);
}

function dragEnd() {
    this.className = "fill";
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}
function dragOver(e) {
    e.preventDefault();

}
function dragLeave() {
    this.className = "empty";
}
function dragDrop() {
    this.className = "empty";
    this.appendChild(fill);
}