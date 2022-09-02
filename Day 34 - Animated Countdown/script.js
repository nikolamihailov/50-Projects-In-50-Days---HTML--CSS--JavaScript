const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter")
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

animate();

function reset() {
    counter.classList.remove("hide");
    finalMessage.classList.remove("show");
    counter.classList.add("show");
    finalMessage.classList.add("hide");


    nums.forEach((num) => {
        num.classList.value = ''
    });

    nums[0].classList.add("shown");

}

function animate() {
    nums.forEach((num, index) => {
        const nextToLast = nums.length - 1;


        num.addEventListener("animationend", (e) => {
            if (e.animationName == "goIn" && index != nextToLast) {
                num.classList.remove("shown");
                num.classList.add("out");
            } else if (e.animationName == "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("shown");

            }
            else {
                counter.classList.add("hide");
                finalMessage.classList.add("show");
            }
        })

    })
}

replay.addEventListener("click", () => {
    reset();
    animate();

})