async function generateRandomMeme() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const memes = data.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];

    // Your Imgflip API credentials
    const username = "divy_123";
    const password = "divynoone";

    // Example caption texts
    const caption1 = "This is the top text";
    const caption2 = "This is the bottom text";

    const memeURL = `https://api.imgflip.com/caption_image?template_id=${randomMeme.id}&username=${username}&password=${password}&text0=${encodeURIComponent(caption1)}&text1=${encodeURIComponent(caption2)}`;

    const response2 = await fetch(memeURL, { method: 'POST' });
    const memeData = await response2.json();

    console.log('Meme data:', memeData);

    if (memeData && memeData.data && memeData.data.url) {
        const memeImage = document.createElement("img");
        memeImage.src = memeData.data.url;

        const memeContainer = document.getElementById("memeContainer");
        memeContainer.innerHTML = "";
        memeContainer.appendChild(memeImage);
    } else {
        console.error('Failed to fetch meme:', memeData);
    }
}

generateRandomMeme();
