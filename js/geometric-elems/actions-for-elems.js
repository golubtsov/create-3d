const divListElems = document.getElementById("list-elems");

let currentElement = null;

function changeElem(index) {
  currentElement = elems[index];
  inputCoordinateX.value = elems[index].x;
  inputCoordinateY.value = elems[index].y;
  inputCoordinateZ.value = elems[index].z;

  if (windowState.classList.contains("hidden")) {
    windowState.classList.remove("hidden");
    windowState.classList.add("modal-window");
  }
}

function createListElems() {
  let createdElems = "";

  elems.map((el, index) => {
    createdElems += `<button id="${index}" onClick="changeElem(${index})"
          class="mt-2 block border rounded-sm hover:bg-orange-400 hover:text-white p-2"
        >${translateObjType(el.getTypeObj())} ${index++}</button>`;
  });

  divListElems.innerHTML = createdElems;
}

createListElems();

// ============ ИЗМЕНЕНИЕ СОСТОЯНИЯ ВЫБРАННОГО ЭЛЕМЕНТА =================

const setNewPositionElem = () => {
  currentElement.setPosition(
    inputCoordinateX.value,
    inputCoordinateY.value,
    inputCoordinateZ.value
  );
};

const setNewColorElem = () => {
  currentElement.setColor(
    inputColorRed.value,
    inputColorGreen.value,
    inputColorBlue.value
  );
};

const inputCoordinateX = document.getElementById("coordinate-x");
const inputCoordinateY = document.getElementById("coordinate-y");
const inputCoordinateZ = document.getElementById("coordinate-z");
const inputColorRed = document.getElementById("item-color-red");
const inputColorGreen = document.getElementById("item-color-green");
const inputColorBlue = document.getElementById("item-color-blue");

inputCoordinateX.addEventListener("change", () => {
  setNewPositionElem();
});

inputCoordinateY.addEventListener("change", () => {
  setNewPositionElem();
});

inputCoordinateZ.addEventListener("change", () => {
  setNewPositionElem();
});

inputColorRed.addEventListener("change", () => {
  setNewColorElem();
});

inputColorGreen.addEventListener("change", () => {
  setNewColorElem();
});

inputColorBlue.addEventListener("change", () => {
  setNewColorElem();
});

// ======================================================================


// ================= УДАЛЕНИЕ ЭЛЕМЕНТОВ =================

const btnDeleteElem = document.getElementById("btn-delete-elem");

btnDeleteElem.addEventListener("click", () => {
  elems.splice(elems.indexOf(currentElement), 1);
  createListElems();
  closeWindowState();
});
