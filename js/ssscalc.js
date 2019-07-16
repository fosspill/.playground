var sssfight = {
  "Titania EX": {
	"AST": 923520, "BLM": 2106040, "BRD": 1691640, "DNC": 1423760, "DRG": 1924000, "DRK": 1164760, "GNB": 1204720, "MCH": 1836680, "MNK": 1889960, "NIN": 1688680, "PLD": 1210640, "RDM": 1808560, "SAM": 1884040, "SCH": 1027120, "SMN": 1823360, "WAR": 1142560, "WHM": 1240240
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


