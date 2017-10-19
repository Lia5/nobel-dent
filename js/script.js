//select-number form
jQuery(function($){
  $("#phone").mask("+38(999) 999-9999");
  });


  $('.select-number .form__order').click(function() {
    $('.select-number .form__wrapper').toggleClass('open');
  });

  $('.select-number .select-button-number').click(function() {
    $('.select-number .form__wrapper').toggleClass('open');
  });

//fix-menu
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


//menu header
jQuery(document).ready(function($){
  //move nav element position according to window width
  moveNavigation();
  $(window).on('resize', function(){
    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
  });
  
  //mobile version - open/close navigation
  $('.cd-nav-trigger').on('click', function(event){
    event.preventDefault();
    if($('.nav__wrapper').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');
    
    $('.nav__wrapper').toggleClass('nav-is-visible');
    $('.cd-main-nav').toggleClass('nav-is-visible');
    $('.cd-main-content').toggleClass('nav-is-visible');
  });
  
  //mobile version - go back to main navigation
  $('.go-back').on('click', function(event){
    event.preventDefault();
    $('.cd-main-nav').removeClass('moves-out');
  });
  
  //open sub-navigation
  $('.cd-subnav-trigger').on('click', function(event){
    event.preventDefault();
    $('.cd-main-nav').toggleClass('moves-out');
  });
  
  function moveNavigation(){
    var navigation = $('.cd-main-nav-wrapper');
      var screenSize = checkWindowWidth();
        if ( screenSize ) {
          //desktop screen - insert navigation inside header element
      navigation.detach();
      navigation.insertBefore('.cd-nav-trigger');
    } else {
      //mobile screen - insert navigation after .cd-main-content element
      navigation.detach();
      navigation.insertAfter('.cd-main-content');
    }
  }
  
  function checkWindowWidth() {
    var mq = window.getComputedStyle(document.querySelector('.nav__wrapper'), '::before').getPropertyValue('content').replace(/"/g, '');
    return ( mq == 'mobile' ) ? false : true;
  }
  });


//menu-mobile

  $( document ).ready(function() {
    $( ".button__hamburger" ).click(function() {
      
      $( ".menu-mobile" ).slideToggle( "slow", function() {
        $( ".menu-mobile" ).toggleClass('menu-mobile-open');
        $( ".button__hamburger" ).toggleClass('close');
        $( ".button__cross" ).removeClass('close');
      });
    });
    
    $( ".button__cross" ).click(function() {
      $( ".menu-mobile" ).slideToggle( "slow", function() {
         $('.menu-mobile').removeClass('menu-mobile-open');
         $( ".button__cross" ).toggleClass('close');
        $( ".button__hamburger" ).removeClass('close');
      });
    });
  });


   // меню nav, menu sidebar
   $(function() {
   var Accordion = function(el, multiple) {
     this.el = el || {};
     this.multiple = multiple || false;
 
     // Variables privadas
     var links = this.el.find('.link');
     // Evento
     links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
   }
   Accordion.prototype.dropdown = function(e) {
     var $el = e.data.el;
       $this = $(this),
       $next = $this.next();
     $next.slideToggle();      
     $this.parent().toggleClass('open');
     if (!e.data.multiple) {
       $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
     };
   }	
   var accordion = new Accordion($('#accordion'), false);
   var accordion2 = new Accordion($('#accordion2'), false);
 });


    $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.submenu__link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
      $next.slideToggle();              
      $this.parent().toggleClass('open');        
      if (!e.data.multiple) {
        $el.find('.submenu__items').not($next).slideUp().parent().removeClass('open');
      };
    }	
    var accordion = new Accordion($('#accordion'), false);
    var accordion2 = new Accordion($('#accordion2'), false);
  });


  //fix form розовая справа внизу
  $(function() {
  var Order = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var ord = this.el.find('.form__order');
    // Evento
    ord.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Order.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.form__wrapper').not($next).slideUp().parent().removeClass('open');
    };
  }	

  var order = new Order($('#form'), false);
});



//fix service__container-nav services
$(document).ready(function() {
  
 var navPos, winPos, navHeight, endPos;
   
 function refreshVar() {
   navPos = $('.service__description').offset().top;
   navHeight = $('.fix-wrapper').outerHeight(true);
   endPos = $('.galllery-carusel').offset().top;
 }
 
 refreshVar();
 $(window).resize(refreshVar);
 
   $('<div class="clone-fix-wrapper"></div>').insertBefore('.service__description').css('height', navHeight).hide();
   
 $(window).scroll(function() {
   winPos = $(window).scrollTop();
   
   if ((winPos >= navPos)&&(winPos <= endPos)) {
     $('.fix-wrapper').addClass('fix-wrapper-fixed');  
     $('.clone-fix-wrapper').show();
   }  
   else {
     $('.fix-wrapper').removeClass('fix-wrapper-fixed');
     $('.clone-fix-wrapper').hide();
   }
 });
 
 });

 //fix button order
$(document).ready(function() {
  
  var winPos, endPos;
  function refreshVar() {
    endPos = $('footer').offset().top;
  }
  refreshVar();
  $(window).resize(refreshVar);
  $(window).scroll(function() {
    winPos = $(window).scrollTop();
    if (winPos >= endPos) {
      $('.fix-form').addClass('close');  
    }  
    else {
     $('.fix-form').removeClass('close');
    }
  });
});
