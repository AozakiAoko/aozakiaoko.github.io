var QuartzRolled = 0;
var Quartz = 140;
var YenSpent = 0;
var Rolled = 0;

var Stat = [0, 0, 0, 0, 0, 0];

var cardCount = [
  $("#CardRepository #3CE > img"),
  $("#CardRepository #3Servant > img"),
  $("#CardRepository #4CE > img"),
  $("#CardRepository #4Servant > img"),
  $("#CardRepository #5CE > img"),
  $("#CardRepository #5Servant > img")
];

$(document).ready(function() {
  $("#YoloRoll").button();
  $("#TenRoll").button();
  $("#GetQuartz").button();
  $("#SSRrolled").button();
  $("#SRrolled").button();
});

$("#SSRrolled").click(function() {
  $("#Roll").hide();
  $("#SR").hide();
  $("#SSR").show();
});

$("#SRrolled").click(function() {
  $("#Roll").hide();
  $("#SSR").hide();
  $("#SR").show();
});

$("#YoloRoll").click(function() {
  $("#SSR").hide();
  $("#SR").hide();
  $("#Roll").show();
  if (Quartz >= 4) {
    Quartz -= 4;
    QuartzRolled += 4;
    $("#Quartz").empty().append(Quartz);
    $("#QuartzRolled").empty().append(QuartzRolled);
    if (Rolled >= 10)
      $("#Roll").empty();
    Rolled += 1;
    Roll(4);
    $("#SSRservant").empty().append(Stat[5]);
    $("#SSRce").empty().append(Stat[4]);
    $("#SRservant").empty().append(Stat[3]);
    $("#SRce").empty().append(Stat[2]);
  }
});

$("#TenRoll").click(function() {
  $("#SSR").hide();
  $("#SR").hide();
  $("#Roll").show();
  if (Quartz >= 40) {
    Quartz -= 40;
    QuartzRolled += 40;
    $("#Quartz").empty().append(Quartz);
    $("#QuartzRolled").empty().append(QuartzRolled);
    $("#Roll").empty();
    Rolled = 10;
    Roll(40);
    $("#SSRservant").empty().append(Stat[5]);
    $("#SSRce").empty().append(Stat[4]);
    $("#SRservant").empty().append(Stat[3]);
    $("#SRce").empty().append(Stat[2]);
  }
});

$("#GetQuartz").click(function() {
  YenSpent += 9800;
  Quartz += 140;
  $("#Quartz").empty().append(Quartz);
  $("#YenSpent").empty().append(YenSpent);
});

function Roll(value) {
  var IsTen = 0;
  var gotServant = 0;
  var got4star = 0;
  var cardType = new Array(10);
  for (var i = 0; i < value / 4; i++) {
    cardType[i] = getCardType();
    Stat[cardType[i]] += 1;
    if (cardType[i] > 1)
      got4star = 1;
    if (cardType[i] % 2 === 1)
      gotServant = 1;
  }
  if (value === 4) {
    var card = Math.floor(Math.random() * cardCount[cardType[0]].length);
    cardCount[cardType[0]].eq(card).clone().appendTo("#Roll");
    Yorokobe(cardType[0], cardCount[cardType[0]].eq(card).index());
    return;
  }
  for (var i = 0; i < 10; i++) {
    if (gotServant === 0) {
      if (cardType[i] === 0) {
        cardType[i] = 1;
        gotServant = 1;
      };
    } else
    if (got4star === 0)
      if (cardType[i] < 1) {
        cardType[i] = 2;
        got4star = 1;
        i = 10;
      }
  }
  for (var i = 0; i < 10; i++) {
    var card = Math.floor(Math.random() * cardCount[cardType[i]].length);
    Yorokobe(cardType[i], cardCount[cardType[i]].eq(card).index());
    cardCount[cardType[i]].eq(card).clone().appendTo("#Roll");
    if (cardType[i] > 3)
      cardCount[cardType[i]].eq(card).clone().appendTo("#SSR");
    if (cardType[i] > 1 && cardType[i] < 4)
      cardCount[cardType[i]].eq(card).clone().appendTo("#SR");
  }
}

function getCardType() {
  var value = Math.floor((Math.random() * 100));
  var odds = [40, 80, 92, 96, 99, 100];
  for (var i = 0; i < odds.length; i++)
    if (value < odds[i])
      return i;
}

function Yorokobe(cardType, cardID) {
  if ((cardType===0 && cardID >= 2 && cardID <= 4) || (cardType===2 && cardID===0)){
    var audio = document.getElementById('Yorokobe');
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0
    }
  }
}