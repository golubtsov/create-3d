const divListElems = document.getElementById("list-elems");

let currentElement = null;

function changeElem(index) {
  currentElement = elems[index];
  inputCoordinateX.value = elems[index].x;
  inputCoordinateY.value = elems[index].y;
}

function createListElems() {
  let createdElems = "";

  elems.map((el, index) => {
    createdElems += `<button id="${index}" onClick="changeElem(${index})"
          class="mt-2 block border rounded-sm hover:bg-orange-400 hover:text-white"
        >${el.getTypeObj()} ${index++}</button>`;
  });

  divListElems.innerHTML = createdElems;
}

createListElems();

// ============ ИЗМЕНЕНИЕ СОСТОЯНИЯ ВЫБРАННОГО ЭЛЕМЕНТА =================

const inputCoordinateX = document.getElementById("coordinate-x");
inputCoordinateX.addEventListener("change", (e) => {
  currentElement.setPosition(e.target.value, currentElement.y);
});

const inputCoordinateY = document.getElementById("coordinate-y");
inputCoordinateY.addEventListener("change", (e) => {
  currentElement.setPosition(currentElement.x, e.target.value);
});

// ======================================================================
