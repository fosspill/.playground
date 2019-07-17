var alphabet = {
	"A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "", "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": ""
};




$(document).ready(function() {
    

    
var inputbox = $("#input");
var outputbox = $("#output");




 $(inputbox).on('input', function() {
        var string = inputbox.val().toUpperCase();
        var outputtext = ""
        for (var i = 0; i < string.length; i++) {
          if ( string[i] in alphabet){
          	outputtext += alphabet[string[i]];
          } else 
          {
               outputtext += string[i];
           }
	}
	outputbox.val(outputtext);

  });

});


