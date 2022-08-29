const cups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

updateBigCup();

cups.forEach((cup, index) => {
    cup.addEventListener("click", () => fillCup(index));

})

function fillCup(index) {
    cups.forEach((cup, index2) => {
        /* Sometimes there is a probblem when you try to remove more than 1 cup

        if (index == 7 && cups[index].classList.contains("full")) {
            index--;
        }
        else if (cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')) {
            index--;
        }
*/
        if (index2 <= index) {
            cup.classList.add("full");
            console.log(index2, index);
        }
        else {
            cup.classList.remove("full");
        }


        updateBigCup();

    })
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;

    const totalCups = cups.length;



    if (fullCups == 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;

    }
    else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }


    if (fullCups == totalCups) {
        remaining.style.visibility = "hidden";
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = "visible";

        liters.innerText = `${2 - (fullCups / totalCups * 2)}L`;

    }
}
