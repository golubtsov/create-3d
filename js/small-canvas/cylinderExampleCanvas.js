const windowCreateCylinder = document.getElementById("window-create-cylinder");
const divCylinderExampleCanvas = document.getElementById(
  "cylinder-example-canvas"
);

divCylinderExampleCanvas.addEventListener("click", () => {
  // closeAllWindowsForCreateObj();
  windowCreateCylinder.classList.contains("hidden")
    ? windowCreateCylinder.classList.remove("hidden")
    : windowCreateCylinder.classList.add("hidden");
});

const cylinderExample = new CylinderClass(30, 60);

let cylinderExampleCanvas = (sketch) => {
  sketch.setup = () => {
    sketch.angleMode(sketch.DEGREES);
    sketch.noStroke();

    let cylinderCanvas = sketch.createCanvas(100, 100, sketch.WEBGL);
    cylinderCanvas.parent(divCylinderExampleCanvas);
  };

  sketch.windowResized = () => {};

  sketch.mouseWheel = (event) => {
    camRangeMainCanvas += event.delta / 10;
  };

  sketch.draw = () => {
    sketch.rotateX(60);
    sketch.rotateZ(45);

    sketch.translate(0, 0, -25);

    settingsForWorld(sketch);

    cylinderExample.setColor(25, 190, 15);
    cylinderExample.show(sketch);
  };
};

new p5(cylinderExampleCanvas);
