function getNextDayOfWeek(dayOfWeek) {
var now = new Date();
var date = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
var resultDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

    resultDate.setUTCDate(date.getUTCDate() + ((7-date.getUTCDay())%7+dayOfWeek) % 7);
    resultDate.setUTCHours(17, 30, 00, 00)
    console.log(resultDate);
    return resultDate;
}

function timerTo(elementid, cddate, title) {
    var countDownDate = cddate.getTime();
    var divtimer = document.createElement("div");
    var spantimer = document.createElement("span");
    divtimer.innerHTML = title + "<br>";
    spantimer.setAttribute("id", elementid);
    divtimer.appendChild(spantimer);
    document.getElementById("timerslocal").appendChild(divtimer);
    
    setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(elementid).innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      if (distance < 0) {
         document.getElementById(elementid).innerHTML = "Ongoing or Ended";
      }
    }, 1000);
}

$(document).ready(function() {
//Static timer. Finds next Tuesday and Thursday and counts down.  
timerTo("static1timer", getNextDayOfWeek(3), "Wednesday Static");
timerTo("static2timer", getNextDayOfWeek(4), "Thursday Static");

//Custom timer example
//var now = new Date();
//var weddingdate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
//weddingdate.setUTCMonth(7);
//weddingdate.setUTCDate(17);
//weddingdate.setUTCHours(17, 00, 00, 00);
//timerTo("weddingtimer", weddingdate, "Wedding");
var now = new Date();
var babydate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
babydate.setUTCFullYear(2021);
babydate.setUTCMonth(4);
babydate.setUTCDate(11);
babydate.setUTCHours(13, 00, 00, 00);
timerTo("babytimer", babydate, "Little Dazkar");



});


