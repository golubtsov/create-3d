const windowCreateEllipsoid = document.getElementById(
  "window-create-ellipsoid"
);
const divEllipsoidExampleCanvas = document.getElementById(
  "ellipsoid-example-canvas"
);

divEllipsoidExampleCanvas.addEventListener("click", () => {
  // closeAllWindowsForCreateObj();
  windowCreateEllipsoid.classList.contains("hidden")
    ? windowCreateEllipsoid.classList.remove("hidden")
    : windowCreateEllipsoid.classList.add("hidden");
});

const ellipsoidExample = new EllipsoidClass(20, 40);

let ellipsoidExampleCanvas = (sketch) => {
  sketch.setup = () => {
    sketch.angleMode(sketch.DEGREES);
    sketch.noStroke();

    let ellipsoidCanvas = sketch.createCanvas(100, 100, sketch.WEBGL);
    ellipsoidCanvas.parent(divEllipsoidExampleCanvas);
  };

  sketch.windowResized = () => {};

  sketch.mouseWheel = (event) => {
    camRangeMainCanvas += event.delta / 10;
  };

  sketch.draw = () => {
    sketch.rotateX(60);
    sketch.rotateZ(45);

    settingsForWorld(sketch);

    ellipsoidExample.setColor(25, 0, 205);
    ellipsoidExample.show(sketch);
  };
};

new p5(ellipsoidExampleCanvas);
