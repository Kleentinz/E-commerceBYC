// Array of words to rotate
const words = ["Yourself", "Men", "Women", "Kids"];
let currentWordIndex = 0; // Index of the current word

// Function to update the heading text with the next word
function rotateWord() {
  document.getElementById("rotatingHeading").textContent =
    "Get the best for " + words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through the words
}

// Call rotateWord initially and set an interval to call it repeatedly
rotateWord();
setInterval(rotateWord, 3000); // Change word every 2 seconds (adjust as needed)
