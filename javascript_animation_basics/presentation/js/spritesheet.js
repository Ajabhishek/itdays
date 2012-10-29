var frameObj,
	spritesheet,
	frameNum = 0, 
	frameTop,
	frameLeft,
	frameRow = 0;
	
function initSpriteSheet(){
	frameObj = document.getElementById("smurf_frame");
	frameObj.frameWidth = 128;
	frameObj.frameHeight = 128;
	spritesheet = document.getElementById("smurf_spritesheet");
	spritesheet.addEventListener("click", moveFrame);
	frameObj.addEventListener("click", moveFrame);
	frameTop = spritesheet.offsetTop;
	frameLeft = spritesheet.offsetLeft;
}

function moveFrame(e){
	frameObj.style.opacity = 0.4;
	frameObj.style.top = frameTop + frameRow*frameObj.frameHeight + "px";
	frameObj.style.left = frameLeft + frameNum*frameObj.frameWidth + "px";
	frameNum++;
	if(frameNum == 4){
		frameNum = 0;
		frameRow++;	
	}
	if(frameRow == 4){
		frameNum = 0;
		frameRow = 0;	
	}
}

