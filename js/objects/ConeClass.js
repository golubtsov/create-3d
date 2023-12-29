class ConeClass extends GeometricObjects {
  height;
  radius;

  constructor(radius, height) {
    super(radius, height);
    this.radius = radius;
    this.height = height;
    this.z = this.height / 2;
    this.setTypeObj("cone");
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  show(sketch) {
    sketch.push();
    sketch.translate(this.x, this.y, this.z);
    sketch.fill(this.red, this.green, this.blue);
    sketch.rotateX(90);
    sketch.cone(this.radius, this.height);
    sketch.pop();
  }
}
