function extractRepeats(stat){
  if(stat.length > 1){
    return parseInt(stat.substring(1));
  }
  return 1;
}

var rares = [], uncommons = [], commons = [], lands = [];
var rv = document.location.search.substring(1) == "rv";
var cardsPerPage = 9;
var addedCards = 0;

if(typeof cards !== 'undefined'){
 // collect cards by type
 for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  var repeats = extractRepeats(card.stat);
  var destination;
  if(card.stat.indexOf("r") == 0){
    destination = rares;
  }else if(card.stat.indexOf("u") == 0){
    destination = uncommons;
  }else if(/^(forest|island|mountain|plains|swamp)\d$/.test(card.name)){
    destination = lands;
  }else{
    destination = commons;
  }
  for (var r = 0; r < repeats; r++) {
    destination.push(card);
  }
 }
}

function addBack(){
 var img = jQuery("<img/>");
 img.attr("src", "cardback.jpg");
 img.toggleClass("black");
 jQuery("body").append(img);
}

function addWhite(){
 var img = jQuery("<img/>");
 img.attr("src", "white.jpg");
 jQuery("body").append(img);
}

function addCard(card){
 var img = jQuery("<img/>");
 var isBlack = /^(ARN|ATQ|LEG|DRK|FEM)$/.test(setFolder);
 img.attr("src", setFolder + "/" + card.name + ".jpg");
 if(isBlack)
  img.toggleClass("black");
 img.attr("title", card.name);
 jQuery("body").append(img);
 
 if(rv && ++addedCards == cardsPerPage){
   addBackPage();
 }
}

function addBackPage(){
 // end the page
 for(var c = addedCards;c < cardsPerPage; c++){
  addWhite();
 }
 // now the backs, but the last row has to be right-aligned
 var entireLines = Math.floor(addedCards / 3);
 for(var c = 0;c < (entireLines * 3); c++){
  addBack();
 }
 var lastLine = addedCards % 3;
 if(lastLine > 0){
	for(var c = 0;c < (3-lastLine); c++){
		addWhite();
	}
	for(var c = 0;c < lastLine; c++){
		addBack();
	}
 }
 addedCards = 0;
}

function makeSet(rare, uncommon, common){
 // add rares
 for(var c = 0;c < rare; c++){
  addCard(rares[Math.floor(Math.random() * rares.length)]);
 }
 // add uncommons
 for(var c = 0;c < uncommon; c++){
  // 2ED puts lands in uncommon/common slots
  if(typeof landUncommon !== 'undefined' 
     && Math.random() < landUncommon)
    addCard(lands[Math.floor(Math.random() * lands.length)]);
  else
    addCard(uncommons[Math.floor(Math.random() * uncommons.length)]);
 }
 // add commons
 for(var c = 0;c < common; c++){
  // 2ED puts lands in uncommon/common slots
  if(typeof landCommon !== 'undefined' 
     && Math.random() < landCommon)
    addCard(lands[Math.floor(Math.random() * lands.length)]);
  else
    addCard(commons[Math.floor(Math.random() * commons.length)]);
 // see if we need to finish a page
 if(rv){
  addBackPage();
 }
}
