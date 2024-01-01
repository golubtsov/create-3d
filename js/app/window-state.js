const windowState = document.getElementById("window-state");
const btnCloseWindowState = document.getElementById("btn-close-window-state");

const closeWindowState = () => {
  if (windowState.classList.contains("modal-window")) {
    windowState.classList.remove("modal-window");
    windowState.classList.add("hidden");
  }
};

btnCloseWindowState.addEventListener("click", () => {
  closeWindowState();
});
