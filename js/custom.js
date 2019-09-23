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
        $('.styler').styler({
        	singleSelectzIndex: 9,
        	selectVisibleOptions: 10,
        });
    };

    /* ---------------------------------------------- /*
	 * Slider
	/* ---------------------------------------------- */
    if($('.banner-slider').length){
        $('.banner-slider').slick({
        	arrows: false,
        	dots: true,
        	adaptiveHeight: true,
        	autoplay: true,
        	autoplaySpeed: 2000,
        });
    };

    if($('.reviews-list').length){
		$('.reviews-list').slick({
		    slidesToShow: 5, 
		    slidesToScroll: 1,
		    dots: true,
		    arrows: false,
		    adaptiveHeight: true,
        	autoplay: true,
        	autoplaySpeed: 2000,
		    responsive: [
		    	{
		    		breakpoint: 1259,
		    		settings: {
		    			slidesToShow: 4,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	{
		    		breakpoint: 1100,
		    		settings: {
		    			slidesToShow: 3,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	{
		    		breakpoint: 992,
		    		settings: {
		    			slidesToShow: 2,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	{
		    		breakpoint: 560,
		    		settings: {
		    			slidesToShow: 1,
		    			slidesToScroll: 1,
		    			
		    		}
		    	}
		    ]
		});
	};

	if($('.products-slider').length){
		$('.products-slider').slick({
		    slidesToShow: 4, 
		    slidesToScroll: 1,
		    dots: true,
		    arrows: false,
		    adaptiveHeight: true,
        	autoplay: true,
        	autoplaySpeed: 2000,
		    responsive: [
		    	{
		    		breakpoint: 1259,
		    		settings: {
		    			slidesToShow: 3,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},

		    	{
		    		breakpoint: 768,
		    		settings: {
		    			slidesToShow: 2,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	
		    ]
		});
	};
	if($('.recommendations-slider').length){
		$('.recommendations-slider').slick({
		    slidesToShow: 6, 
		    slidesToScroll: 1,
		    dots: true,
		    arrows: false,
		    adaptiveHeight: true,
        	autoplay: true,
        	autoplaySpeed: 2000,
		    responsive: [
		    	{
		    		breakpoint: 1259,
		    		settings: {
		    			slidesToShow: 5,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	{
		    		breakpoint: 992,
		    		settings: {
		    			slidesToShow: 4,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	
		    	{
		    		breakpoint: 768,
		    		settings: {
		    			slidesToShow: 3,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},

		    	{
		    		breakpoint: 560,
		    		settings: {
		    			slidesToShow: 2,
		    			slidesToScroll: 1,
		    			
		    		}
		    	},
		    	
		    ]
		});
	};


    /* ---------------------------------------------- /*
	 * Popup
	/* ---------------------------------------------- */
    if($('[data-fancybox]').length){
        $("[data-fancybox]").fancybox({
    		autoFocus: false,
    		// touch: false,
    		buttons: [
    			// "zoom",
    			//"share",
    			// "slideShow",
    			//"fullScreen",
    			//"download",
    			// "thumbs",
    			"close"
    		],
    		afterShow: function( instance, slide ) {
    			$('.styler').trigger('refresh');
    		}
    		
    	});
    }
    
    /* ---------------------------------------------- /*
	 * Base
	/* ---------------------------------------------- */
  
    $('.accordion-mobile__toggle').on('click', function(){
    	$(this).toggleClass('active').parents('.accordion-mobile').find('.accordion-mobile__body').slideToggle(200);
    	return false;
    });

     $('.btn-search').on('click', function(){
    	$(this).parent().find('.dropdown-block').toggleClass('open');
    	return false;
    });

    $('.navbar__close, .navbar__overlay').on('click', function(){
    	$('.navbar').removeClass('open');
    	
    	return false;
    });

    function gallery() {
     	
    	$('.gallery').on('click', function(){
    		$('.main').hide();
    		$('.card-gallery').addClass('open');
    		var thisID = $(this).attr('href');
    			bl_top = $(thisID).offset().top;
			$('body,html').animate({scrollTop: bl_top}, 0);
			return false;
	    });

    	$('.card-gallery__item').on('click', function(){
    		$('.main').show();
    		$('.card-gallery').removeClass('open');
    		$(".sticky").trigger("sticky_kit:recalc");
    		var thisIDD = $(this).data('id');
    		
    			bl_topp = $('[data-id= '+ thisIDD +']').offset().top;
			$('body,html').animate({scrollTop: bl_topp}, 0);
			
	   		 $('.recommendations-slider').slick('refresh');
			return true;

	    });
    }
    gallery();
    

    function showMoreText() {
    	$('.show-more').on('click', function(){
	    	$(this).parents('.short-block').hide()
	    	$(this).parents('.toggle-block').find('.full-block').show()

	    	return false;
	    });

	    $('.show-more-return').on('click', function(){
	    	$(this).parents('.full-block').hide()
	    	$(this).parents('.toggle-block').find('.short-block').show()

	    	return false;
	    });
    }
    showMoreText();

    function cardDescription() {


	    $('.card-description__more').click(function(event) {
	        event.preventDefault();
	        $(this).toggleClass('active').parents('.card-description').find('.card-descr-wrap').slideToggle(400);
	        namebl = $(this).html();
	        if(namebl == 'Подробнее о товаре'){
	            $(this).html('Cвернуть');
	        }else{
	           $(this).html('Подробнее о товаре');
	        }

	    });
    }
    cardDescription();

    function showTrLine() {
    	$('.show-tr').on('click', function(){
	    	$(this).toggleClass('active').parents('.history-table__info').toggleClass('active').next().slideToggle(0)

	    	return false;
	    });

	   
    }
    showTrLine();


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

	function stickyCardInfo() {
		$(window).on('load resize', function() {

		  window_width = $( window ).width();
		  window_height = $( window ).height();

		  if (window_width < 992 || window_height < 700) {
		    $(".sticky").trigger("sticky_kit:detach");
		  } else {
		    make_sticky();
		  }

		});

		function make_sticky() {
		  $(".sticky").stick_in_parent();
		}
	}

	stickyCardInfo();

});


if($('.card-slider').length){
	$slick_slider = $('.card-slider');
	settings = {
		arrows: false,
		dots: true,

	}
	$slick_slider.slick(settings);


	$(window).on('load resize', function() {
		if ($(this).height() > 700 && $(this).width() > 992) {
		  if ($slick_slider.hasClass('slick-initialized')) {
		    $slick_slider.slick('unslick');
		  }
		  return
		}

		if (!$slick_slider.hasClass('slick-initialized')) {
		  return $slick_slider.slick(settings);
		}
	});
}


$(".header").removeClass("fixed");
$(window).on('scroll load', function(){

	if ($(this).scrollTop() > 0) {
		$(".header").addClass("fixed");
		// $(".page-catalog .header-top").slideUp(200);
	} else {
		 $(".header").removeClass("fixed");
		 // $(".page-catalog .header-top").slideDown(200);
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



//fixed header and footer	
var hf = function(){
	var h_footer = $('#site-footer').height();
	var h_main = $('.main').height();
	$('.main').css({
		'marginBottom': h_footer
	});

}
 
$(window).on('load resize', hf);