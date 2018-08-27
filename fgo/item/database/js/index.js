function printServant(svtData){
  $("#svt").empty().append(svtData.Name);
};

var testsvtdata = require('./data/0.json'); //(with path)
printServant(testsvtdata);