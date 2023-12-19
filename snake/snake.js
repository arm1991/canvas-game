class Snake {
	constructor(game) {
		this.game = game;
		this.direction = "right";
		this.coordinates = [{x: 3,y: 10}];
		this.makeLarger = false;
		this.speed = 0.2;
	}

	update(dt){
		console.log(this.game.food.x, this.coordinates[0].x)
		if(this.coordinates[0].x === this.game.food.x && this.coordinates[0].y === this.game.food.y) {
			this.makeLarger = !this.makeLarger;
			this.game.addFood();
		}
		if(this.makeLarger === true) {
			this.makeLarger = !this.makeLarger;
			for (var i = this.coordinates.length - 1; i >= 0; i--) {
				this.coordinates[i] = {...this.coordinates[i - 1]};
			}
			this.coordinates[0] = {...this.coordinates[1]};
		}
		if(
			this.game.keys.length >= 2 &&
			this.coordinates[0].x * this.game.cellWidth % this.game.cellWidth === 0 &&
			this.coordinates[0].y * this.game.cellHeight % this.game.cellHeight === 0
		) {

			this.game.keys.shift();
			this.direction = this.game.keys[0];
		}
		this.coordinates = this.coordinates.map(item => {
			if(this.direction === "right"){
				let distance = (item.x) + this.speed;
				distance = +distance.toFixed(1);
				return {
					...item,
					x: distance,
				}
			} else if(this.direction === "left"){
				let distance = (item.x) - this.speed;
				distance = +distance.toFixed(1);
				return {
					...item,
					x: distance,
				}
			} else if(this.direction === "up"){
				let distance = (item.y) - this.speed;
				 distance = +distance.toFixed(1);
				return {
					...item,
					y: distance,
				}
			} else if(this.direction === "down"){
				let distance = (item.y) + this.speed;
				 distance = +distance.toFixed(1);
				return {
					...item,
					y: distance,
				}
			}
		})

	}

	draw(){
		this.game.ctx.fillStyle = "black";
		this.coordinates.forEach(item => {
			this.game.ctx.fillRect(
				item.x * this.game.cellWidth,
				item.y * this.game.cellHeight,
				this.game.cellWidth,
				this.game.cellHeight
			);
		})
	}
}


export default Snake;