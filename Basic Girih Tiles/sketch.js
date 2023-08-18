let tiles = [];

let decagon, hexagon1, hexagon2, rhombus, pentagon;

let tileSize = 100;

let angle = 0;

let neutralBackground = [240, 240, 240];

function setup() {
  createCanvas(400, 400);

  // Create the girih tiles
  decagon = new Decagon(tileSize);
  hexagon1 = new Hexagon1(tileSize);
  hexagon2 = new Hexagon2(tileSize);
  rhombus = new Rhombus(tileSize);
  pentagon = new Pentagon(tileSize);

  // Add the tiles to the tiles array
  tiles.push(decagon, hexagon1, hexagon2, rhombus, pentagon);

  // Set the frame rate
  frameRate(2);
}

function draw() {
  // Set the neutral background color
  background(neutralBackground);

  // Choose a random tile
  let tile = random(tiles);

  // Set the stroke color to a random color
  stroke(random(255), random(255), random(255));

  // Push and pop the matrix to isolate the transformation to the current tile
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  tile.show();
  pop();

  // Increment the angle for the next frame
  angle += 0.1;
}

// Girih tile classes

class Decagon {
  constructor(size) {
    this.size = size;
  }

  show() {
    beginShape();
    for (let i = 0; i < 10; i++) {
      vertex(this.size * cos(TWO_PI * i / 10), this.size * sin(TWO_PI * i / 10));
    }
    endShape(CLOSE);
  }
}

class Hexagon1 {
  constructor(size) {
    this.size = size;
  }

  show() {
    beginShape();
    vertex(-this.size / 2, -this.size / 2);
    vertex(-this.size / 2, this.size / 2);
    vertex(0, this.size);
    vertex(this.size / 2, this.size / 2);
    vertex(this.size / 2, -this.size / 2);
    vertex(0, -this.size);
    endShape(CLOSE);
  }
}

class Hexagon2 {
  constructor(size) {
    this.size = size;
  }

  show() {
    beginShape();
    vertex(-this.size / 2, -this.size / 2);
    vertex(-this.size, 0);
    vertex(-this.size / 2, this.size / 2);
    vertex(this.size / 2, this.size / 2);
    vertex(this.size, 0);
    vertex(this.size / 2, -this.size / 2);
    endShape(CLOSE);
  }
}

class Rhombus {
  constructor(size) {
    this.size = size;
  }

  show() {
    beginShape();
    vertex(-this.size / 2, 0);
    vertex(0, -this.size / 2);
    vertex(this.size / 2, 0);
    vertex(0, this.size / 2);
    endShape(CLOSE);
  }
}

class Pentagon {
  constructor(size) {
    this.size = size;
  }

  show() {
    beginShape();
    for (let i = 0; i < 5; i++) {
      vertex(this.size * cos(TWO_PI * i / 5 - PI / 2), this.size * sin(TWO_PI * i / 5 - PI / 2));
    }
    endShape(CLOSE);
  }
}

