//
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
// }
//
// function draw() {
//   background(0);
//
//   let pos = createVector(windowWidth / 2, windowHeight /2);
//   let mouse = createVector(mouseX, mouseY);
//
//   let v = p5.Vector.sub(mouse, pos);
//
//   // let m = v.mag();
//   // v.div(m);
//   // v.normalize();
//   // v.mult(50);
//   v.setMag(100);
//
//   translate(width/2, height/2);
//   strokeWeight(4);
//   stroke(255);
//   line(0, 0, v.x, v.y);
//
// }


var slider;

function setup() {
  var angle = PI / 4;
  createCanvas(800, 800);
  slider = createSlider(0, TWO_PI, angle, 0.01);
}

function draw() {
  background(20);
  angle = slider.value();
  stroke(255);
  translate(400, height);
  branch(200);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * .67);
    pop();
    push();
    rotate(-angle);
    branch(len * .67)
    pop();
  }

}
