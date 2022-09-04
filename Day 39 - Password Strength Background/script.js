const bg = document.querySelector(".bg");
const password = document.getElementById("password");

var blur = 30;

password.addEventListener("keyup", () => {

    var decrement = password.value.length;
    bg.style.filter = `blur(${blur - (decrement * 3)}px)`;

})


