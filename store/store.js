const canvas = document.getElementById("canvas");
const field = document.getElementById("canvas_field");
const store = {
  canvasElements: {
    canvas: canvas,
    ctx: canvas.getContext("2d"),
    CANVAS_WIDTH: canvas.width,
    CANVAS_HEIGHT: canvas.height,
    lt: 0,
    canvas_field: field,
    canvas_field_context: field.getContext("2d"),
  },
  gameElements: {
    snakeCordinates: [],
  },
  domElements: {
    background: document.getElementById("background"),
  },
};

export default store;
