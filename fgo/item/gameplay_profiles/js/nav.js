var path = "http://aozakiaoko.github.io/fgo/item/gameplay_profiles/svt/";

function getSvt(ID)
{
	var src = path + ID + ".html";
	$(".svt").load(src, function(html){
		$(".svt").empty().append(html);
	});
}

$( document ).ready(function() {
	$(".svtSelection div").hide();
	getSvt($(this).attr('01'));
});

$(".svtClassSelection img").click(function(){
	var id = $(this).attr("id");
	$(".svtSelection div").hide();
	$(".svtSelection ."+id).show();
});

$(".svtSelection div img").click(function(){
	getSvt($(this).attr("id"))
});