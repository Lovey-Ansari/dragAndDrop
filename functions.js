const onMouseDown = (event) => {
  dragItemOriginal = event.target;
  dragItem = document.createElement("div");
  dragItem.classList = dragItemOriginal.classList;
  dragItem.innerHTML = dragItemOriginal.innerHTML;

  console.log({ dragItem, dragItemOriginal });
};

function handleMouseMove(event) {
  if (dragItem === null) return;
  console.log(dragItem.innerHTML);
  let mouseX, mouseY;
  if (event.type == "touchmove") {
    const touches = event.touches[0];
    mouseX = touches.clientX;
    mouseY = touches.clientY;
  } else {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
  // console.log({ mouseX, mouseY });
  dragItem.style.position = "absolute";
  dragItem.style.top = mouseY + "px";
  dragItem.style.left = mouseX + "px";
  const body = document.querySelector("body");
  body.appendChild(dragItem);
}

const onMouseUp = (event) => {
  if (dragItem === null) return;
  // document.removeEventListener("mousemove", handleMouseMove);
  // document.removeEventListener("touchmove", handleMouseMove);

  let mouseX, mouseY;
  if (event.type == "touchend") {
    const touches = event.changedTouches[0];
    mouseX = touches.clientX;
    mouseY = touches.clientY;
  } else {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
  // console.log(mouseX, mouseY);
  if (
    mouseX >= dropZoneCoor.left &&
    mouseX <= dropZoneCoor.left + dropZoneCoor.width &&
    mouseY >= dropZoneCoor.top &&
    mouseY <= dropZoneCoor.top + dropZoneCoor.height
  ) {
    dragItem.classList = dragItemOriginal.classList;
    dragItem.style.position = "static";
    dropZone.appendChild(dragItem);
    dragItemOriginal.innerHTML = "";
    dragItemOriginal.removeEventListener("mousedown", onMouseDown);
    dragItemOriginal.removeEventListener("touchstart", onMouseDown);
    dragItem = null;
    const msg = document.querySelector(".msg");
    msg.classList.add("show");
    setInterval(() => {
      msg.classList.remove("show");
    }, 1000);
  } else {
    // body.removeChild(dragItem);
    dragItem.remove();
    dragItem = null;
  }
  if (
    mouseX >= !draggableCoor.left &&
    mouseX <= !draggableCoor.left + draggableCoor.width &&
    mouseY >= !draggableCoor.top &&
    mouseY <= !draggableCoor.top + draggableCoor.height
  ) {
    dragItem = null;
  }
};

const onClick = () => {
  let allDraggables = draggable.children;
  let allDropItems = dropZone.children;
  for (let i = 0; i < allDraggables.length; i++) {
    allDraggables[i].textContent = i + 1;
  }
  dropZone.innerHTML = "";
  let dragItems = document.querySelectorAll(".dragItem");
  dragItems.forEach((item) => {
    item.addEventListener("mousedown", onMouseDown);
  });
  dragItems.forEach((item) => {
    item.addEventListener("touchstart", onMouseDown);
  });
};
