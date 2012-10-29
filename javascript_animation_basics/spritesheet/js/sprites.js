var imageWidth=512, // sprite sheet dimensions
	imageHeight=512, // sprite sheet dimensions
	xpos=0, // current position (x)
	ypos=0, // current position (y)
	frame=0, // current frame (1-16)
	numFrames = 16, // number of frames
	frameSize = 128, // frame dimensions (128 x 128 pixels)
	smurf, // the smurf div
	speed = 5; // the number of pixels the smurf moves each frame
   
function pageIsReady(){
	smurf = document.getElementById("smurf"); // get the smurf
	// start animation
	setInterval(animate, 1000 / 30); 
}	
		
function animate() {
	//multiplying by -1 because we want to move the image to the left and up to reveal the area we want to see.
	smurf.style.backgroundPosition = (-xpos)+"px "+(-ypos)+"px";

	//each time around we add the frame size to our xpos, moving along the sprite sheet.
	xpos += frameSize;

	//increase the current frame so we know which frame of our animation we are currently on.
	frame += 1;
	
	//if our frame is higher than our total number of frames, we're at the end and better start over.
	if (frame >= numFrames) {
		xpos =0;
		ypos =0;
		frame=0;	
	//if we've gotten to the limit of our sprite sheet's width, we need to move down one row of frames.							
	} else if (xpos + frameSize > imageWidth){
		xpos =0;
		ypos += frameSize;
	}
	
	// if the smurf is heading for the right border of the screen, put him just outside the left side.
	if(smurf.offsetLeft > window.innerWidth){
		smurf.style.left = frameSize *-1 + "px";		
	}
	else{ // otherwise - move the smurf
		smurf.style.left = smurf.offsetLeft + speed + "px";
	}
}
