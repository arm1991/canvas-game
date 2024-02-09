import Field from "../field/field.js";
import Food from "../food/food.js";
import Snake from "../snake/snake.js";
import InputHandler from "../input_handler/inputHandler.js";
import Score from "../score/score.js";

class Game {
  constructor(
    canvas,
    ctx,
    backgroundCanvas,
    backgroundCtx,
    width,
    height,
    cellWidth,
    cellHeight
  ) {
    // game board
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.canvasWidth = (this.width - 2) * this.cellWidth;
    this.canvasHeight = (this.height - 2) * this.cellHeight;
    this.#setCanvas();

    // state
    this.end = false;

    // inputs
    this.keys = ["right"];
    this.inputs = new InputHandler(this);

    // snake
    this.snake = null;
    this.#setSnake();

    // field
    this.field = null;
    this.fieldCanvas = backgroundCanvas;
    this.fieldCtx = backgroundCtx;
    this.fieldWidth = this.width * this.cellWidth;
    this.fieldHeight = this.height * this.cellHeight;
    this.#setField();

    // food
    this.food = null;
    this.addFood();

    this.score = new Score(this);
  }

  addFood(cordinates) {
    if (cordinates) {
      this.food = new Food(this, cordinates);
    } else {
      this.food = new Food(this);
    }
    this.food.draw();
  }

  #setField() {
    this.field = new Field(this);
    changeCanvasSize(this.fieldCanvas, this.fieldWidth, this.fieldHeight);
    this.field.draw(this.fieldCtx);
  }

  #setSnake() {
    this.snake = new Snake(this);
  }

  #setCanvas() {
    changeCanvasSize(this.canvas, this.canvasWidth, this.canvasHeight);
  }

  update(dt) {
    this.snake.update(dt);
    this.score.update();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.food.draw();
    this.snake.draw();
    this.score.draw();
  }

  drawEnd() {
    console.log(123);
  }
}

function changeCanvasSize(canvas, width, height) {
  canvas.width = width;
  canvas.height = height;
}

export default Game;
