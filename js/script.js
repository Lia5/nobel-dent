$(document).ready(function() {
    
   var navPos, winPos, navHeight;
     
   function refreshVar() {
     navPos = $('.slider').offset().top;
     navHeight = $('.fix-menu').outerHeight(true);
   }
   
   refreshVar();
   $(window).resize(refreshVar);
   
     $('<div class="clone-fix-menu"></div>').insertBefore('.slider').css('height', navHeight).hide();
     
   $(window).scroll(function() {
     winPos = $(window).scrollTop();
     
     if (winPos >= navPos) {
       $('.fix-menu').addClass('fixed shadow');  
       $('.clone-fix-menu').show();
     }  
     else {
       $('.fix-menu').removeClass('fixed shadow');
       $('.clone-fix-menu').hide();
     }
   });
   
   });