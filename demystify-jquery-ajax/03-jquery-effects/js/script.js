$(document).ready(function(e) {
	$("#logo").on("click", function(e){
		$("#text").hide();
	});
	
/*	$("#readmore").on("click", function(e){
		// to stop th elink from executing
		e.preventDefault();
		// store a reference to the link object
		var $that = $(this);
		$("#extra").toggle(
			function(){
				// change the text of the link ($that)
				$($that).text(
					// check if the extra text is visible
					// #extra = this
					$(this).is(":visible") ? "Read less" : "Read more"
					// so if #extra is visible - show the text "Read less" in the link ($that)
					// else show the text "Read more" in the link 
				)	
			}
		);
	});
*/
	$("#readmore").on("click", function(e){
		e.preventDefault();
		// slide the text down, and fade it to 0.4 in opacity in 200ms
		$("#extra").slideDown().fadeTo(200, 0.4);
	});
});