import { objectExistsInArray } from "../helpers/helpers.js";

class Snake {
  constructor(game) {
    this.game = game;
    this.direction = "right";
    this.coordinates = [{ x: 3, y: 10 }];

    this.indexOfCellToAdd = null;
    this.makeLargerCell = null;
    this.makeLarger = false;
    this.speed = 1;

    this.frameCount = 100;
    this.frame = 0;
  }

  update(dt) {
    if (this.frame < this.frameCount) {
      this.frame += dt;
      return;
    }
    this.frame = 0;

    this.#handleDeltaTime(dt);

    this.#checkFood();

    this.#changeCordinates();

    this.#makeLarger();

    this.#handleInput();

    this.#handleMove();

    this.#checkLose();
  }

  draw() {
    this.game.ctx.fillStyle = "black";
    this.coordinates.forEach((item) => {
      this.game.ctx.fillRect(
        item.x * this.game.cellWidth,
        item.y * this.game.cellHeight,
        this.game.cellWidth,
        this.game.cellHeight
      );
    });
  }

  #handleInput() {
    if (
      this.game.keys.length >= 2 &&
      (this.coordinates[0].x * this.game.cellWidth) % this.game.cellWidth ===
        0 &&
      (this.coordinates[0].y * this.game.cellHeight) % this.game.cellHeight ===
        0
    ) {
      this.game.keys.shift();
      this.direction = this.game.keys[0];
    }
  }

  #handleMove() {
    if (this.direction === "right") {
      let distance = this.coordinates[0].x + this.speed;
      distance = +distance.toFixed(1);
      this.coordinates[0].x = distance;
    } else if (this.direction === "left") {
      let distance = this.coordinates[0].x - this.speed;
      distance = +distance.toFixed(1);
      this.coordinates[0].x = distance;
    } else if (this.direction === "up") {
      let distance = this.coordinates[0].y - this.speed;
      distance = +distance.toFixed(1);
      this.coordinates[0].y = distance;
    } else if (this.direction === "down") {
      let distance = this.coordinates[0].y + this.speed;
      distance = +distance.toFixed(1);
      this.coordinates[0].y = distance;
    }
  }

  #checkFood() {
    if (
      this.coordinates[0].x === this.game.food.x &&
      this.coordinates[0].y === this.game.food.y
    ) {
      this.makeLarger = !this.makeLarger;
      this.game.addFood(this.coordinates);
    }
  }

  #changeCordinates() {
    const newArray = [];
    for (let i = this.coordinates.length; i > 0; i--) {
      newArray[i] = { ...this.coordinates[i - 1] };
    }
    newArray[0] = { ...this.coordinates[0] };
    this.coordinates = newArray;
  }

  #makeLarger() {
    if (this.makeLarger !== true) {
      this.coordinates.pop();
    }
    this.makeLarger = false;
  }

  #handleDeltaTime(dt) {
    if (this.frame < this.frameCount) {
      this.frame += dt;
      return;
    }
    this.frame = 0;
  }

  #checkLose() {
    if (
      objectExistsInArray(this.coordinates[0], this.coordinates, "end") ||
      this.#checkWall(this.coordinates[0].x, this.coordinates[0].y)
    ) {
      this.game.end = true;
    }
  }

  #checkWall(x, y) {
    return (
      x < 0 ||
      x >= this.game.canvasWidth / this.game.cellWidth ||
      y < 0 ||
      y >= this.game.canvasHeight / this.game.cellHeight
    );
  }
}

export default Snake;
