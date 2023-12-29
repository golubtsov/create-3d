class GeometricObjects {
  red = 0;
  green = 0;
  blue = 0;
  x = 0;
  y = 0;
  z = 0;
  #type = "";

  setTypeObj(type) {
    this.#type = type;
  }

  getTypeObj() {
    return this.#type;
  }

  setColor(red = 0, green = 0, blue = 0) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.z = 0;
  }

  show(sketch) {}
}
