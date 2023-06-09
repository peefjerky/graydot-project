export const DragAndDrop = () => {
  //Geting the HTML Elements from the DOM

  let lists = document.getElementsByClassName("list");
  let rightBox = document.getElementById("right");
  let leftBox = document.getElementById("left");
  let resetButton = document.getElementById("resetButton");
  let selected = null;

  // Store the initial order of the list items
  let initialOrder = Array.from(lists);

  //Iterating through the divs to and adding the dragging event listeners

  for (let list of lists) {
    list.addEventListener("dragstart", dragStartHandler);
  }

  function dragStartHandler(e) {
    selected = e.target;
    // Adding the .dragging class to provide visual feedback while dragging.
    selected.classList.add("dragging");
  }

  rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  rightBox.addEventListener("drop", (e) => {
    if (selected) {
      rightBox.appendChild(selected);
      selected.style.backgroundColor = "#D9EF57";
      selected.classList.remove("dragging");
      selected = null;
    }
  });

  leftBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  leftBox.addEventListener("drop", (e) => {
    if (selected) {
      leftBox.appendChild(selected);
      selected.classList.remove("dragging");
      selected.style.backgroundColor = "#e0edf8";
      selected = null;
    }
  });

  resetButton.addEventListener("click", () => {
    // Clear the second container
    rightBox.innerHTML = "";
    // Reset the first container to its original state
    for (let i = 0; i < initialOrder.length; i++) {
      leftBox.appendChild(initialOrder[i]);
      initialOrder[i].style.backgroundColor = "#e0edf8";
    }
  });
};
