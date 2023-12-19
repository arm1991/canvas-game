// import store from "./store/store.js";
// import Field from "./field/field.js";
// import Food from "./food/food.js";
// import Snake from "./snake/snake.js";
import Game from "./game/game.js";

// let { ctx, CANVAS_WIDTH, CANVAS_HEIGHT, lt, canvas_field, canvas_field_context } = store.canvasElements;
// const { snakeCordinates } = store.gameElements;
// const { background } = store.domElements;
// background.src = `./assets/forest.jpg`;

// const food = new Food(17, 17, 35, 35);
// const snake = new Snake(35, 35);


// // drawing background field and not clearing it
// function drawField() {
//   const field = new Field(17, 17, 35, 35);
//   changeCanvasSize(canvas_field, 595, 595);
//   field.draw(canvas_field_context);
// }



// function tick(ct) {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//   let dt = ct - lt;
//   lt = ct;
  
//   food.draw(ctx, 35, 35);
//   snake.update(dt);
//   snake.draw(ctx);
//   // update(dt);
//   // draw(dt);
//   requestAnimationFrame(tick);
// }
// // console.log(21);
// // tick(lt);

// background.addEventListener("load", () => {
//   background.style.display = "block";
//   drawField()
//   changeCanvasSize(canvas, 525, 525);
//   tick(lt);
// });

// function changeCanvasSize(canvas, width, height) {
//   canvas.width = CANVAS_WIDTH = width;
//   canvas.height = CANVAS_HEIGHT = height;
// }




let lt = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvas_field = document.getElementById("canvas_field");
const canvas_field_context = canvas_field.getContext("2d");

const background = document.getElementById("background");
background.src = `./assets/forest.jpg`;



let game = null;


function tick(ct) {
  ctx.clearRect(0, 0, game.canvasWidth , game.canvasHeight)
  let dt = ct - lt;
  lt = ct;
  
  game.update();
  game.draw();
  requestAnimationFrame(tick);
}


// canvas, ctx, backgroundCanvas, backgroundCtx, width, height, cellWidth, cellHeight

background.addEventListener("load", () => {
  background.style.display = "block";
  game = new Game(canvas, ctx, canvas_field, canvas_field_context, 17, 17, 50, 50);
  tick(lt);
}); 