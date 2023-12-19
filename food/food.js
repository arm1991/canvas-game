class Food {
	constructor(game) {
		this.game = game;
		this.x = this.#getRandomNumber(this.game.width - 2);
		this.y = this.#getRandomNumber(this.game.height - 2);
	}

	#getRandomNumber(number) {
		return Math.floor(Math.random() * number);
	}

	draw() {
		this.game.ctx.fillStyle = "red";
		this.game.ctx.fillRect(this.x * this.game.cellWidth, this.y * this.game.cellHeight, this.game.cellWidth, this.game.cellHeight)
	}	
}

export default Food