import Game from "./game/game.js";

let lt = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvas_field = document.getElementById("canvas_field");
const canvas_field_context = canvas_field.getContext("2d");

const background = document.getElementById("background");
background.src = `./assets/forest.jpg`;

let game = null;

function tick(ct) {
  let dt = ct - lt;
  lt = ct;

  game.update(dt);
  if (game.end) {
    game.drawEnd();
    return;
  }
  game.draw();
  requestAnimationFrame(tick);
}

background.addEventListener("load", () => {
  background.style.display = "block";
  game = new Game(
    canvas,
    ctx,
    canvas_field,
    canvas_field_context,
    17,
    17,
    50,
    50
  );
  tick(lt);
});
