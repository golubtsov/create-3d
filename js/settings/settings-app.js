function createGround(sketch) {
  sketch.fill(120);
  sketch.box(800, 800, 1);
}

function settingsForWorld(sketch) {
  sketch.background(220);
  sketch.ambientLight(255);
  sketch.pointLight(255, 255, 255, 500, 0, 400); // освещение
  sketch.normalMaterial();
  sketch.shininess(100);
  sketch.specularMaterial(200, 200, 255);
}

function closeAllWindowsForCreateObj() {
  const windowsCreateObj = document.querySelectorAll(".window-new-obj");
  windowsCreateObj.forEach((window) => {
    if (!window.classList.contains("hidden")) {
      window.classList.add("hidden");
    }
  });
}
