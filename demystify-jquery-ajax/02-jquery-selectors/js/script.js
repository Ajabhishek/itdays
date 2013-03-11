$(document).ready(function(e) {
	// all events at start/load goes into this
	// anonymous function

    $("#changeText").on("click", function(){
		var newText = $("#theNewText").val();
		$("#box").html(newText);
	});
	
	$("#box").on("click", function(){
		var w = $(this).width() + 50;
		var h = $(this).height() - 10;
		$(this).width(w).height(h);
	});
	
});

