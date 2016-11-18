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
var uint32Max = Math.pow(2, 32);

if(typeof cards !== 'undefined'){
 // collect cards by type
 for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  // save its number
  card.index = i;
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
 var div = jQuery("<span class='image-with-rarity'/>");
 var img = jQuery("<img/>");
 var isBlack = /^(ARN|ATQ|LEG|DRK|FEM)$/.test(setFolder);
 img.attr("src", setFolder + "/" + card.name + ".jpg");
 if(isBlack)
  img.toggleClass("black");
 img.attr("title", card.name);
 div.append(img);
 
 var rarity = jQuery("<span/>");
 rarity.addClass("rarity");
 rarity.addClass(card.stat.substring(0,1));
 rarity.text((card.index+1)+"/"+cards.length+" "+card.stat);
 div.append(rarity);

 if(typeof(setSymbol) !== 'undefined'){
	 var symbol = jQuery("<span/>");
	 symbol.addClass("symbol");
	 symbol.addClass(card.stat.substring(0,1));
	 symbol.text(setSymbol);
	 div.append(symbol);
 }

 jQuery("body").append(div);
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
 var randomArray = new Uint32Array(rare + uncommon + common);
 window.crypto.getRandomValues(randomArray);
 var r = 0;
 
 // add rares
 for(var c = 0;c < rare; c++){
  addCard(rares[randomArray[r++] % rares.length]);
 }
 // add uncommons
 for(var c = 0;c < uncommon; c++){
  var x = randomArray[r++];
  // 2ED puts lands in uncommon/common slots
  if(typeof landUncommon !== 'undefined' 
     && (x / uint32Max) < landUncommon){
    addCard(lands[x % lands.length]);
  }else{
    addCard(uncommons[x % uncommons.length]);
  }
 }
 // add commons
 for(var c = 0;c < common; c++){
  var x = randomArray[r++];
  // 2ED puts lands in uncommon/common slots
  if(typeof landCommon !== 'undefined' 
     && (x / uint32Max) < landCommon){
    addCard(lands[x % lands.length]);
  }else{
    addCard(commons[x % commons.length]);
  }
 }
 // see if we need to finish a page
 if(rv){
  addBackPage();
 }
}
