const suggestions = {
  happy: "You're feeling great! Try some Upbeat Pop or Party Dance. 🎉",
  sad: "It’s okay to feel low. Try some soft piano or acoustic songs. 🎻",
  angry: "Cool down with Calm Instrumentals or Nature Sounds. 🌿",
  relaxed: "Enjoy some Chill Lo-fi or Jazz while you unwind. ☕"
};

// ✅ Online direct .mp3 music links
const musicFiles = {
  happy: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
  sad: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
  angry: "https://www.bensound.com/bensound-music/bensound-november.mp3",
  relaxed: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
};

const bgColors = {
  happy: "linear-gradient(to right, #fff6b7, #f6416c)",
  sad: "linear-gradient(to right, #83a4d4, #b6fbff)",
  angry: "linear-gradient(to right, #ff8177, #ff867a)",
  relaxed: "linear-gradient(to right, #d4fc79, #96e6a1)"
};

function suggestMusic(mood) {
  // Set suggestion text
  document.getElementById("suggestion").innerText = suggestions[mood];

  // Change background
  document.body.style.background = bgColors[mood];

  // Update audio player
  const musicSource = document.getElementById("musicSource");
  const player = document.getElementById("player");

  musicSource.src = musicFiles[mood];
  player.style.display = "block";
  player.load();
  player.play(); // auto-play when mood is selected
}
 