class CylinderClass extends GeometricObjects {
  radius;
  height;

  constructor(radius, height) {
    super();
    this.radius = radius;
    this.height = height;
    this.z = this.height / 2;
    this.setTypeObj("cylinder");
  }

  show(sketch) {
    sketch.push();
    sketch.translate(this.x, this.y, this.z);
    sketch.fill(this.red, this.green, this.blue);
    sketch.rotateX(90);
    sketch.cylinder(this.radius, this.height);
    sketch.pop();
  }
}
