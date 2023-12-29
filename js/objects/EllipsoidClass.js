class EllipsoidClass extends GeometricObjects {
  radiusX;
  radiusY;
  radiusZ;

  constructor(radiusX, radiusY, radiusZ) {
    super();
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.radiusZ = radiusZ;
    this.z = this.radiusZ;
    this.setTypeObj("ellipsoid");
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  show(sketch) {
    sketch.push();
    sketch.translate(this.x, this.y, this.z);
    sketch.fill(this.red, this.green, this.blue);
    sketch.ellipsoid(this.radiusX, this.radiusY, this.radiusZ);
    sketch.pop();
  }
}
