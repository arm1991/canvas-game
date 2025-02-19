class Field {
	constructor(game) {
		this.game = game;
		this.wallCell = "#228B22";
		this.evenCell = "#c1f376";
		this.oddCell = "#a1df50";
	}

	draw() {
		for(let i = 0; i < this.game.width; ++i) {
			for(let j = 0; j < this.game.height; ++j) {
				if(i === 0 || j === 0 || i === this.game.height - 1 || j === this.game.width - 1) {
					this.game.fieldCtx.fillStyle = this.wallCell;
				} else if((i + j) % 2 === 0) {
					this.game.fieldCtx.fillStyle = this.evenCell;
				} else {
					this.game.fieldCtx.fillStyle = this.oddCell;
				}
				this.game.fieldCtx.fillRect(
					i * this.game.cellWidth,
					j * this.game.cellHeight,
					this.game.cellWidth,
					this.game.cellHeight
				)
			}
		}
	}
}

export default Field;