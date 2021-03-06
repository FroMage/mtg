// cards from fallen empires http://mtgimage.com/zip/FEM.zip
// stats from http://www.crystalkeep.com/magic/products/fallenempires.php
// specs from http://archive.wizards.com/magic/generic/cardlists/Arabian_Nights_Checklist.txt
// - remove artist
// - s/^(.*?)  +(..)$/{name: "\1", stat: "\2"},/
// - turn lower-case
// - s/ \(v\. (\d)\)/\1/
// - replace áúâí with auai
// - fix a few "'"
var cards = [
{name: "armor thrull1", stat: "c1"},
{name: "armor thrull2", stat: "c1"},
{name: "armor thrull3", stat: "c1"},
{name: "armor thrull4", stat: "c1"},
{name: "basal thrull1", stat: "c1"},
{name: "basal thrull2", stat: "c1"},
{name: "basal thrull3", stat: "c1"},
{name: "basal thrull4", stat: "c1"},
{name: "breeding pit", stat: "u3"},
{name: "derelor", stat: "u1"},
{name: "ebon praetor", stat: "u1"},
{name: "hymn to tourach1", stat: "c1"},
{name: "hymn to tourach2", stat: "c1"},
{name: "hymn to tourach3", stat: "c1"},
{name: "hymn to tourach4", stat: "c1"},
{name: "initiates of the ebon hand1", stat: "c1"},
{name: "initiates of the ebon hand2", stat: "c1"},
{name: "initiates of the ebon hand3", stat: "c1"},
{name: "mindstab thrull1", stat: "c1"},
{name: "mindstab thrull2", stat: "c1"},
{name: "mindstab thrull3", stat: "c1"},
{name: "necrite1", stat: "c1"},
{name: "necrite2", stat: "c1"},
{name: "necrite3", stat: "c1"},
{name: "order of the ebon hand1", stat: "c1"},
{name: "order of the ebon hand2", stat: "c1"},
{name: "order of the ebon hand3", stat: "c1"},
{name: "soul exchange", stat: "u3"},
{name: "thrull champion", stat: "u1"},
{name: "thrull retainer", stat: "u3"},
{name: "thrull wizard", stat: "u3"},
{name: "tourach's chant", stat: "u3"},
{name: "tourach's gate", stat: "u1"},
{name: "deep spawn", stat: "u3"},
{name: "high tide1", stat: "c1"},
{name: "high tide2", stat: "c1"},
{name: "high tide3", stat: "c1"},
{name: "homarid1", stat: "c1"},
{name: "homarid2", stat: "c1"},
{name: "homarid3", stat: "c1"},
{name: "homarid4", stat: "c1"},
{name: "homarid shaman", stat: "u1"},
{name: "homarid spawning bed", stat: "u3"},
{name: "homarid warrior1", stat: "c1"},
{name: "homarid warrior2", stat: "c1"},
{name: "homarid warrior3", stat: "c1"},
{name: "merseine1", stat: "c1"},
{name: "merseine2", stat: "c1"},
{name: "merseine3", stat: "c1"},
{name: "merseine4", stat: "c1"},
{name: "river merfolk", stat: "u1"},
{name: "seasinger", stat: "u3"},
{name: "svyelunite priest", stat: "u3"},
{name: "tidal flats1", stat: "c1"},
{name: "tidal flats2", stat: "c1"},
{name: "tidal flats3", stat: "c1"},
{name: "tidal influence", stat: "u3"},
{name: "vodalian knights", stat: "u1"},
{name: "vodalian mage1", stat: "c1"},
{name: "vodalian mage2", stat: "c1"},
{name: "vodalian mage3", stat: "c1"},
{name: "vodalian soldiers1", stat: "c1"},
{name: "vodalian soldiers2", stat: "c1"},
{name: "vodalian soldiers3", stat: "c1"},
{name: "vodalian soldiers4", stat: "c1"},
{name: "vodalian war machine", stat: "u1"},
{name: "elven fortress1", stat: "c1"},
{name: "elven fortress2", stat: "c1"},
{name: "elven fortress3", stat: "c1"},
{name: "elven fortress4", stat: "c1"},
{name: "elvish farmer", stat: "u1"},
{name: "elvish hunter1", stat: "c1"},
{name: "elvish hunter2", stat: "c1"},
{name: "elvish hunter3", stat: "c1"},
{name: "elvish scout1", stat: "c1"},
{name: "elvish scout2", stat: "c1"},
{name: "elvish scout3", stat: "c1"},
{name: "feral thallid", stat: "u3"},
{name: "fungal bloom", stat: "u1"},
{name: "night soil1", stat: "c1"},
{name: "night soil2", stat: "c1"},
{name: "night soil3", stat: "c1"},
{name: "spore cloud1", stat: "c1"},
{name: "spore cloud2", stat: "c1"},
{name: "spore cloud3", stat: "c1"},
{name: "spore flower", stat: "u3"},
{name: "thallid1", stat: "c1"},
{name: "thallid2", stat: "c1"},
{name: "thallid3", stat: "c1"},
{name: "thallid4", stat: "c1"},
{name: "thallid devourer", stat: "u3"},
{name: "thelon's chant", stat: "u3"},
{name: "thelon's curse", stat: "u1"},
{name: "thelonite druid", stat: "u3"},
{name: "thelonite monk", stat: "u1"},
{name: "thorn thallid1", stat: "c1"},
{name: "thorn thallid2", stat: "c1"},
{name: "thorn thallid3", stat: "c1"},
{name: "thorn thallid4", stat: "c1"},
{name: "brassclaw orcs1", stat: "c1"},
{name: "brassclaw orcs2", stat: "c1"},
{name: "brassclaw orcs3", stat: "c1"},
{name: "brassclaw orcs4", stat: "c1"},
{name: "dwarven armorer", stat: "u1"},
{name: "dwarven catapult", stat: "u3"},
{name: "dwarven lieutenant", stat: "u3"},
{name: "dwarven soldier1", stat: "c1"},
{name: "dwarven soldier2", stat: "c1"},
{name: "dwarven soldier3", stat: "c1"},
{name: "goblin chirurgeon1", stat: "c1"},
{name: "goblin chirurgeon2", stat: "c1"},
{name: "goblin chirurgeon3", stat: "c1"},
{name: "goblin flotilla", stat: "u1"},
{name: "goblin grenade1", stat: "c1"},
{name: "goblin grenade2", stat: "c1"},
{name: "goblin grenade3", stat: "c1"},
{name: "goblin kites", stat: "u3"},
{name: "goblin war drums1", stat: "c1"},
{name: "goblin war drums2", stat: "c1"},
{name: "goblin war drums3", stat: "c1"},
{name: "goblin war drums4", stat: "c1"},
{name: "goblin warrens", stat: "u1"},
{name: "orcish captain", stat: "u3"},
{name: "orcish spy1", stat: "c1"},
{name: "orcish spy2", stat: "c1"},
{name: "orcish spy3", stat: "c1"},
{name: "orcish veteran1", stat: "c1"},
{name: "orcish veteran2", stat: "c1"},
{name: "orcish veteran3", stat: "c1"},
{name: "orcish veteran4", stat: "c1"},
{name: "orgg", stat: "u1"},
{name: "raiding party", stat: "u3"},
{name: "combat medic1", stat: "c1"},
{name: "combat medic2", stat: "c1"},
{name: "combat medic3", stat: "c1"},
{name: "combat medic4", stat: "c1"},
{name: "farrel's mantle", stat: "u3"},
{name: "farrel's zealot1", stat: "c1"},
{name: "farrel's zealot2", stat: "c1"},
{name: "farrel's zealot3", stat: "c1"},
{name: "farrelite priest", stat: "u3"},
{name: "hand of justice", stat: "u1"},
{name: "heroism", stat: "u3"},
{name: "icatian infantry1", stat: "c1"},
{name: "icatian infantry2", stat: "c1"},
{name: "icatian infantry3", stat: "c1"},
{name: "icatian infantry4", stat: "c1"},
{name: "icatian javelineers1", stat: "c1"},
{name: "icatian javelineers2", stat: "c1"},
{name: "icatian javelineers3", stat: "c1"},
{name: "icatian lieutenant", stat: "u1"},
{name: "icatian moneychanger1", stat: "c1"},
{name: "icatian moneychanger2", stat: "c1"},
{name: "icatian moneychanger3", stat: "c1"},
{name: "icatian phalanx", stat: "u3"},
{name: "icatian priest", stat: "u3"},
{name: "icatian scout1", stat: "c1"},
{name: "icatian scout2", stat: "c1"},
{name: "icatian scout3", stat: "c1"},
{name: "icatian scout4", stat: "c1"},
{name: "icatian skirmishers", stat: "u1"},
{name: "icatian town", stat: "u1"},
{name: "order of leitbur1", stat: "c1"},
{name: "order of leitbur2", stat: "c1"},
{name: "order of leitbur3", stat: "c1"},
{name: "aeolipile", stat: "u1"},
{name: "balm of restoration", stat: "u1"},
{name: "conch horn", stat: "u1"},
{name: "delif's cone", stat: "c1"},
{name: "delif's cube", stat: "u1"},
{name: "draconian cylix", stat: "u1"},
{name: "elven lyre", stat: "u1"},
{name: "implements of sacrifice", stat: "u1"},
{name: "ring of renewal", stat: "u1"},
{name: "spirit shield", stat: "u1"},
{name: "zelyon sword", stat: "u1"},
{name: "bottomless vault", stat: "u1"},
{name: "dwarven hold", stat: "u1"},
{name: "dwarven ruins", stat: "u2"},
{name: "ebon stronghold", stat: "u2"},
{name: "havenwood battleground", stat: "u2"},
{name: "hollow trees", stat: "u1"},
{name: "icatian store", stat: "u1"},
{name: "rainbow vale", stat: "u1"},
{name: "ruins of trokair", stat: "u2"},
{name: "sand silos", stat: "u1"},
{name: "svyelunite temple", stat: "u2"},
];

var booster = 8;
var boosterRare = 0;
var boosterUncommon = 2;
var boosterCommon = 6;

var setFolder = "FEM";
