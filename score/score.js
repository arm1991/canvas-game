class Score {
  constructor(game) {
    this.game = game;
    this.score = null;
  }

  update() {
    this.score = this.game.snake.coordinates.length - 1;
  }

  draw() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.font = "bold 50px sans-serif";
    this.game.ctx.fillText("Your Score is: " + this.score, 0, 40);
  }
}

export default Score;
