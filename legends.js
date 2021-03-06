// cards from legends http://mtgimage.com/zip/LEG.zip
// stats from http://www.crystalkeep.com/magic/products/legends.php
// specs from http://archive.wizards.com/magic/generic/cardlists/Arabian_Nights_Checklist.txt
// - remove artist
// - s/^(.*?)  +(..)$/{name: "\1", stat: "\2"},/
// - turn lower-case
// - replace " (a)" with "1"
// - replace " (b)" with "2"
// - replace áúâí with auai
// - fix a few "'"
var cards = [
{name: "abomination", stat: "u1"},
{name: "the abyss", stat: "r1"},
{name: "all hallow's eve", stat: "r1"},
{name: "blight", stat: "u1"},
{name: "carrion ants", stat: "r1"},
{name: "chains of mephistopheles", stat: "r1"},
{name: "cosmic horror", stat: "r1"},
{name: "cyclopean mummy", stat: "c2"},
{name: "darkness", stat: "c1"},
{name: "demonic torment", stat: "u1"},
{name: "evil eye of orms-by-gore", stat: "u1"},
{name: "fallen angel", stat: "u1"},
{name: "ghosts of the damned", stat: "c2"},
{name: "giant slug", stat: "c2"},
{name: "glyph of doom", stat: "c2"},
{name: "greed", stat: "r1"},
{name: "headless horseman", stat: "c1"},
{name: "hell swarm", stat: "c1"},
{name: "hell's caretaker", stat: "r1"},
{name: "hellfire", stat: "r1"},
{name: "horror of horrors", stat: "u1"},
{name: "imprison", stat: "r1"},
{name: "infernal medusa", stat: "u1"},
{name: "jovial evil", stat: "r1"},
{name: "lesser werewolf", stat: "u1"},
{name: "lost soul", stat: "c2"},
{name: "mold demon", stat: "r1"},
{name: "nether void", stat: "r1"},
{name: "pit scorpion", stat: "c2"},
{name: "quagmire", stat: "u1"},
{name: "shimian night stalker", stat: "u1"},
{name: "spirit shackle", stat: "c1"},
{name: "syphon soul", stat: "c2"},
{name: "takklemaggot", stat: "u1"},
{name: "touch of darkness", stat: "u1"},
{name: "transmutation", stat: "c1"},
{name: "underworld dreams", stat: "u1"},
{name: "vampire bats", stat: "c2"},
{name: "walking dead", stat: "c1"},
{name: "wall of putrid flesh", stat: "u1"},
{name: "wall of shadows", stat: "c2"},
{name: "wall of tombstones", stat: "u1"},
{name: "the wretched", stat: "r1"},
{name: "acid rain", stat: "r1"},
{name: "anti-magic aura", stat: "c1"},
{name: "azure drake", stat: "u1"},
{name: "backfire", stat: "u1"},
{name: "boomerang", stat: "c2"},
{name: "brine hag", stat: "u1"},
{name: "devouring deep", stat: "c2"},
{name: "dream coat", stat: "u1"},
{name: "elder spawn", stat: "r1"},
{name: "enchantment alteration", stat: "c1"},
{name: "energy tap", stat: "c2"},
{name: "field of dreams", stat: "r1"},
{name: "flash counter", stat: "c2"},
{name: "flash flood", stat: "c2"},
{name: "force spike", stat: "c2"},
{name: "gaseous form", stat: "c1"},
{name: "glyph of delusion", stat: "c1"},
{name: "in the eye of chaos", stat: "r1"},
{name: "invoke prejudice", stat: "r1"},
{name: "juxtapose", stat: "r1"},
{name: "land equilibrium", stat: "r1"},
{name: "mana drain", stat: "u1"},
{name: "part water", stat: "u1"},
{name: "psionic entity", stat: "r1"},
{name: "psychic purge", stat: "c1"},
{name: "puppet master", stat: "u1"},
{name: "recall", stat: "r1"},
{name: "relic bind", stat: "u1"},
{name: "remove soul", stat: "c2"},
{name: "reset", stat: "u1"},
{name: "reverberation", stat: "r1"},
{name: "sea kings' blessing", stat: "u1"},
{name: "segovian leviathan", stat: "u1"},
{name: "silhouette", stat: "u1"},
{name: "spectral cloak", stat: "u1"},
{name: "telekinesis", stat: "r1"},
{name: "teleport", stat: "r1"},
{name: "time elemental", stat: "r1"},
{name: "undertow", stat: "u1"},
{name: "venarian gold", stat: "c1"},
{name: "wall of vapor", stat: "c2"},
{name: "wall of wonder", stat: "u1"},
{name: "zephyr falcon", stat: "c2"},
{name: "aisling leprechaun", stat: "c1"},
{name: "arboria", stat: "u1"},
{name: "avoid fate", stat: "c1"},
{name: "barbary apes", stat: "c1"},
{name: "cat warriors", stat: "c2"},
{name: "cocoon", stat: "u1"},
{name: "concordant crossroads", stat: "r1"},
{name: "craw giant", stat: "u1"},
{name: "deadfall", stat: "u1"},
{name: "durkwood boars", stat: "c2"},
{name: "elven riders", stat: "r1"},
{name: "emerald dragonfly", stat: "c2"},
{name: "eureka", stat: "r1"},
{name: "fire sprites", stat: "c2"},
{name: "floral spuzzem", stat: "u1"},
{name: "giant turtle", stat: "c2"},
{name: "glyph of reincarnation", stat: "c1"},
{name: "hornet cobra", stat: "c2"},
{name: "ichneumon druid", stat: "u1"},
{name: "killer bees", stat: "r1"},
{name: "living plane", stat: "r1"},
{name: "master of the hunt", stat: "r1"},
{name: "moss monster", stat: "c2"},
{name: "pixie queen", stat: "r1"},
{name: "pradesh gypsies", stat: "u1"},
{name: "rabid wombat", stat: "u1"},
{name: "radjan spirit", stat: "u1"},
{name: "rebirth", stat: "r1"},
{name: "reincarnation", stat: "u1"},
{name: "revelation", stat: "r1"},
{name: "rust", stat: "c2"},
{name: "shelkin brownie", stat: "c1"},
{name: "storm seeker", stat: "u1"},
{name: "subdue", stat: "c1"},
{name: "sylvan library", stat: "u1"},
{name: "sylvan paradise", stat: "u1"},
{name: "typhoon", stat: "r1"},
{name: "untamed wilds", stat: "u1"},
{name: "whirling dervish", stat: "u1"},
{name: "willow satyr", stat: "r1"},
{name: "winter blast", stat: "r1"},
{name: "wolverine pack", stat: "c2"},
{name: "wood elemental", stat: "r1"},
{name: "aerathi berserker", stat: "u1"},
{name: "active volcano", stat: "c2"},
{name: "backdraft", stat: "u1"},
{name: "beasts of bogardan", stat: "u1"},
{name: "blazing effigy", stat: "c2"},
{name: "blood lust", stat: "u1"},
{name: "the brute", stat: "c1"},
{name: "caverns of despair", stat: "r1"},
{name: "chain lightning", stat: "c2"},
{name: "crevasse", stat: "u1"},
{name: "crimson kobolds", stat: "c2"},
{name: "crimson manticore", stat: "r1"},
{name: "crookshank kobolds", stat: "c2"},
{name: "disharmony", stat: "r1"},
{name: "dwarven song", stat: "u1"},
{name: "eternal warrior", stat: "u1"},
{name: "falling star", stat: "r1"},
{name: "feint", stat: "c1"},
{name: "firestorm phoenix", stat: "r1"},
{name: "frost giant", stat: "u1"},
{name: "giant strength", stat: "c2"},
{name: "glyph of destruction", stat: "c2"},
{name: "gravity sphere", stat: "r1"},
{name: "hyperion blacksmith", stat: "u1"},
{name: "immolation", stat: "c1"},
{name: "kobold drill sergeant", stat: "u1"},
{name: "kobold overlord", stat: "r1"},
{name: "kobold taskmaster", stat: "u1"},
{name: "kobolds of kher keep", stat: "c2"},
{name: "land's edge", stat: "r1"},
{name: "mountain yeti", stat: "u1"},
{name: "primordial ooze", stat: "u1"},
{name: "pyrotechnics", stat: "c2"},
{name: "quarum trench gnomes", stat: "r1"},
{name: "raging bull", stat: "c1"},
{name: "spinal villain", stat: "r1"},
{name: "storm world", stat: "r1"},
{name: "tempest efreet", stat: "r1"},
{name: "wall of dust", stat: "u1"},
{name: "wall of earth", stat: "c2"},
{name: "wall of heat", stat: "c1"},
{name: "wall of opposition", stat: "r1"},
{name: "winds of change", stat: "u1"},
{name: "akron legionnaire", stat: "r1"},
{name: "alabaster potion", stat: "c2"},
{name: "amrou kithkin", stat: "c2"},
{name: "angelic voices", stat: "r1"},
{name: "cleanse", stat: "r1"},
{name: "clergy of the holy nimbus", stat: "c2"},
{name: "d'avenant archer", stat: "c2"},
{name: "divine intervention", stat: "r1"},
{name: "divine offering", stat: "c2"},
{name: "divine transformation", stat: "r1"},
{name: "elder land wurm", stat: "r1"},
{name: "enchanted being", stat: "c1"},
{name: "equinox", stat: "c1"},
{name: "fortified area", stat: "u1"},
{name: "glyph of life", stat: "c2"},
{name: "great defender", stat: "u1"},
{name: "great wall", stat: "u1"},
{name: "greater realm of preservation", stat: "u1"},
{name: "heaven's gate", stat: "u1"},
{name: "holy day", stat: "c1"},
{name: "indestructible aura", stat: "c2"},
{name: "infinite authority", stat: "r1"},
{name: "ivory guardians", stat: "u1"},
{name: "keepers of the faith", stat: "c2"},
{name: "kismet", stat: "u1"},
{name: "land tax", stat: "u1"},
{name: "lifeblood", stat: "r1"},
{name: "moat", stat: "r1"},
{name: "osai vultures", stat: "c1"},
{name: "petra sphinx", stat: "r1"},
{name: "presence of the master", stat: "u1"},
{name: "rapid fire", stat: "r1"},
{name: "remove enchantments", stat: "c1"},
{name: "righteous avengers", stat: "u1"},
{name: "seeker", stat: "u1"},
{name: "shield wall", stat: "u1"},
{name: "spirit link", stat: "u1"},
{name: "spiritual sanctuary", stat: "r1"},
{name: "thunder spirit", stat: "r1"},
{name: "tundra wolves", stat: "c2"},
{name: "visions", stat: "u1"},
{name: "wall of caltrops", stat: "c1"},
{name: "wall of light", stat: "u1"},
{name: "al-abara's carpet", stat: "r1"},
{name: "alchor's tomb", stat: "r1"},
{name: "arena of the ancients", stat: "r1"},
{name: "black mana battery", stat: "u1"},
{name: "blue mana battery", stat: "u1"},
{name: "bronze horse", stat: "r1"},
{name: "forethought amulet", stat: "r1"},
{name: "gauntlets of chaos", stat: "r1"},
{name: "green mana battery", stat: "u1"},
{name: "horn of deafening", stat: "r1"},
{name: "knowledge vault", stat: "r1"},
{name: "kry shield", stat: "u1"},
{name: "life chisel", stat: "u2"},
{name: "life matrix", stat: "r1"},
{name: "mana matrix", stat: "r1"},
{name: "marble priest", stat: "u1"},
{name: "mirror universe", stat: "r1"},
{name: "north star", stat: "r1"},
{name: "nova pentacle", stat: "r1"},
{name: "planar gate", stat: "r1"},
{name: "red mana battery", stat: "u1"},
{name: "relic barrier", stat: "u2"},
{name: "ring of immortals", stat: "r1"},
{name: "sentinel", stat: "r1"},
{name: "serpent generator", stat: "r1"},
{name: "sword of the ages", stat: "r1"},
{name: "triassic egg", stat: "r1"},
{name: "voodoo doll", stat: "r1"},
{name: "white mana battery", stat: "u1"},
{name: "adventurers' guildhouse", stat: "u1"},
{name: "cathedral of serra", stat: "u1"},
{name: "hammerheim", stat: "u2"},
{name: "karakas", stat: "u2"},
{name: "mountain stronghold", stat: "u1"},
{name: "pendelhaven", stat: "u2"},
{name: "seafarer's quay", stat: "u2"},
{name: "the tabernacle at pendrell vale", stat: "r1"},
{name: "tolaria", stat: "u2"},
{name: "unholy citadel", stat: "u2"},
{name: "urborg", stat: "u2"},
{name: "adun oakenshield", stat: "r1"},
{name: "angus mackenzie", stat: "r1"},
{name: "arcades sabboth", stat: "r1"},
{name: "axelrod gunnarson", stat: "r1"},
{name: "ayesha tanaka", stat: "r1"},
{name: "barktooth warbeard", stat: "u1"},
{name: "bartel runeaxe", stat: "r1"},
{name: "boris devilboon", stat: "r1"},
{name: "chromium", stat: "r1"},
{name: "dakkon blackblade", stat: "r1"},
{name: "gabriel angelfire", stat: "r1"},
{name: "gosta dirk", stat: "r1"},
{name: "gwendlyn di corci", stat: "r1"},
{name: "halfdane", stat: "r1"},
{name: "hazezon tamar", stat: "r1"},
{name: "hunding gjornersen", stat: "u1"},
{name: "jacques le vert", stat: "r1"},
{name: "jasmine boreal", stat: "u1"},
{name: "jedit ojanen", stat: "u1"},
{name: "jerrard of the closed fist", stat: "u1"},
{name: "johan", stat: "r1"},
{name: "kasimir the lone wolf", stat: "u1"},
{name: "kei takahashi", stat: "r1"},
{name: "lady caleria", stat: "r1"},
{name: "lady evangela", stat: "r1"},
{name: "the lady of the mountain", stat: "u1"},
{name: "lady orca", stat: "u1"},
{name: "livonya silone", stat: "r1"},
{name: "lord magnus", stat: "u1"},
{name: "marhault elsdragon", stat: "u1"},
{name: "nebuchadnezzar", stat: "r1"},
{name: "nicol bolas", stat: "r1"},
{name: "palladia-mors", stat: "r1"},
{name: "pavel maliki", stat: "u1"},
{name: "princess lucrezia", stat: "u1"},
{name: "ragnar", stat: "r1"},
{name: "ramirez depietro", stat: "u1"},
{name: "ramses overdark", stat: "r1"},
{name: "rasputin dreamweaver", stat: "r1"},
{name: "riven turnbull", stat: "u1"},
{name: "rohgahh of kher keep", stat: "r1"},
{name: "rubinia soulsinger", stat: "r1"},
{name: "sir shandlar of eberyn", stat: "u1"},
{name: "sivitri scarzam", stat: "u1"},
{name: "sol'kanar the swamp king", stat: "r1"},
{name: "stangg", stat: "r1"},
{name: "sunastian falconer", stat: "u1"},
{name: "tetsuo umezawa", stat: "r1"},
{name: "tobias andrion", stat: "u1"},
{name: "tor wauki", stat: "u1"},
{name: "torsten von ursus", stat: "u1"},
{name: "tuknir deathlock", stat: "r1"},
{name: "ur-drago", stat: "r1"},
{name: "vaevictis asmadi", stat: "r1"},
{name: "xira arien", stat: "r1"}
];

var booster = 15;
var boosterRare = 1;
var boosterUncommon = 3;
var boosterCommon = 11;

var setFolder = "LEG";