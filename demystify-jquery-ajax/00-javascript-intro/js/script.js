function pageLoaded(){
	document.getElementById("box").addEventListener("click", changeSize);
	document.getElementById("changeText").addEventListener("click", changeTextInDiv);	
}

function changeTextInDiv(e){
	var newText = document.getElementById("theNewText").value;
	document.getElementById("box").innerHTML = newText;	
}

function changeSize(e){
	var clickedElement = e.target;
	clickedElement.style.width = clickedElement.offsetWidth + 50 + "px";
	clickedElement.style.height = clickedElement.offsetHeight - 10 + "px";	
}