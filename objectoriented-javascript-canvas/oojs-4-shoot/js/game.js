var game = {};

(function(){
	var canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	game.stage = canvas.getContext("2d");
	
	game.key = false;
	game.shootDirX = 0;
	game.shootDirY = 1;
	game.shotFired = false;
	
	game.shots = [];
	
	var player = {};
	player.create = function(){
		this.w = 80;
		this.h = 40;
		this.x = window.innerWidth/2 - this.w;	
		this.y = window.innerHeight/2 - this.h;
		this.speed = 2;
	}
	
	player.render = function(){
		switch(game.key){
			case 32:
				if(!game.shotFired){
					game.createShot();
					game.shotFired = true;
				}
				break;
			case 37:
				this.x -= this.speed;	
				game.shootDirX = -1;
				game.shootDirY = 0;
				break;
			case 38:
				this.y -= this.speed;	
				game.shootDirX = 0;
				game.shootDirY = -1;
				break;	
			case 39:
				this.x += this.speed;	
				game.shootDirX = 1;
				game.shootDirY = 0;
				break;	
			case 40:
				this.y += this.speed;	
				game.shootDirX = 0;
				game.shootDirY = 1;
				break;	
		}
		game.stage.fillRect(this.x, this.y, this.w, this.h);
		game.stage.fillStyle = "#000";
	}
	
	game.player = player;
	player.create();
		
	game.stage.render = function(){
		game.stage.clearRect(0, 0, window.innerWidth, window.innerHeight);
		game.player.render();
		var i=0,
			iMax = game.shots.length;
		for(i=0; i<iMax;i++){
			var shot = game.shots[i];
			shot.render();	
		}
		
	}
	
	game.createShot = function(){
		this.shots.push(new Shot());
	};
		
	window.addEventListener("keydown", function(e){
		game.key = e.keyCode;
	});
	window.addEventListener("keyup", function(e){
		game.key = false;
		game.shotFired = false;
	});
	
	setInterval(game.stage.render, 5);
})();

function Shot(){
	this.speedX = game.shootDirX*3;
	this.speedY = game.shootDirY*3;
	this.w = 30;
	this.h = 30;
	this.x = game.player.x + game.player.w/2 - this.w/2;
	this.y = game.player.y;// + game.player.y/2;
	this.shot = new Image();
	this.shot.src = "images/bullet.png";
}

Shot.prototype.render = function(){
	this.x += this.speedX;
	this.y += this.speedY;
	game.stage.drawImage(this.shot, this.x, this.y, this.w, this.h);
}

