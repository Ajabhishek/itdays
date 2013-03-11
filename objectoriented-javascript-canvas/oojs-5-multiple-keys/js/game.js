var game = {};

(function(){
	var canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	game.stage = canvas.getContext("2d");
	
	game.keys = [];
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
		if(32 in game.keys){
			if(!game.shotFired){
				game.createShot();
				game.shotFired = true;
			}
		}

		if(37 in game.keys){
			this.x -= this.speed;	
			game.shootDirX = -1;
			game.shootDirY = 0;
		}

		if(38 in game.keys){
			this.y -= this.speed;	
			game.shootDirX = 0;
			game.shootDirY = -1;
		}

		if(39 in game.keys){
			this.x += this.speed;	
			game.shootDirX = 1;
			game.shootDirY = 0;
		}

		if(40 in game.keys){
			this.y += this.speed;	
			game.shootDirX = 0;
			game.shootDirY = 1;
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
		game.keys[e.keyCode] = true;
	});
	window.addEventListener("keyup", function(e){
		delete game.keys[e.keyCode];
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

