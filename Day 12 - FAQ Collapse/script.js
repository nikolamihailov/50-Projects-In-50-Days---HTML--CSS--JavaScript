const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach(tB => {
    tB.addEventListener("click", () => {
        tB.parentNode.classList.toggle("active");
    })
});