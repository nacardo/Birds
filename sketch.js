var birds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    birds.push(new Bird(windowWidth/2, windowHeight/2));
  }
  // bird = new Bird(windowWidth/2, windowHeight/2);

}

function draw() {
  background(220);
  for (let bird of birds) {

    bird.show();
    bird.update(windowWidth/2, windowHeight/2);
  }
}
