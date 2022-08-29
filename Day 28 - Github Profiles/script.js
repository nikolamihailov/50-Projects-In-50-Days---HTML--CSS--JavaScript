const APIURL = 'https://api.github.com/users/';

const form = document.getElementById("form");
const search = document.getElementById("search");
const searchIcon = document.getElementById("searchIcon");
const main = document.getElementById("main");


async function getData(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data);
        getRepos(username);

    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard('No profile with this username');
        }
    }

}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + "/repos?sort=created")

        addRepos(data);

    } catch (err) {

        createErrorCard('Problem fetching repos');

    }

}

function createUserCard(user) {
    const cardHTML = `<div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    
                </div>
            </div>

        </div>`;

    main.innerHTML = cardHTML;
}


function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addRepos(repos) {
    const reposEl = document.getElementById("repos");

    repos.slice(0, 10).forEach(repo => {
        const repoLink = document.createElement("a");
        repoLink.classList.add("repo");
        repoLink.href = repo.html_url;
        repoLink.target = "_blank";
        repoLink.innerText = repo.name;
        reposEl.appendChild(repoLink);

    });
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getData(user);
        search.value = "";

    }

});

searchIcon.addEventListener("click", e => {

    const user = search.value;

    if (user) {
        getData(user);
        search.value = "";

    }

});

