async function generateRandomMeme() {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const data = await response.json();
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];

            const memeURL = `https://api.imgflip.com/caption_image?template_id=${randomMeme.id}&username="divy_123"&password="divynoone"`;
            // Replace 'your_username' and 'your_password' with your Imgflip API credentials

            const response2 = await fetch(memeURL, { method: 'POST' });
            const memeData = await response2.json();

            const memeImage = document.createElement("img");
            memeImage.src = memeData.data.url;

            const memeContainer = document.getElementById("memeContainer");
            memeContainer.innerHTML = "";
            memeContainer.appendChild(memeImage);
}

generateRandomMeme();
