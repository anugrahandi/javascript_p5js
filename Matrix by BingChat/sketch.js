// Matrix style animation using p5.js

// Define the symbols and colors
// let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':\",./<>?\\|`~";
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':\",./<>?\\|`~".split('');
let colors = ["#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF"];

// Define the streams array
let streams = [];

// Define the Stream class
class Stream {
  constructor(x, y, speed) {
    this.x = x; // The x position of the stream
    this.y = y; // The y position of the stream
    this.speed = speed; // The speed of the stream
    this.chars = []; // The array of characters in the stream
    this.length = random(5, 30); // The length of the stream
    this.color = random(colors); // The color of the stream
    this.generateChars(); // Generate the characters for the stream
  }

  // Generate the characters for the stream
  generateChars() {
    for (let i = 0; i < this.length; i++) {
      let char = random(symbols); // Pick a random symbol
      this.chars.push(char); // Add it to the array
    }
  }

  // Display the stream on the canvas
  show() {
    textSize(20); // Set the text size
    textFont("monospace"); // Set the text font
    fill(this.color); // Set the text color
    for (let i = 0; i < this.chars.length; i++) {
      let char = this.chars[i]; // Get the character at index i
      let y = this.y + i * 20; // Calculate the y position of the character
      text(char, this.x, y); // Draw the character on the canvas
    }
  }

  // Update the stream position and characters
  update() {
    this.y += this.speed; // Move the stream down by its speed
    if (this.y > height) {
      // If the stream reaches the bottom of the canvas
      this.y = -this.length * 20; // Reset its y position to above the canvas
      this.chars = []; // Clear its characters array
      this.generateChars(); // Generate new characters for the stream
    }
    if (random(1) < 0.1) {
      // With a 10% chance
      let index = floor(random(this.chars.length)); // Pick a random index in the array
      let char = random(symbols); // Pick a random symbol
      this.chars[index] = char; // Replace the character at that index with the new symbol
    }
  }
}

// Setup function runs once at the beginning
function setup() {
  createCanvas(800, 600); // Create a canvas of size 800x600 pixels
  background(0); // Set the background color to black

  let x = 0; // Initialize the x position of the first stream

  while (x < width) {
    // While x is less than the width of the canvas
    let y = random(-1000, -100); // Pick a random y position above the canvas
    let speed = random(2, 10); // Pick a random speed for the stream
    let stream = new Stream(x, y, speed); // Create a new stream object with x, y and speed
    streams.push(stream); // Add it to the streams array
    x += 20; // Increment x by 20 pixels to create some space between streams
  }
}

// Draw function runs repeatedly after setup
function draw() {
  background(0, 50); // Set the background color to black with some transparency

  for (let stream of streams) {
    // For each stream in the streams array
    stream.show(); // Display it on the canvas
    stream.update(); // Update its position and characters
  }
}