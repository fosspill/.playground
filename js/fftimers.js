function getNextDayOfWeek(dayOfWeek) {
var now = new Date();
var date = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
var resultDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

    resultDate.setUTCDate(date.getUTCDate() + (7 + dayOfWeek - date.getUTCDay()) % 7);
    resultDate.setUTCHours(17, 00, 00, 00)

    return resultDate;
}

function timerTo(elementid, cddate) {
var countDownDate = cddate.getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(elementid).innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(elementid).innerHTML = "Ongoing or Ended.";
  }
}, 1000);
}

$(document).ready(function() {
    
timerTo("statictimer", getNextDayOfWeek(5));

var now = new Date();
var weddingdate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

weddingdate.setUTCMonth(7);
weddingdate.setUTCDate(17);
weddingdate.setUTCHours(17, 00, 00, 00);
timerTo("weddingtimer", weddingdate);



});


