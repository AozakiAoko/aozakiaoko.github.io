var path = "http://aozakiaoko.github.io/fgo/item/gameplay_profiles/svt/";

function getSvt(ID)
{
	var src = path + ID + ".html";
	$(".svt").load(src, function(html){
		$(".svt").empty().append(html);
	});
}

$( document ).ready(function() {
	getSvt("01");
    console.log( "ready!" );
});