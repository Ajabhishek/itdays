var game = {},
	i = 0;

(function(){
	var canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	game.stage = canvas.getContext("2d");
	var player = {};
	player.create = function(){
		this.w = 80;
		this.h = 40;
		this.x = window.innerWidth/2 - this.w;	
		this.y = window.innerHeight/2 - this.h;
	}
	
	player.render = function(){
		game.stage.rect(this.x, this.y, this.w, this.h);
		game.stage.fillStyle = "#000";
		game.stage.fill();
	}
	
	game.player = player;
	player.create();
		
	game.stage.render = function(){
		game.stage.clearRect(0, 0, window.innerWidth, window.innerHeight);
		player.render();
	}
	
	setInterval(game.stage.render, 5);
})();



