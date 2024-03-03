// Function to fetch a random meme from the Meme API
async function fetchRandomMeme() {
  try {
    const response = await fetch("https://meme-api.herokuapp.com/gimme");
    const data = await response.json();
    return data.url; // Assuming the API returns the meme URL in a JSON format
  } catch (error) {
    console.error("Error fetching meme:", error);
  }
}

// Function to set a random meme as the source for the image element
async function setRandomMeme() {
  const memeImg = document.getElementById("meme");
  const randomMemeUrl = await fetchRandomMeme();
  memeImg.src = randomMemeUrl;
}

// Set a random meme when the page loads
window.onload = setRandomMeme;

// Set a random meme when the page is refreshed
window.onbeforeunload = setRandomMeme;
