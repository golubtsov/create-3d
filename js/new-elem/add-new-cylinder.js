const cylinderRadius = document.getElementById("cylinder-radius");
const cylinderHeight = document.getElementById("cylinder-height");

const btnCreateCylinder = document.getElementById("btn-create-cylinder");
btnCreateCylinder.addEventListener("click", () => {
    let cylinder = new CylinderClass(cylinderRadius.value, cylinderHeight.value);
    cylinder.setColor(
        document.getElementById("red-color-cylinder").value,
        document.getElementById("green-color-cylinder").value,
        document.getElementById("blue-color-cylinder").value
    );

    elems.push(cylinder);

    cylinderRadius.value = "";
    cylinderHeight.value = "";
    windowCreateCylinder.classList.add("hidden");

    createListElems()
});