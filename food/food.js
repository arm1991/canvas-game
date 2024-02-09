import { objectExistsInArray } from "../helpers/helpers.js";

class Food {
  constructor(game, cordinates) {
    this.game = game;
    do {
      this.x = this.#getRandomNumber(this.game.width - 2);
      this.y = this.#getRandomNumber(this.game.height - 2);
      if (cordinates && !objectExistsInArray({ x: this.x, y: this.y }, cordinates)) break;
    } while (cordinates);
  }

  #getRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }

  draw() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(
      this.x * this.game.cellWidth,
      this.y * this.game.cellHeight,
      this.game.cellWidth,
      this.game.cellHeight
    );
  }
}

export default Food;
