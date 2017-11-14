document.getElementById('youridhere').scrollIntoView();

$(".tierlist tr td div").on('click', function(){
	$(".SvtImg").empty().append( $(this).html() );
	$(".Explanation").empty().append($(".tips #" + $(this).attr('id')).html();
});