let rotX = 60;

const rotateInputX = document.getElementById("rotate-x");
rotateInputX.addEventListener("input", (event) => {
  rotX = event.target.value;
});

let rotZ = 0;

const rotateInputZ = document.getElementById("rotate-z");
rotateInputZ.addEventListener("input", (event) => {
  rotZ = event.target.value;
});
