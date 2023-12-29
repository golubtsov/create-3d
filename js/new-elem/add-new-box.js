const boxWidth = document.getElementById("box-width");
const boxHeight = document.getElementById("box-height");
const boxDepth = document.getElementById("box-depth");

const btnCreateBox = document.getElementById("btn-create-box");
btnCreateBox.addEventListener("click", () => {
  let box = new BoxClass(boxWidth.value, boxHeight.value, boxDepth.value);
  box.setColor(
    document.getElementById("red-color-box").value,
    document.getElementById("green-color-box").value,
    document.getElementById("blue-color-box").value
  );

  elems.push(box);
  
  boxWidth.value = "";
  boxHeight.value = "";
  boxDepth.value = "";
  windowCreateBox.classList.add("hidden");

  createListElems();
});
