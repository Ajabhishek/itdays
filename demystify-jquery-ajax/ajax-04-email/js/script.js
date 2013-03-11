$(document).ready(function(e) {
	$("#form_mail").on("submit", function(e){
		e.preventDefault();
		$("#button_send").text("Sending email").addClass("btn-success");
		var data = $(this).serialize();
		$.post("sendmail.php", data, function(response){
			console.log(response);
			$("h1").after("<div class='alert'>" + response.msg + "</div>");
			$("#button_send").text("Send email").removeClass("btn-success");
		}, "json");
	});
});