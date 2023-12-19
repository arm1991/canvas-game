const canvas = document.getElementById("canvas");
const store = {
  canvasElements: {
    canvas: canvas,
    ctx: canvas.getContext("2d"),
    CANVAS_WIDTH: canvas.width,
    CANVAS_HEIGHT: canvas.height,
    lt: 0,
  },
  gameElements: {
    snakeCordinates: [],
  },
  domElements: {
    background: document.getElementById("background"),
  },
};

export default store;
