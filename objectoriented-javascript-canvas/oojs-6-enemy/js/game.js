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
	game.nextEnemyId = 0;
	game.nextShotId = 0;
	game.enemies = {};
	game.enemyInterval = 0;
	
	game.shots = {};
	
	game.createEnemy = function(){
		var enemy = new Enemy();
		var enemyId = enemy.id;
		game.enemies[enemyId] = enemy;	
		console.log(game.enemies);
		clearInterval(this.enemyInterval);
		this.enemyInterval = setInterval(this.createEnemy, randomRange(2000, 4000));
	}
	
	var player = {};
	player.create = function(){
		this.w = 80;
		this.h = 40;
		this.x = window.innerWidth/2 - this.w;	
		this.y = window.innerHeight/2 - this.h;
		this.speed = 4;
		this.gun = {};
		this.gun.w = 20;
		this.gun.h = 20;
		this.gun.x = player.x + player.w/2;
		this.gun.y = player.y;	
		this.gun.color = "#f90";
	}
	
	player.calcGun = function(){
		switch(game.shootDirX){
			case -1:
				player.gun.x = player.x-player.gun.w;
				break;	
			case 0:
				player.gun.x = player.x+player.w/2-player.gun.w/2;
				break;
			case 1:
				player.gun.x = player.x + player.w;
				break;
		}
		switch(game.shootDirY){
			case -1:
				player.gun.y = player.y-player.gun.h;
				break;	
			case 0:
				player.gun.y = player.y+player.h/2-player.gun.h/2;
				break;
			case 1:
				player.gun.y = player.y + player.h;
				break;
		}
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
		game.player.calcGun();
		game.stage.fillRect(this.x, this.y, this.w, this.h);
		game.stage.fillStyle = "#000";
		game.stage.fillRect(this.gun.x, this.gun.y, this.gun.w, this.gun.h);
		game.stage.fillStyle = this.gun.color;
	}
	
	game.player = player;
	player.create();
		
	game.stage.render = function(){
		game.stage.clearRect(0, 0, window.innerWidth, window.innerHeight);
		game.player.render();
		
		for(var key in game.shots){
			game.shots[key].render();	
		}
		
		for(var key in game.enemies){
			game.enemies[key].render();	
		}
		
/*		var eMax = game.enemies.length;
		for(i=0; i<eMax; i++){
			var enemy = game.enemies[i];
			enemy.render();	
		}*/
	}
	
	game.createShot = function(){
		var shot = new Shot();
		var shotId = shot.id;
		this.shots[shotId] = shot;
	};
		
	window.addEventListener("keydown", function(e){
		game.keys[e.keyCode] = true;
	});
	window.addEventListener("keyup", function(e){
		delete game.keys[e.keyCode];
		game.shotFired = false;
	});
	
	setInterval(game.stage.render, 5);
	game.enemyInterval = setInterval(game.createEnemy, randomRange(2000, 4000));
})();

function Shot(){
	this.speedX = game.shootDirX*5;
	this.speedY = game.shootDirY*5;
	this.w = 30;
	this.h = 30;
	this.x = game.player.gun.x - this.w/4 + game.player.gun.w * game.shootDirX;
	this.y = game.player.gun.y - this.h/4 + game.player.gun.h * game.shootDirY;
//	this.y = game.player.y;// + game.player.y/2;
	this.shot = new Image();
	this.shot.src = "images/bullet.png";
	this.id = game.nextShotId++;
}

Shot.prototype.render = function(){
	this.x += this.speedX;
	this.y += this.speedY;
/*	if(this.y > window.innerHeight){
		delete game.shots[this];
		console.log(game.shots);	
	}
	
*/	
	var collidedObject = collisionDetection(this);
	if(collidedObject){
		console.log("Hit");	
		collidedObject.die();
		delete game.shots[this.id];
	}
	game.stage.drawImage(this.shot, this.x, this.y, this.w, this.h);
}


function randomRange(min, max){
	return(Math.random()*(max-min)+min);	
}

function collisionDetection(obj){
	for(var key in game.enemies){
		var target = game.enemies[key];
		obj.r = obj.x+obj.w;
		obj.b = obj.y+obj.h;
		var dx, dy, r1={}, r2={};
		r1.cx = obj.x + (r1.hw = (obj.w /2));
		r1.cy = obj.y + (r1.hh = (obj.h/2));
		r2.cx = target.x + (r2.hw = (target.w /2));
		r2.cy = target.y + (r2.hh = (target.h/2));
		dx = Math.abs(r1.cx-r2.cx) - (r1.hw + r2.hw);
		dy = Math.abs(r1.cy-r2.cy) - (r1.hh + r2.hh);
		if (dx < 0 && dy < 0) {
			return(target);
		}
	}
	return(false);
}

