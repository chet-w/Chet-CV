
//bullets


//headings

//if heading is between bottom of header (top of view) and 2/3 of the way down the page (bottom of view), the get the corresponding bullet and turn it blue.

var pageTop = $("header").height();
var pageBot = $(window).height() * 0.67;
console.log("pageBot = " + pageBot);
console.log("pageTop = " + pageTop);


$(document).ready(function() {
        $(window).scroll( function(){
            console.log($("#prof-head").offset().top);
            if($("#prof-head").offset().top < pageBot && $("#prof-head").offset().top > pageTop - $("#prof-head").height()){
                $("#prof-bul").css("filter", "none");
            }
        });
      });