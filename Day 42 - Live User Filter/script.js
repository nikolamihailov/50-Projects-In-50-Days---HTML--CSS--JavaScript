const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];


filter.addEventListener("input", (e) => {
    filterData(e.target.value);
})
async function createUser() {
    const res = await fetch(API_URL);
    const { results } = await res.json();


    result.innerHTML = "";

    results.forEach(user => {
        const li = document.createElement("li")
        listItems.push(li);
        li.innerHTML = ` <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>`;

        result.appendChild(li);

    });


}

createUser();

function filterData(searchedName) {
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchedName.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    })
}