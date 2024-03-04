async function getTopMemes() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const memes = data.data.memes;

    // Sort memes based on their popularity, assuming 'popularity' is a field in the meme data
    const topMemes = memes.sort((a, b) => b.popularity - a.popularity).slice(0, 10); // Get top 10 memes

    return topMemes;
}

async function displayTopMemes() {
    const topMemes = await getTopMemes();

    const memeContainer = document.getElementById("memeContainer");
    memeContainer.innerHTML = "";

    topMemes.forEach(meme => {
        const memeImage = document.createElement("img");
        memeImage.src = meme.url;
        memeContainer.appendChild(memeImage);
    });
}

displayTopMemes();
