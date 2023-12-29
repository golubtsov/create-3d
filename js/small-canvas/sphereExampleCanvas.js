const windowCreateSphere = document.getElementById("window-create-sphere");
const divSphereExampleCanvas = document.getElementById("sphere-example-canvas");
divSphereExampleCanvas.addEventListener("click", () => {
  // closeAllWindowsForCreateObj();
  windowCreateSphere.classList.contains("hidden")
    ? windowCreateSphere.classList.remove("hidden")
    : windowCreateSphere.classList.add("hidden");
});

const sphereExample = new SphereClass(20);

let sphereExampleCanvas = (sketch) => {
  sketch.setup = () => {
    sketch.angleMode(sketch.DEGREES);
    sketch.noStroke();

    let sphereCanvas = sketch.createCanvas(100, 100, sketch.WEBGL);
    sphereCanvas.parent(divSphereExampleCanvas);
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

    sphereExample.setColor(25, 100, 205);
    sphereExample.show(sketch);
  };
};

new p5(sphereExampleCanvas);
