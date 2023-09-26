// script.js

const audio = document.getElementById("radio-stream");
const songTitle = document.querySelector(".radio-details p:nth-child(1)");
const artistName = document.querySelector(".radio-details p:nth-child(2)");

audio.addEventListener("play", () => {
    // You can implement logic here to fetch the currently playing song info from your backend
    // and update the songTitle and artistName accordingly.
    songTitle.textContent = "Song Title";
    artistName.textContent = "Artist Name";
});
