var c;
var x = 0;
var y = 0;
var width = 20;
var height = 200;
var mode = "draw",
	canvasMsg;

(function(){
	var canvas = document.getElementById("canvasAnimation");
	canvas.addEventListener("click", startCanvasAnimation);
	c = canvas.getContext("2d");
	canvasMsg = document.getElementById("canvasMsg");
	document.getElementById("animateCanvas").addEventListener("click", animateCanvasMode);
	document.getElementById("resetCanvas").addEventListener("click", resetCanvas);
	document.getElementById("drawCanvas").addEventListener("click", drawCanvasMode);
	document.getElementById("rewindCanvas").addEventListener("click", rewindCanvas);
})();

function animateCanvasMode(){
	mode = "animate";	
	canvasMsg.innerHTML = "An animation!!";
}

function drawCanvasMode(){
	mode = "draw";	
	canvasMsg.innerHTML = "Now the canvas is drawing";
}

function resetCanvas(){
	c.clearRect(0, 0, 400, 200);	
}

function rewindCanvas(){
	x = 0;	
}


function draw(){
	if(mode == "animate"){
		c.clearRect(0, 0, 400, 200);	
	}
	c.fillStyle = 'purple';
	c.fillRect(x, y, width, height);
	x = x + 1;
}

function startCanvasAnimation(){
	setInterval(draw, 30);
}