$(document).ready(function(){
	$(".tierlist tr td div").on('click', function(){
		$(".SvtImg").empty().append( '<div class="' + $(this).attr("class") +'"></div>' );
		$(".Explanation").empty().append($(".tips ." + $(this).attr("class").split(' ')[0]).html());
	});

	$(".categories_all td").on('click', function(){
		$(".parameters_explanation td " + $(this).attr("class").split(' ')[0]).show();
	});	
});
