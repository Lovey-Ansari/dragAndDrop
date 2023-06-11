let dragItemOriginal,
  dragItem = null;
let draggable = document.querySelector(".dragCont");
let draggableCoor = draggable.getBoundingClientRect();
let dropZone = document.querySelector(".dropZone");
let dropZoneCoor = dropZone.getBoundingClientRect();
const body = document.querySelector("body");

window.onload = () => {
  let dragItems = document.querySelectorAll(".dragItem");

  //adding event listeners
  dragItems.forEach((item) => {
    item.addEventListener("mousedown", onMouseDown);
  });
  dragItems.forEach((item) => {
    item.addEventListener("touchstart", onMouseDown);
  });

  document.addEventListener("touchmove", handleMouseMove);
  document.addEventListener("touchend", onMouseUp);

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  const resetBtn = document.querySelector(".resetBtn");
  resetBtn.addEventListener("click", onClick);
};
window.onresize = () => {
  let dragItems = document.querySelectorAll(".dragItem");
  //adding event listeners
  dragItems.forEach((item) => {
    item.addEventListener("mousedown", onMouseDown);
  });
  dragItems.forEach((item) => {
    item.addEventListener("touchstart", onMouseDown);
  });

  document.addEventListener("touchmove", handleMouseMove);
  document.addEventListener("touchend", onMouseUp);

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  const resetBtn = document.querySelector(".resetBtn");
  resetBtn.addEventListener("click", onClick);
};
