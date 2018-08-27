function printServant(svtData)
{
  //load ascension image
  console.log(svtData.imgdata.ascension[0])
  $(".value_ascension").attr("src", svtData.imgdata.ascension[0]);
  //load class
  console.log(svtData.Class)
  $(".val_class").empty().append(svtData.Class);
  //load name
  console.log(svtData.Name)
  $(".val_name").empty().append(svtData.Name);
  //load gender
  console.log(svtData.Name)
  $(".val_gender").empty().append(svtData.Gender);  
  //load cost
  console.log(svtData.Cost)
  $(".val_cost").empty().append(svtData.Cost);  
  //load ID
  console.log(svtData.id)
  $(".val_index").empty().append(svtData.id);
  //load Illustrator
  console.log(svtData.Artwork)
  $(".val_artwork").empty().append(svtData.Artwork);  
  //load CV
  console.log(svtData.CV)
  $(".val_cv").empty().append(svtData.CV);
  //load StarRate, Np gain, starweight, deathrate
  console.log(svtData.StarRate)
  console.log(svtData.NPgain.attack)
  console.log(svtData.NPgain.defence)
  console.log(svtData.StarWeight)
  console.log(svtData.DeathRate)
  $(".val_StarRate").empty().append(svtData.StarRate); 
  $(".val_NPRate .attack").empty().append(svtData.NPgain.attack); 
  $(".val_NPRate .defence").empty().append(svtData.NPgain.defence); 
  $(".val_CritWeight").empty().append(svtData.StarWeight);
  $(".val_DeathRate").empty().append(svtData.DeathRate);
  //load card layout and card data
  console.log(svtData.CardLayout)
  $(".val_CardLayout").empty();
  for(i = 0; i < 5; i++){
    if(svtData.CardLayout[i]=='Q')
      $(".val_CardLayout").append($("#quickcard").html());  
    if(svtData.CardLayout[i]=='A')
      $(".val_CardLayout").append($("#artscard").html());  
    if(svtData.CardLayout[i]=='B')
      $(".val_CardLayout").append($("#busterkcard").html());      
  }
  $(".val_hitsq").empty().append(svtData.Deck.Quick) + " Hits";
  $(".val_hitsa").empty().append(svtData.Deck.Arts) + " Hits";
  $(".val_hitsb").empty().append(svtData.Deck.Buster) + " Hits";
  $(".val_hitse").empty().append(svtData.Deck.Extra) + " Hits";
  //load traits
   $(".val_traits").empty().append(svtData.Traits);
  //load skills
  $(".skill-separator").empty();
  console.log(svtData.Skills.length);
  for(i = 0; i < svtData.Skills.length; i++){
    //skillheader
    $("#skillheader .skill_icon img").attr("src", svtData.imgdata.skills[i]);
    console.log(svtData.Skills[i].Name);
    $("#skillheader .skill-name").empty()
      .append(svtData.Skills[i].Name);
    $("#skillheader .skill-cd").empty()
      .append(svtData.Skills[i].Cooldown) + " turns";
    $("#skillheader .skill-target").empty()
      .append(svtData.Skills[i].Target);
    //plug in
    $(".skill-separator").append($("#skillheader").html());    
    //skillrows
    for(j = 0; j < svtData.Skills[i].SkillEffects.length; j++)
    {
        $("#skillrow .label").empty().append(svtData.Skills[i].SkillEffects[j][0]);
        for(k = 0; k < 10; k++){
          $("#skillrow .skill-value td:nth-child(" + (2+k) + ")")
            .empty().append(svtData.Skills[i].SkillEffects[j][1][k]); 
        }
        //plug in
        $(".skill-separator").append($("#skillrow").html());          
    }  
  }
  //passive skills
  $(".passive-separator").empty();
  console.log(svtData.PassiveSkills.length);
  //plug in 
  for(i = 0; i < svtData.PassiveSkills.length; i++)
  {
    //skillheader
    $("#passives .skill_icon img").attr("src", svtData.imgdata.passiveSkills[i]);
    console.log(svtData.PassiveSkills[i].Name);
    $("#passives .skill-name").empty()
      .append(svtData.PassiveSkills[i].Name);
    $("#passives .skill-rank").empty()
      .append(svtData.PassiveSkills[i].Rank);    
    //skillvalues
    $(".passive-separator").append($("#passives").html()); 
    for(j = 0; j < svtData.PassiveSkills[i].SkillEffects.length; j++)
    {
      $("#passives-values .label").empty().append(svtData.PassiveSkills[i].SkillEffects[j][0]);
      $("#passives-values .value").empty().append(svtData.PassiveSkills[i].SkillEffects[j][1]);
      //plug in
      $(".passive-separator").append($("#passives-values").html());     
    } 
  }
  //NP
  $(".np-separator").empty();
  console.log(svtData.NoblePhantasm.length);
  for(i = 0; i < svtData.NoblePhantasm.length; i++){
    //noheader
    console.log(svtData.NoblePhantasm[i].Name);
    $("#npheader .NPname").empty()
      .append(svtData.NoblePhantasm[i].Name);
    $("#npheader .NPname").attr("class", ".NPname " + svtData.NoblePhantasm[i].CardType);    
    $("#npheader .NPrank").empty()
      .append(svtData.NoblePhantasm[i].Rank);    
    //plug in
    $(".np-separator").append($("#npheader").html());    
    //npvalues
    for(j = 0; j < svtData.NoblePhantasm[i].Effects.length; j++)
    {
        $("#npvalues .label").empty().append(svtData.NoblePhantasm[i].Effects[j][0]);
        $("#npvalues .scaling").empty().append(svtData.NoblePhantasm[i].Effects[j][2]);
        for(k = 0; k < 5; k++){
          $("#npvalues .np-value td:nth-child(" + (2+k) + ")")
            .empty().append(svtData.NoblePhantasm[i].Effects[j][1][k]); 
        }
        //plug in
        $(".np-separator").append($("#npvalues").html());          
    }  
  }  
};

'use strict';

var svtpath = 'https://aozakiaoko.github.io/fgo/item/database/data/svt/';

$.getJSON(svttest, function(svtData) {
    svtpath
});

var path = "http://aozakiaoko.github.io/fgo/item/gameplay_profiles/svt/";

function getSvt(ID)
{
  var src = svtpath + ID + ".html";
  $.getJSON(src, function(svtData) {
      printServant(svtData)
  });
}

$( document ).ready(function() {
  $(".svtSelection div").hide();
  $("#001").trigger('click');
});

$(".svtClassSelection img").click(function(){
  var id = $(this).attr("id");
  $(".svtSelection div").hide();
  $(".svtSelection ."+id).show();
});

$(".svtSelection div img").click(function(){
  getSvt($(this).attr("id"))
});