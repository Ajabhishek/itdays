jQuery(document).ready(function($) {
    $("#ajaxcall").click(function(e) {
		var startTime = new Date();
		$.ajax({
			url: "ajax.php", 
			data: null, 
			type: "GET",
			success: function(){
				console.log("jQuery done in: " + (new Date() - startTime));
			}
		});
    });
});