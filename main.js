import "./style.css";
import { DragAndDrop } from "./DragAndDrop";

document.querySelector("#app").innerHTML = `
 <div id="root">
      <div class="main">
        <div class="header">
          <h1>Vanilla Drag and Drop!</h1>
        </div>
        <div class="container">
        <div id="containerHeader">
         <h2>Drag and Drop your favourite Social Media</h2>
        </div>

          <div id="left">
            <div class="list" draggable="true" data-id="1">
              <i class="fa-brands fa-reddit"></i>
              <p>Reddit</p>
            </div>
            <div class="list" draggable="true" data-id="2">
              <i class="fa-brands fa-instagram"></i>
              <p>Instagram</p>
            </div>
            <div class="list" draggable="true" data-id="3">
              <i class="fa-brands fa-facebook"></i>
              <p>Facebook</p>
            </div>
            <div class="list" draggable="true" data-id="4">
              <i class="fa-brands fa-twitter"></i>
              <p>Twitter</p>
            </div>
          </div>
          <div id="right"></div>
          <div id="resetbtn">
            <button id="resetButton">Reset</button>
          </div>
        </div>
      </div>
    </div>
`;
document.addEventListener("DOMContentLoaded", () => {
  DragAndDrop();
});
