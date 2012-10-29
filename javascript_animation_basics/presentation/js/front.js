// JavaScript Document

var browserWidth,
	browserHeight,
	objects = [],
	maxObjects = 20;

(function(){
	browserWidth = window.innerWidth-200;
	browserHeight = window.innerHeight;
	var i = 0;
	for(i=0;i<maxObjects;i++){
		var animationObj = createAnimationObj();
		objects.push(animationObj);
		animationObj.create();
	}
	setInterval(animate, 30);
})();

function animate(){
	var i,
		objectsLength = objects.length;
	for(i=0;i<objectsLength;i++){
		var animationObj = objects[i];
		var obj = animationObj.obj;
		
		if(obj.offsetTop < animationObj.end){
			obj.style.opacity = 0;	
		}
		if(obj.offsetTop > 0){
			obj.style.top = obj.offsetTop - animationObj.speed + "px";	
		}
		else{
			setAnimationObjProps(animationObj);
			animationObj.updateProps();
		}
	}
}

function createAnimationObj(){
	var animationObj = {};
	animationObj = setAnimationObjProps(animationObj);
	animationObj.create = function(){
		this.obj = document.createElement("div");
		this.obj.style.width = animationObj.diameter + "px";
		this.obj.style.height = animationObj.diameter + "px";
		this.obj.style.borderRadius = animationObj.diameter/2 + "px";
		this.obj.style.top = animationObj.y + "px";
		this.obj.style.left = animationObj.x + "px";
		this.obj.style.borderColor = animationObj.borderColor;	
		this.obj.style.backgroundColor = animationObj.backgroundColor;	
		this.obj.className = "animationObj";
		document.getElementById("front-animation").appendChild(this.obj);
		this.obj.style.opacity = 1;	
	};
	animationObj.updateProps = function(){
		this.obj.style.width = animationObj.diameter + "px";
		this.obj.style.height = animationObj.diameter + "px";
		this.obj.style.borderRadius = animationObj.diameter/2 + "px";
		this.obj.style.top = animationObj.y + "px";
		this.obj.style.left = animationObj.x + "px";
		this.obj.style.opacity = 1;
		this.obj.style.borderColor = animationObj.borderColor;	
		this.obj.style.backgroundColor = animationObj.backgroundColor;	
	};
	return(animationObj);
}

function setAnimationObjProps(animationObj){
	animationObj.speed = randomNumber(1, 4);
	animationObj.end = randomNumber(10, 700);
	animationObj.diameter = randomNumber(20, 100);
	animationObj.backgroundColor = randomColor(); 
	animationObj.borderColor = randomColor(); 
	animationObj.x = randomNumber(0, browserWidth);
	animationObj.y = browserHeight - 200;
	return(animationObj);
}

function randomColor(){
	return("rgb("+randomNumber(100, 250)+", " + randomNumber(100, 250) + ", " + randomNumber(100, 250)+")");
}

function randomNumber(min, max){
	return(Math.round(Math.random()*(max-min)+min));	
}