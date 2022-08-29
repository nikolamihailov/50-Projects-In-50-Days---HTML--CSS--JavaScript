
const header = document.getElementById("header");
const title = document.getElementById("title");
const description = document.getElementById("description");
const profileImg = document.getElementById("profile-img");
const authorName = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedTexts = document.querySelectorAll(".animated-text");

/* just to see some of the elements
console.log(animatedBgs);
console.log(animatedTexts);
*/

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="https://source.unsplash.com/random/?laptop, phone" alt="">`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    description.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                adipisci voluptatum asperiores esse ut modi iusto odit quae explicabo enim.`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
    authorName.innerHTML = `John Wick`;
    date.innerHTML = `Aug 08 2020`;

    animatedBgs.forEach(aB => {
        aB.classList.remove("animated-bg");
    })


    animatedTexts.forEach(aT => {
        aT.classList.remove("animated-text");
    })

}
