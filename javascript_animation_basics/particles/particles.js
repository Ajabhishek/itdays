var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;
var c = canvas.getContext("2d");


var blobArray = [];

function draw(){
	c.clearRect(0, 0, 500, 500);

	var blob = { 	x: 240,
					y: 240,
					width: 15,
					height: 15,
					xSpeed: randomRange(-10, 10),
					ySpeed: randomRange(-10, 10)
	};
	
	blobArray.push(blob);
	
	for(var i=0; i<blobArray.length; i++){
		blob = blobArray[i];
		
		c.fillStyle = "purple";
		c.fillRect(blob.x, blob.y, blob.width, blob.height);
		blob.x = blob.x + blob.xSpeed;
		blob.y = blob.y + blob.ySpeed;
		blob.width = blob.width *0.98;
		blob.height = blob.height *0.98;
	}
}

setInterval(draw, 30);

function randomRange(min, max){
	return Math.random()*(max-min)+min;	
}