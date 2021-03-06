//select-number form

jQuery(function($){
  $(".phone-mask").mask("+38(999) 999-9999");
});
  $('.open-phone').click(function() {
    $('.fix-menu__item .form__wrapper').toggleClass('open');
    $('.select-number .form__wrapper').toggleClass('open');
  });

  $('.select-number .select-button-number').click(function() {
    $('.select-number .form__wrapper').toggleClass('open');
  });

//fix-menu
$(document).ready(function() {
    
   var navPos, navPosService, winPos, navHeight;
     
   function refreshVar() {
     try {
       navPos = $('.slider').offset().top;
     } catch (e){}
    try {
       navPosService = $('.service').offset().top;
    } catch (e){}
     navHeight = $('.fix-menu').outerHeight(true);
   }

   refreshVar();
   $(window).resize(refreshVar);

     $('<div class="clone-fix-menu"></div>').insertBefore('.slider').css('height', navHeight).hide();
     $('<div class="clone-fix-menu"></div>').insertBefore('.service').css('height', navHeight).hide();
     
   $(window).scroll(function() {
     winPos = $(window).scrollTop();
     
     if (winPos >= navPos) {
       $('.fix-menu').addClass('fixed shadow');  
       $('.clone-fix-menu').show();
     } else if (winPos >= navPosService) {
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
        if (screenSize) {
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
    return (mq == 'mobile') ? false : true;
  }
  });


//menu-mobile

  $(document).ready(function() {
    $(".button__hamburger").click(function() {
      
      $(".menu-mobile").slideToggle("slow", function() {
        $(".menu-mobile").toggleClass('menu-mobile-open');
        $(".button__hamburger").toggleClass('close');
        $(".button__cross").removeClass('close');
      });
    });
    
    $(".button__cross").click(function() {
      $(".menu-mobile").slideToggle("slow", function() {
         $('.menu-mobile').removeClass('menu-mobile-open');
         $(".button__cross").toggleClass('close');
        $(".button__hamburger").removeClass('close');
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
   var accordion2 = new Accordion($('#accordion2'), false);
 });
$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.submenu__link--open');
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

    var accordion2 = new Accordion($('#accordion2'), false);

  });


  if(window.matchMedia('(max-width: 1240px)').matches) {

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
  });
  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.submenu__link--open');
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

  });

  }








  
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


Array.prototype.slice.call(document.querySelectorAll('#aside1, #aside2 > #service__sidebar__form')).forEach(function(a) {  // селекторы блоков, которые будут фиксироваться. Может быть как один блок, так два и более
  var b = null, P = 43;
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false);
  function Ascroll() {
    if (b == null) {
      var Sa = getComputedStyle(a, ''), s = '';
      for (var i = 0; i < Sa.length; i++) {
        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
          s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
        }
      }
      b = document.createElement('div');
      b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
      a.insertBefore(b, a.firstChild);
      var l = a.childNodes.length;
      for (var i = 1; i < l; i++) {
        b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px';
      a.style.padding = '0';
      a.style.border = '0';
    }
    var Ra = a.getBoundingClientRect(),
        R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom + 38);
    if ((Ra.top - P) <= 0) {
      if ((Ra.top - P) <= R) {
        b.className = 'stop';
        b.style.top = - R +'px';
        b.style.left = 0;
      } else {
        b.className = 'sticky';
        b.style.top = P + 'px';
        b.style.left = Ra.left + 'px';
      }
    } else {
      b.className = '';
      b.style.top = '';
      b.style.left = '';
    }
    window.addEventListener('resize', function() {
      a.children[0].style.width = getComputedStyle(a, '').width;
      b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
    }, false);
  }
  })


/*


$(document).ready(function() {
  
 var navPos, winPos, navHeight, endPos;
   
 function refreshVar() {
   try {
     navPos = $('.service__description').offset().top;
   } catch (e){}
   navHeight = $('.fix-wrapper').outerHeight(true);
   try {
   endPos = $('.gallery-carusel').offset().top;
  } catch (e){}
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

*/



 //fix button order
 /*
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
*/



$('.tabs__stages__item a').click(function() {
  $(this).parent().toggleClass('tabs__stages__item-active');
  $('.tabs__stages__item a').not($(this)).parent().removeClass('tabs__stages__item-active');
});

//.block-on-off


$('.minus').click(function() {
  $(this).parent().siblings().toggleClass('close');
  $(this).siblings().toggleClass('plus-open');
  $('.triangle').removeClass('plus-open');
  $(this).siblings().siblings().removeClass('triangle-right');
});

