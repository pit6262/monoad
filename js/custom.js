$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){


	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler();
    };


    /* ---------------------------------------------- /*
	 * Dropdown
	/* ---------------------------------------------- */
  
    $('.btn-search').on('click', function(){
    	$(this).parent().find('.dropdown-block').toggleClass('open');
    	return false;
    });

    function openMenuMobile() {
    	$('.btn-toggle-menu').on('click', function(){
	    	$('.navbar').addClass('open');

	    	return false;
	    });

	    $('.navbar__close, .navbar__overlay').on('click', function(){
	    	$('.navbar').removeClass('open');
	    	
	    	return false;
	    });
    }
    openMenuMobile();

     function openCategoryMobile() {
    	$('.btn-toggle-category').on('click', function(){
	    	$('.category').addClass('open');

	    	return false;
	    });

	    $('.category__close, .category__overlay').on('click', function(){
	    	$('.category').removeClass('open');
	    	
	    	return false;
	    });
    }

    openCategoryMobile();

    $('.dropdown-hover').hover(function(){
    	$('.dropdown-block').removeClass('open');
    	$(this).find('.dropdown-block').addClass('open');
    	
    });

    $(document).on('click', function(event){
      if( $(event.target).closest(".dropdown-hover").length ) 
        return;
      
      $(".dropdown-hover .dropdown-block").removeClass('open');
      event.stopPropagation();
    });


	$(document).on('click', function(event){
      if( $(event.target).closest(".dropdown").length ) 
        return;
      
      $(".dropdown .dropdown-block").removeClass('open');
      event.stopPropagation();
    });
  



	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});



});

$(".header").removeClass("fixed");
$(window).on('scroll load', function(){

	if ($(this).scrollTop() > 0) {
		$(".header").addClass("fixed");
	} else {
		 $(".header").removeClass("fixed");
	};

	
});

$(window).on('load scroll', function() { 
    if ($(window).scrollTop() >= $('.main').offset().top + $('.main').outerHeight() - window.innerHeight) { 
        $('#main-footer').removeClass('open');
    }
    else {
      $('#main-footer').addClass('open');
    }
        
   
}); 


// var hm = function(){

	
// 	var h_footer = $('#site-footer').height();
// 	var height_main = $('.main-wrapper').height();
// 	var summ = height_main - h_footer
// 	alert(summ)
// 	if($(window).scrollTop() < summ) {
//       $('#main-footer').addClass('open');
//     }
//     else {
//       $('#main-footer').removeClass('open');
//     }
// }

// $(window).on('load scroll', hm);

//fixed header and footer	
var hf = function(){
	var h_footer = $('#site-footer').height();
	var h_main = $('.main').height();
	$('.main').css({
		'marginBottom': h_footer
	});

}

$(window).on('load resize', hf);


// (function(){
// 	var a = document.querySelector('#main-footer'), b = null, P = 0;
// 	window.addEventListener('scroll', Ascroll, false);
// 	document.body.addEventListener('scroll', Ascroll, false);
// 	function Ascroll() {
// 	  if (b == null) {
// 	    var Sa = getComputedStyle(a, ''), s = '';
// 	    for (var i = 0; i < Sa.length; i++) {
// 	      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
// 	        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
// 	      }
// 	    }
// 	    b = document.createElement('div');
// 	    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
// 	    a.insertBefore(b, a.firstChild);
// 	    var l = a.childNodes.length;
// 	    for (var i = 1; i < l; i++) {
// 	      b.appendChild(a.childNodes[1]);
// 	    }
// 	    a.style.height = b.getBoundingClientRect().height + 'px';
// 	    a.style.padding = '0';
// 	    a.style.border = '0';
// 	  }
// 	  var Ra = a.getBoundingClientRect(),
// 	      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#main').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
// 	  if ((Ra.top - P) <= 0) {
// 	    if ((Ra.top - P) <= R) {
// 	      b.className = 'stop';
// 	      b.style.top = - R +'px';
// 	    } else {
// 	      b.className = 'open';
// 	      b.style.top = P + 'px';
// 	    }
// 	  } else {
// 	    b.className = '';
// 	    b.style.top = '';
// 	  }
// 	  window.addEventListener('resize', function() {
// 	    a.children[0].style.width = getComputedStyle(a, '').width
// 	  }, false);
// 	}
// })()