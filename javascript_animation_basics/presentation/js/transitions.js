// JavaScript Document

(function(){
	document.getElementById("transitionobj").addEventListener("mouseover", transitionObj);
})();

function transitionObj(e){
	var obj = e.target;
	obj.style.top = randomNumber(0, window.innerHeight-130) + "px";
	obj.style.left = randomNumber(0, window.innerWidth-130) + "px";
}

function randomNumber(min, max){
	return(Math.round(Math.random()*(max-min)+min));	
}