$('.plus').click(function() {
  $(this).parent().siblings().removeClass('close');
  $(this).removeClass('plus-open');
  $(this).siblings().toggleClass('triangle-right');
  $('.minus').removeClass('triangle-right');
});
$('.price-list__print').click(function() {
  $('.plus').parent().siblings().removeClass('close');
  $('.plus').removeClass('plus-open');
  $('.triangle').addClass('triangle-right');
});



$('.send-wrapper span').click(function() {
  $('.fieldset-wrapper__service__question-row textarea').toggleClass('open');
  $('.fieldset-wrapper__service__question input[type="email"]').toggleClass('open');
  $('.send-wrapper p').toggleClass('close');
});

/*price*/

$('#currency__name__ru').click(function()   {
  $('.cost__ru').removeClass('close');
  $('.cost__ua').addClass('close');
});
$('#currency__name__ua').click(function()   {
  $('.cost__ua').removeClass('close');
  $('.cost__ru').addClass('close');
});
//service__sidebar__form

function getName (str){
  if (str.lastIndexOf('\\')){
      var i = str.lastIndexOf('\\')+1;
  }
  else{
      var i = str.lastIndexOf('/')+1;
  }						
  var filename = str.slice(i);			
  var uploaded = document.getElementById("fileformlabel");
  uploaded.innerHTML = filename;
}



// about slider slick
$(document).ready(function(){

  $('.multiple-items').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    appendDots: $('.for-dots'),
  });
    
});

document.getElementById('stage').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
/*страница before-after*/
/*quickstand фильтр*/

$(document).ready(function(){
  var items = $('#stage li'),
  itemsByTags = {};

// Looping though all the li items:

items.each(function(i){
  var elem = $(this),
    tags = elem.data('tags').split(',');
  
  // Adding a data-id attribute. Required by the Quicksand plugin:
  elem.attr('data-id',i);
  
  $.each(tags,function(key,value){
    
    // Removing extra whitespace:
    value = $.trim(value);
    
    if(!(value in itemsByTags)){
      // Create an empty array to hold this item:
      itemsByTags[value] = [];
    }
    
    // Each item is added to one array per tag:
    itemsByTags[value].push(elem);
  });
  
});

// Creating the "Everything" option in the menu:
createList('Все работы',items);

// Looping though the arrays in itemsByTags:
$.each(itemsByTags,function(k,v){
  createList(k,v);
});

$('#filter a').on('click', function(e){
  var link = $(this);
  
  link.addClass('active').siblings().removeClass('active');
  
  // Using the Quicksand plugin to animate the li items.
  // It uses data('list') defined by our createList function:
  
  $('#stage').quicksand(link.data('list').find('li'));
  e.preventDefault();
});

$('#filter a:first').click();

function createList(text,items){
  
  // This is a helper function that takes the
  // text of a menu button and array of li items
  
  // Creating an empty unordered list:
  var ul = $('<ul>',{'class':'hidden'});
  
  $.each(items,function(){
    // Creating a copy of each li item
    // and adding it to the list:
    
    $(this).clone().appendTo(ul);
  });

  ul.appendTo('#container');

  // Creating a menu item. The unordered list is added
  // as a data parameter (available via .data('list'):
  
  var a = $('<a>',{
    html: text,
    href:'#',
    data: {list:ul}
  }).appendTo('#filter');
}
});

$(document).ready(function() {
  $('.btn-slider').on('click', function() {
    $('.sliderPop').show();
    $('.ct-sliderPop-container').addClass('open');
    $('.sliderPop').addClass('flexslider');
    $('.sliderPop .ct-sliderPop-container').addClass('slides');

    $('.sliderPop').flexslider({
          selector: '.ct-sliderPop-container > .ct-sliderPop',
          slideshow: false,
          controlNav: false,
          controlsContainer: '.ct-sliderPop-container'
    });
  });

  $('.ct-sliderPop-close').on('click', function() {
    $('.sliderPop').hide();
    $('.ct-sliderPop-container').removeClass('open');
    $('.sliderPop').removeClass('flexslider');
    $('.sliderPop .ct-sliderPop-container').removeClass('slides');
  });
});

$(document).ready(function(){
  $('.single-item').slick({
    dots: true,
    arrows: true,
    infinite: false
  });
  /*
    $('.multiple-items').slick({
            dots: true,
    
      
      slidesToShow: 4,
      slidesToScroll: 2,
      appendDots: $('.for-dots'),
    });
      */
  
  $('button[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.single-item').slick('slickGoTo', slideno - 1);
  });
});
  


