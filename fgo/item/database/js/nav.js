$( document ).ready(function() {
  $("#Content").hide();
  $(".svtSelection div").hide();
  $("#001").trigger('click');
});

$(".svtClassSelection img").click(function(){
  var id = $(this).attr("id");
  $(".svtSelection div").hide();
  $(".svtSelection ."+id).show();
});

$(".svtSelection div img").click(function(){
  $("#Content").hide();
  getSvt($(this).attr("id"));
});