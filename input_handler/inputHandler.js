class InputHandler {
	constructor(game) {
		this.game = game;
		window.addEventListener("keydown", (e) => {
			if((e.keyCode === 40 || e.keyCode === 83) && this.game.keys[this.game.keys.length - 1] !== "up") {
				this.game.keys.push("down");
			}
			if((e.keyCode === 39 || e.keyCode === 68) && this.game.keys[this.game.keys.length - 1] !== "left") {
				this.game.keys.push("right");
			}
			if((e.keyCode === 38 || e.keyCode === 87) && this.game.keys[this.game.keys.length - 1] !== "down") {
				this.game.keys.push("up");
			}
			if((e.keyCode === 37 || e.keyCode === 65) && this.game.keys[this.game.keys.length - 1] !== "right") {
				this.game.keys.push("left");
			}
		})
	}
}

export default InputHandler;