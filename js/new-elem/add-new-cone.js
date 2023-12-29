const coneRadius = document.getElementById("cone-radius");
const coneHeight = document.getElementById("cone-height");

const btnCreateCone = document.getElementById("btn-create-cone");
btnCreateCone.addEventListener("click", () => {
    let cone = new ConeClass(coneRadius.value, coneHeight.value);
    cone.setColor(
      document.getElementById("red-color-cone").value,
      document.getElementById("green-color-cone").value,
      document.getElementById("blue-color-cone").value
    );

    elems.push(cone);
    
    coneRadius.value = "";
    coneHeight.value = "";
    windowCreateCone.classList.add("hidden");

    createListElems()
});