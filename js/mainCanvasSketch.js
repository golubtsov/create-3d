let elems = [];

const START_CAM_RANGE = 800;

let camMainCanvas;
let camRangeMainCanvas = START_CAM_RANGE;

// let testBox = new BoxClass(100, 100, 100);
// testBox.setPosition(-100, -100);
// testBox.setColor(205, 20, 20);
// elems.push(testBox);

// let testC = new CylinderClass(50, 100);
// testC.setPosition(200, -100);
// testC.setColor(205, 205, 20);
// elems.push(testC);

let mainCanvasSketch = (sketch) => {
  sketch.setup = () => {
    sketch.angleMode(sketch.DEGREES);
    sketch.noStroke();

    let mainCanvas = sketch.createCanvas(
      sketch.windowWidth,
      sketch.windowHeight,
      sketch.WEBGL
    );
    mainCanvas.parent("main-canvas");

    camMainCanvas = sketch.createCamera();
  };

  sketch.windowResized = () => {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  };

  sketch.mouseWheel = (event) => {
    camRangeMainCanvas += event.delta / 10;
  };

  sketch.draw = () => {
    camMainCanvas.setPosition(0, 0, camRangeMainCanvas);

    sketch.rotateX(rotX);
    sketch.rotateZ(rotZ);

    settingsForWorld(sketch);

    showElems(sketch);

    createGround(sketch);
  };
};

new p5(mainCanvasSketch);

function showElems(sketch) {
  for (const el of elems) {
    el.show(sketch);
  }
}
