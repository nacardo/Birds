class Bird {
  constructor(x, y) {
    this.pos = createVector(x, y)
    // this.x = x;
    // this.y = y;
    this.l = 4;
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0,0);

  }

  update(x, y) {
    let mouse = createVector(x, y);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.05);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.vel.limit(5);

  }

  show() {
    fill(0);
    // triangle(this.x, this.y, this.x + this.l, this.y, this.x + this.l/2, this.y - this.l);
    triangle(this.pos.x, this.pos.y, this.pos.x + this.l, this.pos.y, this.pos.x + this.l/2, this.pos.y - this.l);

  }
}
