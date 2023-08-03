let tileSize;
let tiles = [];

function setup() {
  createCanvas(400, 400);
  background(240);
  tileSize = random(40, 80);

  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      let tile = new Tile(x, y, tileSize);
      tiles.push(tile);
    }
  }
}

function draw() {
  for (let tile of tiles) {
    tile.draw();
  }
}

class Tile {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = random(0, TWO_PI);
    this.color = color(random(255), random(255), random(255));
  }

  draw() {
    push();
    translate(this.x + this.size / 2, this.y + this.size / 2);
    rotate(this.angle);
    stroke(this.color);
    strokeWeight(4);
    noFill();
    let halfSize = this.size / 2;
    let thirdSize = this.size / 3;
    line(-halfSize, -thirdSize, halfSize, -thirdSize);
    line(halfSize, -thirdSize, 0, thirdSize);
    line(0, thirdSize, -halfSize, -thirdSize);
    pop();
  }
}

