class SphereClass extends GeometricObjects {
  radius;

  constructor(radius) {
    super();
    this.radius = radius;
    this.z = this.radius + 2;
    this.setTypeObj("sphere");
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  show(sketch) {
    sketch.push();
    sketch.translate(this.x, this.y, this.radius);
    sketch.fill(this.red, this.green, this.blue);
    sketch.rotateX(90);
    sketch.sphere(this.radius);
    sketch.pop();
  }
}
