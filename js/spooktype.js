var alphabet = {
	" ": "🎃"
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


