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

    function showMoreText() {
    	$('.show-more').on('click', function(){
	    	$(this).parents('.short-block').hide()
	    	$(this).parents('.toggle-block').find('.full-block').show()

	    	return false;
	    });

	    $('.navbar__close, .navbar__overlay').on('click', function(){
	    	$('.navbar').removeClass('open');
	    	
	    	return false;
	    });
    }
    showMoreText();

     $('.accordion-mobile__toggle').on('click', function(){
    	$(this).toggleClass('active').parents('.accordion-mobile').find('.accordion-mobile__body').slideToggle(200);
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