$(document).ready(function() {
	$("#jq-container").on("click", function(){
		$(this).css("background-color", "#222")
				.html("Hey you!")
				.css("color", "#fff");	
	});
});

(function(){
	document.getElementById("js-container").addEventListener("click", function(e){	
		this.style.backgroundColor = "#e2e2e2";
		this.innerHTML = "That's me";
		this.style.color = "#000";
	});
})();
