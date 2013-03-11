function Enemy(){
	this.x = randomRange(0, window.innerWidth);	
	this.y = -200;
	this.img = new Image();
	this.img.src = "Images/enemy.png";
	this.w = 100;
	this.h = 100;	
	this.speedX = randomRange(-2, 2);
	this.speedY = randomRange(1, 2);
	this.id = game.nextEnemyId++;
}

Enemy.prototype.render = function(){
	this.x += this.speedX;
	this.y += this.speedY;
	game.stage.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Enemy.prototype.die = function(){
	this.speedX = 0;
	this.speedY = 0;
	delete game.enemies[this.id];
	//console.log(game.enemies);	
}