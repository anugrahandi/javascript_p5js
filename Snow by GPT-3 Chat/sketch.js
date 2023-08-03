// create an array to store the circles
let circles = [];

function setup() {
  // create the canvas and set its background color
  createCanvas(500, 500);
  background(255);

  // create 200 circles with random starting positions
  // and add them to the array
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let circle = new Circle(x, y);
    circles.push(circle);
  }
}

function draw() {
  // clear the screen
  background(255);

  // loop through the array of circles and update
  // and display each one
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.update();
    circle.display();
  }
}

// define the Circle class
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 5;
    this.speed = 1;
    this.wiggle = 0.1;
  }

  // update the position of the circle
  update() {
    // slightly change the x position of the circle
    // based on the wiggle value
    this.x += random(-this.wiggle, this.wiggle);

    // increment the y position of the circle
    // based on the speed value
    this.y += this.speed;

    // if the circle has reached the bottom of the screen,
    // reset its position to the top of the screen
    if (this.y > height) {
      this.y = 0;
    }
  }

  // display the circle on the screen
  display() {
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
