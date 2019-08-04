var sssfight = {
"ShB: Story Boss": {
"AST":861360,
"BLM":1963960,

"DNC":1327560,
"DRG":1793760,



"MNK":1762680,
"NIN":1574720,

"RDM":1685720,
"SAM":1758240,
"SCH":957560,
"SMN":1700520,

"WHM":1157360
},
"ShB: Eden NM": {
"AST":890360,
"BLM":2033520,

"DNC":1374920,
"DRG":1857400,



"MNK":1824840,
"NIN":1629480,

"RDM":1744920,
"SAM":1818920,
"SCH":991600,
"SMN":1759720,

"WHM":1197320,
},
"ShB: Titania EX": {
"AST":923520,
"BLM":2106040,
"BRD":1691640,
"DNC":1423760,
"DRG":1924000,
"DRK":1164760,
"GNB":1204720,
"MCH":1836680,
"MNK":1889960,
"NIN":1688680,
"PLD":1210640,
"RDM":1808560,
"SAM":1884040,
"SCH":1027120,
"SMN":1823360,
"WAR":1142560,
"WHM":1240240,
},
"ShB: Innocence EX": {
"AST":923520,
"BLM":2106040,
"BRD":1691640,
"DNC":1423760,
"DRG":1924000,
"DRK":1164760,
"GNB":1204720,
"MCH":1836680,
"MNK":1889960,
"NIN":1688680,
"PLD":1210640,
"RDM":1808560,
"SAM":1884040,
"SCH":1027120,
"SMN":1823360,
"WAR":1142560,
"WHM":1240240,
},
"ShB: E1S": {
"AST":1016760,
"BLM":2316200,


"DRG":2052760,



"MNK":2079400,
"NIN":1857400,

"RDM":1989120,
"SAM":2073480,
"SCH":1130720,
"SMN":2005400,

"WHM":1364560,
},
"ShB: E2S": {
"AST":1047840,
"BLM":2388720,


"DRG":2117880,



"MNK":2144520,
"NIN":1916600,

"RDM":2051280,
"SAM":2138600,
"SCH":1164760,
"SMN":2069040,

"WHM":1407480,
},
"ShB: E3S": {
"AST":1080400,
"BLM":2462720,


"DRG":2181520,



"MNK":2209640,
"NIN":1974320,

"RDM":2113440,
"SAM":2202240,
"SCH":1200280,
"SMN":2131200,

"WHM":1450400,
},
"ShB: E4S": {
"AST":1147000,
"BLM":2616640,


"DRG":2319160,



"MNK":2347280,
"NIN":2097160,

"RDM":2246640,
"SAM":2341360,
"SCH":1275760,
"SMN":2265880,

"WHM":1540680,
}
};


$(document).ready(function() {
    

    
var selfight = $("#selfight");
var selclass = $("#selclass");
var fightcalc = $(".fightcalc");
var textinput = $(".textinput");
var resrow = $("#res");
var restext = $("#restext");

var remtime = $("#remainingtime");
var remhp = $("#hppercent");



$.each(sssfight, function(val, text) {
    selfight.append(
        $('<option></option>').val(val).html(val)
    );
});

$(selfight).change(function() {
	selclass.empty();
	if (selfight.val() === "NULL"){
		selclass.attr("disabled", true);
		fightcalc.hide();
		textinput.val('0');
		resrow.hide();
		restext.html("");
	}
	else {
		$.each(sssfight[selfight.val()], function(val, text) {
	    selclass.append(
		$('<option></option>').val(text).html(val)
	    );
		selclass.attr("disabled", false);
                fightcalc.show();
	});
}
});

$( "#reset" ).click(function() {
  selfight
     .val('NULL')
     .trigger("change");
});

$( "#calculate" ).click(function() {
  var totalhp = Number(selclass.val());
  var remaininghp = Number(remhp.val());
  var remainingtime = Number(remtime.val());
  var maxtime = Number("180");
  console.log(totalhp)
console.log(remaininghp)
console.log(remainingtime)
console.log(maxtime)
  var resultdps = Math.ceil((totalhp - ((remaininghp / 100) * totalhp)) / (maxtime - remainingtime));
  resrow.show();
  restext.html("DPS: " + resultdps);
});

});


