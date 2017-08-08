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