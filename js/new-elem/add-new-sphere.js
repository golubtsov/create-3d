const sphereRadius = document.getElementById("sphere-radius");

const btnCreateSphere = document.getElementById("btn-create-sphere");
btnCreateSphere.addEventListener("click", () => {
  let sphere = new SphereClass(sphereRadius.value);
  sphere.setColor(
    document.getElementById("red-color-sphere").value,
    document.getElementById("green-color-sphere").value,
    document.getElementById("blue-color-sphere").value
  );

  elems.push(sphere);

  sphereRadius.value = "";
  windowCreateSphere.classList.add("hidden");

  createListElems();
});
