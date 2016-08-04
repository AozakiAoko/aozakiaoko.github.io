var path = "http://aozakiaoko.github.io/fgo/item/gameplay_profiles/svt/";

function getSvt(ID)
{
	var src = path + ID + ".html";
	$("#Content .svtInfo").load(src, function(html){
		$("#Content .svtInfo").empty().append(html);
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

$("#Tabs div").click(function(){
	var id = $(this).attr("id");
	$("#Content div").hide();
	$("#Content ." + id).show();
});
