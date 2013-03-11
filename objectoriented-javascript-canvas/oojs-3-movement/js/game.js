var game = {},
	i = 0;

(function(){
	var canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	game.stage = canvas.getContext("2d");
	
	game.key = false;
	
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
			case 37:
				this.x -= this.speed;	
				break;
			case 38:
				this.y -= this.speed;	
				break;	
			case 39:
				this.x += this.speed;	
				break;	
			case 40:
				this.y += this.speed;	
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
	}
	
	window.addEventListener("keydown", function(e){
		game.key = e.keyCode;
	});
	window.addEventListener("keyup", function(e){
		game.key = false;
	});
	
	setInterval(game.stage.render, 5);
})();