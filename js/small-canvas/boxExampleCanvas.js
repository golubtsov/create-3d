const windowCreateBox = document.getElementById("window-create-box");
const divBoxExampleCanvas = document.getElementById("box-example-canvas");

divBoxExampleCanvas.addEventListener("click", () => {
  // closeAllWindowsForCreateObj();
  windowCreateBox.classList.contains("hidden")
    ? windowCreateBox.classList.remove("hidden")
    : windowCreateBox.classList.add("hidden");
});

const exampleBox = new BoxClass(50, 50, 50);

let boxExampleCanvas = (sketch) => {
  sketch.setup = () => {
    sketch.angleMode(sketch.DEGREES);
    sketch.noStroke();

    let boxCanvas = sketch.createCanvas(100, 100, sketch.WEBGL);
    boxCanvas.parent(divBoxExampleCanvas);
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

    exampleBox.setColor(185, 0, 70);
    exampleBox.show(sketch);
  };
};

new p5(boxExampleCanvas);
