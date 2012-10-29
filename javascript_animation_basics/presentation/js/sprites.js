var imageWidth=512, 
	imageHeight=512, 
	xpos=0, 
	ypos=0, 
	frame=0, 
	numFrames = 16, 
	frameSize = 128,
	smurf,
	speed = 5;
	   
(function(){
	smurf = document.getElementById("smurf");
	smurf.addEventListener("click", startSmurf);
	//loop!
})();
		
		
function startSmurf(){
	setInterval(animate, 1000 / 30);
}

function animate() {
	//multiplying by -1 because we want to move the image to the left and up to reveal the area we want to see.
	smurf.style.backgroundPosition = (-xpos)+"px "+(-ypos)+"px";

	//each time around we add the frame size to our xpos, moving along the source image.
	xpos += frameSize;

	//increase the index so we know which frame of our animation we are currently on.
	frame += 1;
	
	//if our index is higher than our total number of frames, we're at the end and better start over.
	if (frame >= numFrames) {
		xpos =0;
		ypos =0;
		frame=0;	
	//if we've gotten to the limit of our source image's width, we need to move down one row of frames.							
	} else if (xpos + frameSize > imageWidth){
		xpos =0;
		ypos += frameSize;
	}
	
	if(smurf.offsetLeft > window.innerWidth-200){
		smurf.style.left = frameSize *-1 + "px";		
	}
	else{
		smurf.style.left = smurf.offsetLeft + speed + "px";
	}
}
