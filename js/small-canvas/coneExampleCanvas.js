const windowCreateCone = document.getElementById("window-create-cone");
const divConeExampleCanvas = document.getElementById("cone-example-canvas");

divConeExampleCanvas.addEventListener("click", () => {
  // closeAllWindowsForCreateObj();
  windowCreateCone.classList.contains("hidden")
   ? windowCreateCone.classList.remove("hidden")
    : windowCreateCone.classList.add("hidden");
});

const coneExample = new ConeClass(30, 60);

let coneExampleCanvas = (sketch) => {
  sketch.setup = () => {
    sketch.angleMode(sketch.DEGREES);
    sketch.noStroke();

    let coneCanvas = sketch.createCanvas(100, 100, sketch.WEBGL);
    coneCanvas.parent(divConeExampleCanvas);
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

    coneExample.setColor(205, 100, 15);
    coneExample.show(sketch);
  };
};

new p5(coneExampleCanvas);
