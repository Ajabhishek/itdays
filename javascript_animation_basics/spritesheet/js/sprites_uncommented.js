var imageWidth=512, 
	imageHeight=512,
	xpos=0, 
	ypos=0, 
	frame=0, 
	numFrames = 16, 
	frameSize = 128, 
	smurf, 
	speed = 5; 
   
function pageIsReady(){
	smurf = document.getElementById("smurf");
	setInterval(animate, 1000 / 30); 
}	
		
function animate() {
	smurf.style.backgroundPosition = (-xpos)+"px "+(-ypos)+"px";
	xpos += frameSize;
	frame += 1;
	
	if (frame >= numFrames) {
		xpos =0;
		ypos =0;
		frame=0;	
	} else if (xpos + frameSize > imageWidth){
		xpos =0;
		ypos += frameSize;
	}
	
	if(smurf.offsetLeft > window.innerWidth){
		smurf.style.left = frameSize *-1 + "px";		
	}
	else{
		smurf.style.left = smurf.offsetLeft + speed + "px";
	}
}