import store from "./store/store.js";

let { ctx, CANVAS_WIDTH, CANVAS_HEIGHT, lt } = store.canvasElements;
const { snakeCordinates } = store.gameElements;
const { background } = store.domElements;
background.style.backgroundImage = `url(./assets/forest.jpg)`;

function tick(ct) {
  let dt = ct - lt;
  lt = ct;

  // update(dt);
  // draw(dt);
  requestAnimationFrame(tick);
}
// console.log(21);
tick(lt);
background.addEventListener("load", () => {
  // changeCanvasSize();
  tick(lt);
});
