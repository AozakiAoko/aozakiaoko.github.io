$(document).ready(function(){
	$(".tierlist tr td div").on('click', function(){
		$(".SvtImg").empty().append( '<div class="' + $(this).attr("class") +'"></div>' );
		$(".Explanation").empty().append($(".tips ." + $(this).attr("class")).html());
	});
});
