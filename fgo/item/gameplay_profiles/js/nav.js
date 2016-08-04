var path = "http://aozakiaoko.github.io/fgo/item/gameplay_profiles/svt/";

function getSvt(ID)
{
	var src = path + ID + ".html";
	$(".svt").load(src, function(html){
		$(".svtInfo").empty().append($(".svtInfo"), html);
		$(".svtGameplay").empty().append($(".svtGameplay"), html);
		$(".svtTips").empty().append($(".svtTips"), html);
	});
}

$( document ).ready(function() {
	$(".svtSelection div").hide();
	$("#01").trigger('click');
});

$(".svtClassSelection img").click(function(){
	var id = $(this).attr("id");
	$(".svtSelection div").hide();
	$(".svtSelection ."+id).show();
});

$(".svtSelection div img").click(function(){
	getSvt($(this).attr("id"))
});
