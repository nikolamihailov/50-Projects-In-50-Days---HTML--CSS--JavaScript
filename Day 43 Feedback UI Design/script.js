const ratings = document.querySelectorAll(".rating");
const btn = document.getElementById("send");
const container = document.getElementById("feedback-container");

let selectedrating = "Satisfied";


ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        removeActive();
        rating.classList.add("active");
        selectedrating = e.target.nextElementSibling.innerHTML;
    })
})

btn.addEventListener("click", () => {
    container.innerHTML = `<i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedrating}</strong>
    <p>We will use your feedback to improve our customer support!</p>`
})
function removeActive() {
    ratings.forEach((rating) => {

        rating.classList.remove("active");

    })
}

