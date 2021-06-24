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
