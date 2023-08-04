// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

// This is additional var for GUI
var myColor = '#befc03';
var gui;
var Size = 8;

var arrWalker = [];

function setup() {
  var canvas = createCanvas(400,300);
  canvas.parent('holder');
  walker = new Walker();
  walker_2 = new Walker();
  walker_3 = new Walker();
  // background(127);
  // background(myColor);

  //GUI create
  // add comment here using winSCP direct edit.
  sliderRange(0,90,1);
  gui = createGui('try GUI');
  gui.addGlobals('myColor','Size');
  gui.setPosition(420,20);
}

function draw() {
  background(myColor);
  walker.step();
  walker.render();
  walker_2.step();
  walker_2.render();
  walker_3.step();
  walker_3.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(0);
    // point(this.x,this.y);
    circle(this.x,this.y,Size);
  }

  step() {
    var choice = floor(random(8));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else if (choice === 3) {
      this.y--;
    } else if (choice === 4) {
      this.x++;
      this.y++;
    } else if (choice === 5) {
      this.x++;
      this.y--;
    } else if (choice === 6) {
      this.x--;
      this.y++;
    } else {
      this.x--;
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
