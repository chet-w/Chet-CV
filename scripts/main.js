$(document).ready(function() {
        $(window).scroll( function(){
            $('section').each( function(i){
                var objectTop = $(this).offset().top;
                var objectBottom = $(this).offset().top + $(this).offset().length;
                var pageMid = $(window).scrollTop() + $(window).height()/2;
                if( objectTop <= pageMid ){
                    $(this).animate({'opacity':'1'}, 800);
                }
            });
        });
      });

$(document).ready(function(){
      $(this).scrollTop(0);
    });

$(document).ready(function() {
        var pageTop = $("header").height();
        var pageBot = $(window).height() * 0.67;
        console.log("pageBot = " + pageBot);
        console.log("pageTop = " + pageTop);
    
        $(window).scroll( function(){
            
            var profHeading = $("#prof-head").offset().top;
            var eduHeading = $("#edu-head").offset().top;
            var skillsHeading = $("#skills-head").offset().top;
            var expHeading = $("#exp-head").offset().top;
            var portHeading = $("#port-head").offset().top;
            var conHeading = $("#con-head").offset().top;
            
            var bullets = [$("#prof-bul"), $("#edu-bul"), $("#skills-bul"), $("#exp-bul"), $("#port-bul"), $("#con-bul")];
            
            var vertPos = $(window).scrollTop();
            var cutOff = ($(window).height() - pageTop) * -0.50;
            
            console.log(eduHeading - vertPos);

            if(profHeading - vertPos > cutOff){
                $("#prof-bul").css("filter", "none");
                for(var i = 0; i < bullets.length; i++){
                    i == 0 ? i++ : i = i;
                    bullets[i].css("filter", "grayscale(100%)");
                }
            }else if(eduHeading - vertPos > cutOff){
                $("#edu-bul").css("filter", "none");
                for(var i = 0; i < bullets.length; i++){
                    i == 1 ? i++ : i = i;
                    bullets[i].css("filter", "grayscale(100%)");
                }
            }else if(skillsHeading - vertPos > cutOff){
                    $("#skills-bul").css("filter", "none");
                for(var i = 0; i < bullets.length; i++){
                    i == 2 ? i++ : i = i;
                    bullets[i].css("filter", "grayscale(100%)");
                }
            }else if(expHeading - vertPos > cutOff){
                $("#exp-bul").css("filter", "none");
                for(var i = 0; i < bullets.length; i++){
                    i == 3 ? i++ : i = i;
                    bullets[i].css("filter", "grayscale(100%)");
                }
            }else if(portHeading - vertPos > cutOff){
                $("#port-bul").css("filter", "none");
                for(var i = 0; i < bullets.length; i++){
                    i == 4 ? i++ : i = i;
                    bullets[i].css("filter", "grayscale(100%)");
                }
            }else if(conHeading - vertPos > cutOff){
                $("#con-bul").css("filter", "none");
                for(var i = 0; i < bullets.length; i++){
                    i == 5 ? i++ : i = i;
                    if( i < 6){
                        bullets[i].css("filter", "grayscale(100%)");
                    }  
                }
            }
        });
      });

function sendAnimate(){
            if($("#email").html() != null){
                $('#plane').addClass("move");
                $('form').css("opacity", 0);  
            }
          }
function moveDown(){
    $('#dl').css("animation-name", "dl");
}

$(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if(target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, 500);
            return false;
          }
        }
      });
    });