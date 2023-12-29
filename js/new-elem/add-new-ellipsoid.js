const ellipsoidRadiusX = document.getElementById("ellipsoid-radius-x");
const ellipsoidRadiusY = document.getElementById("ellipsoid-radius-y");
const ellipsoidRadiusZ = document.getElementById("ellipsoid-radius-z");

const btnCreateEllipsoid = document.getElementById("btn-create-ellipsoid");
btnCreateEllipsoid.addEventListener("click", () => {
  let ellipsoid = new EllipsoidClass(
    ellipsoidRadiusX.value,
    ellipsoidRadiusY.value,
    ellipsoidRadiusZ.value
  );
  ellipsoid.setColor(
    document.getElementById("red-color-ellipsoid").value,
    document.getElementById("green-color-ellipsoid").value,
    document.getElementById("blue-color-ellipsoid").value
  );

  elems.push(ellipsoid);

  ellipsoidRadiusX.value = "";
  ellipsoidRadiusY.value = "";
  ellipsoidRadiusZ.value = "";
  windowCreateEllipsoid.classList.add("hidden");

  createListElems()
});
