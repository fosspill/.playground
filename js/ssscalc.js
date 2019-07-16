var sssfight = {
  "Testfight": {
	"SAM": 1000, "AST": 2000
	}
};


$(document).ready(function() {
    
    //document.getElementById("menu").style.display = "block";
    //document.getElementById("loading").style.display = "none";
    
    var selfight = $("#selfight");
var selclass = $("#selclass");
$.each(sssfight, function(val, text) {
    selfight.append(
        $('<option></option>').val(val).html(val)
    );
});

$(selfight).change(function() {
	selclass.empty();
	if (selfight.val() === "NULL"){
		selclass.attr("disabled", true);
	}
	else {
		$.each(sssfight[selfight.val()], function(val, text) {
	    selclass.append(
		$('<option></option>').val(val).html(val)
	    );
		selclass.attr("disabled", false);
	});
}
});
});


