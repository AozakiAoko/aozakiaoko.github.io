var path = "http://aozakiaoko.github.io/fgo/item/gameplay_profiles/svt/";

function getSvt(ID)
{
	var src = path + ID + ".html";
	$(".svt").load(src, function(html){
		$(".svt").empty().append(html);
	});
}

$( document ).ready(function() {
	//getSvt("01");
	$(".svtSelection div").hide();
    console.log( "ready!" );
});

$(".svtClassSelection img").click(function(){
	var id = $(this).attr("id");
	$(".svtSelection div").hide();
	$(".svtSelection ."+id).show();
});

$(".svtSelection div img").click(function(){
	getSvt($(this).attr("id"))
});