$(document).ready(function(e) {
    $("#form_search").on("submit", function(e){
		e.preventDefault();
		$("#msg").hide();
		$("#button_search").text("Searching...").addClass("btn-primary");
		var data = $(this).serialize();
		$.post("receiveform.php", data, function(response){
			$("#button_search").text("Search").removeClass("btn-primary");
			$("#msg").html(response).fadeIn(200);
		});
	});
});