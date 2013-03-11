$(document).ready(function(e) {
	$(".ball").on("click", function(e){
		var tal = randomRange(1, 2);
		console.log(tal);
		
		var direction = (tal > 1.5) ? -1 : 1;
		$(this).animate(
			{
				left: "+=" + 100*direction,
				top: "+=" + 100*direction,
				
			}, 
			{
				duration: 200,
				easing: "swing"
			}
		);
	});
});

function randomRange(min, max){
	return(Math.random()*(max-min)+min);	
}

