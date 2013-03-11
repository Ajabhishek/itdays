$(document).ready(function(e) {
	$("#background")
		.on("click", function(e){
			e.preventDefault();
			$("p").css("background-color", "#000").css("color", "#FFF");
		});
	
	$("img")
		.on("click", function(){
			$(this).next().toggle();
		})
		.hover(
			function(){
				$(this).fadeTo(200, 1);
			},
			function(){
				$(this).fadeTo(200, 0.5);
			}
		);
	
	$("#moveimages")
		.on("click", function(e){
			e.preventDefault();
			$("#images").html($("img"));
		});
	
	$("#border")
		.on("mouseenter", function(){
			$("li a").css("border", "1px dotted red");
		})
		.on("mouseleave", function(){
			$("li a").css("border", "");
		});
	
	$("#changelinkcolors")
		.on("click", function(e){
			e.preventDefault();
			$(".readmore").css("background-color", "#000");
		});

});

