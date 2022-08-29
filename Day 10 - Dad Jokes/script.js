const jokeDiv = document.getElementById("joke");
const jokeButton = document.getElementById("jokeButton");


jokeButton.addEventListener("click", generateJoke);
generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeDiv.innerHTML = data.joke;
}

//  .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     });
// }