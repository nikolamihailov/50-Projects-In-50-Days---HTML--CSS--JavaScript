const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener("change", (e) => {
    doTheTrick(e.target)
}));

function doTheTrick(theClickedOne) {
    if (good.checked && fast.checked && cheap.checked) {
        if (good == theClickedOne) {
            cheap.checked = false;

        }
        if (fast == theClickedOne) {
            good.checked = false;

        }
        if (cheap == theClickedOne) {
            fast.checked = false;

        }
    }
}