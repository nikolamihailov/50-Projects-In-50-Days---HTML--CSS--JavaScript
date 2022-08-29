const toasts = document.querySelector(".toasts");
const notifBtn = document.getElementById("button");


notifBtn.addEventListener("click", makeAndRemoveToast);


function makeAndRemoveToast() {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    toast.innerHTML = "Toast 1"

    toasts.appendChild(toast);
    setTimeout(() => {
        toast.remove()
    }, 3000)

}



