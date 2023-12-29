class BoxClass extends GeometricObjects {
  width;
  height;
  depth;

  constructor(width, height, depth) {
    super();
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.z = this.depth / 2;
    this.setTypeObj("box");
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  show(sketch) {
    sketch.push();
    sketch.translate(this.x, this.y, this.z);
    sketch.fill(this.red, this.green, this.blue);
    sketch.box(this.width, this.height, this.depth);
    sketch.pop();
  }
}
