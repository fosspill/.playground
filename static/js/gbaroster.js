var staticgrp = [24368520, 24368612, 21819678, 24364510, 24251684, 14590305];
var maxlvl = 80;

//python3 classjobscsvtorolelistpy
var tanks = [1, 3, 19, 21, 32, 37 ]
var healers = [6, 24, 28, 33 ]
var dps = [2, 4, 5, 7, 20, 22, 23, 25, 26, 27, 29, 30, 31, 34, 35, 36, 38 ]

Array.prototype.keySort = function(key, desc){
  this.sort(function(a, b) {
    var result = desc ? (a[key] < b[key]) : (a[key] > b[key]);
    return result ? 1 : -1;
  });
  return this;
}


$(document).ready(function() {


  $('#search').on('input', function() {
    $('.chardiv').each(function(i, obj) {
      if (!obj.textContent.toUpperCase().includes($('input#search').val().toUpperCase())){
        ($(obj).hide());
     } else {
       ($(obj).show());
     }
    });
  });


    $("#tjobs").click(function() {
        //Use switch class instead?
        $(".bottom-fullwidth").toggle();

    });
    $("#tstatic").click(function() {
        $(".static").toggle();
    });
    $("#trest").click(function() {
        $(".nonstatic").toggle();
    });
    $("#tnames").click(function() {
        $(".top-left").toggle();
    });
    $("#hitanks").click(function() {
    $(".highlight").removeClass("highlight");
    $(".tank").toggleClass("highlight");
    });
    $("#hihealers").click(function() {
    $(".highlight").removeClass("highlight");
    $(".healer").toggleClass("highlight");
    });
    
    $("#hidps").click(function() {
     $(".highlight").removeClass("highlight");
    $(".dps").toggleClass("highlight");
    });
     $("#hiremove").click(function() {
     $(".highlight").removeClass("highlight");
    });
    

});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function errorout(error){
	 document.getElementById("main").innerHTML = "<img src='img/angrymoogle.png' /><div style='padding-top: 1em;'>GREAT GOOGLY MOOGLEY IT'S ALL GONE TO SHIT!</div><div style='padding-top: 1em;'>The Lodestone or XIVAPI is not responding as expected. Likely due to maintenance or unexpected downtime.Try again later. </div>";
	 document.getElementById("main").innerHTML += "<div style='padding-top: 1em;'>" + error + "</div>";
         document.getElementById("menu").innerHTML = "SOMETHING WENT WRONG. YELL AT ISU (AFTER REFRESHING ONCE) <3!<br>";
         document.getElementById("menu").innerHTML += error;
}

async function getFc() {
    fetch("https://xivapi.com/freecompany/9229283011365791634?data=FCM&extended=1")
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("head").innerHTML += "<h1>" + data["FreeCompany"].Name + "</h1>";
            var memArray = data["FreeCompanyMembers"];
            if (memArray.length > 0){
		     var index, len;
		     var cleanmemArray = [];
    		     for (index = 0, len = memArray.length; index < len; ++index) {
			     cleanmemArray.push(memArray[index].ID)
		     }
 		if (staticgrp.length > 0){
		     var index, len;
    		     for (index = 0, len = staticgrp.length; index < len; ++index) {
			            if (!(cleanmemArray.includes(staticgrp[index]))) {
					cleanmemArray.push(staticgrp[index])
					} 
		     }
	    }
            getChars(cleanmemArray);
	    } else {
	   	errorout("Membersarray is empty.")
	    }
	   

        })
        .catch(err => {
            errorout(err);
        })

}

async function getChars(a) {

    var index, len;
    for (index = 0, len = a.length; index < len; ++index) {
        var starttime = Date.now()
        fetch('https://xivapi.com/character/' + a[index] + '?data=CJ')
            .then(response => {
                return response.json()
            })
            .then(data => {
                document.getElementById("loading").innerHTML = ("Loading... " + index + "/" + len);
                var divmain = document.createElement("div");
                var divtl = document.createElement("div");
                var divtr = document.createElement("div");
                var divbm = document.createElement("div")

                divmain.setAttribute("id", data["Character"].ID);

                divtl.setAttribute("class", "top-left");
                divtl.innerHTML = data["Character"].Name;

                divtr.setAttribute("class", "top-right");
            
                divbm.setAttribute("class", "bottom-fullwidth")


                var pic = document.createElement("img");
                pic.src = data["Character"].Portrait;


                pic.setAttribute("title", data["Character"].Name);
                pic.setAttribute("alt", data["Character"].Name);
                pic.setAttribute("class", "charimg");
                divmain.appendChild(pic)
                divmain.appendChild(divtl)
                divmain.appendChild(divtr)

                var classes = []
                classes.push("chardiv")
            
                //divele.appendChild(data["Character"].ID);
                var jobsobject = data["Character"]["ClassJobs"];
                var jobsarray = Object.values(jobsobject).keySort('Level', true);
                var arrayLength = jobsarray.length;

                for (var i = 0; i < arrayLength; i++) {
                    if (jobsarray[i].Level >= maxlvl){
                     var classurl = "img/xivjob/" + jobsarray[i].JobID + ".png";
                    var classpic = document.createElement("img");
                    classpic.setAttribute("width", "10%");
		    classpic.setAttribute("title", jobsarray[i].Level);
                    classpic.src = classurl;
                    divbm.appendChild(classpic); 
                        
                    if (tanks.includes(jobsarray[i].JobID) && !classes.includes("tank"))
                        {
                            classes.push("tank")
                        } else if (healers.includes(jobsarray[i].JobID) && !classes.includes("healer"))
                        {
                            classes.push("healer")
                        } else if (dps.includes(jobsarray[i].JobID) && !classes.includes("dps"))
                        {
                            classes.push("dps")
                        }
                        
                        
                    } else if (jobsarray[i].Level >= 10) {
                    var classurl = "img/xivjob/" + jobsarray[i].JobID + ".png";
                    var classpic = document.createElement("img");
                    classpic.setAttribute("width", "10%");
		    classpic.setAttribute("title", jobsarray[i].Level);
                    var classpicopacity = (jobsarray[i].Level / (maxlvl-1)) * 0.8;
                    var classpicgrayscale = Math.ceil(50 + (50 * (1 - classpicopacity)));
		    classpic.style.opacity = classpicopacity;
                    classpic.style["filter"] = "grayscale(" + classpicgrayscale + "%)";
                    classpic.src = classurl;
                    divbm.appendChild(classpic); 
                    }
                    

                    //Do something
                }
                if (staticgrp.includes(data["Character"].ID)) {
                    classes.push("static") 
                    divtr.innerHTML = "Static";
                }
                else {
                    classes.push("nonstatic") 

                }
                divmain.setAttribute("class", classes.join(" "));
                divmain.appendChild(divbm)
                document.getElementById("main").appendChild(divmain);
                //console.log(data)

            })
            .catch(err => {
                errorout(err);
            })
        var endtime = Date.now()
        await sleep(400);
    }



      document.getElementById("menu").style.display = "block";
document.getElementById("main").style.display = "block";
    document.getElementById("loading").style.display = "none";
document.getElementById("loadinggif").style.display = "none";
}


