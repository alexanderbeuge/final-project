$(document).ready(function() {
	$(".illo").hover(function() {
		var triangle = $(this).find(".triangle");
		triangle.fadeToggle(100);
	})	
})