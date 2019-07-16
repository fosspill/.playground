var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
var staticgrp = [20474470, 20474652, 20542583, 23765972, 24368520, 24368612, 21819678, 22962059];
var maxlvl = 80;

var sssfight = {
  "Testfight": {"SAM", "AST"}
};


$(document).ready(function() {
    
    //document.getElementById("menu").style.display = "block";
    //document.getElementById("loading").style.display = "none";
    
    var dropdown = $("#selclass");
$.each(sssfight, function(val, text) {
    dropdown.append(
        $('<option></option>').val(val).html(text)
    );
});

}
