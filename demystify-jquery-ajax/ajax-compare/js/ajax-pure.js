(function(){
	document.getElementById("ajaxcall").addEventListener("click", callAjax);
})();

function callAjax(e){
	var startTime = new Date();
	var httpReq = new XMLHttpRequest();
	httpReq.open("GET", "ajax.php", true);
	httpReq.onreadystatechange = function(){
		console.log("Pure: " + httpReq.readyState + ": " + (new Date() - startTime));
	};
	httpReq.send(null);
}