const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const jokeApi = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single`;

let getjoke = () => {
    jokeContainer.classList.remove("fade");
     fetch(jokeApi)
     .then(data => data.json())
     .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
     })
}
btn.addEventListener("click",getjoke);
getjoke();