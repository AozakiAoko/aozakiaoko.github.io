var svttest = 'https://aozakiaoko.github.io/fgo/item/database/data/svt/0.json';

function printServant(svtData){
  $("#svt").empty().append(svtData.Name);
};


$.getJSON(svttest, function(svtData) {
    printServant(svtData);
});
