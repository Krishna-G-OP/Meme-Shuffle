async function generateRandomMeme() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const memes = data.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];

    const memeImage = document.createElement("img");
    memeImage.src = randomMeme.url;

    const memeContainer = document.getElementById("memeContainer");
    memeContainer.innerHTML = "";
    memeContainer.appendChild(memeImage);
}

generateRandomMeme();
