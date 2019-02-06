	// pagination
	    if ($('.js-hamburger').length) {

        $('.js-hamburger').click(function() {

             var nav = $('.header-mobile-nav')

             $(this).toggleClass('is-active');
             nav.toggleClass('header-mobile-nav--open');
             $("body").toggleClass('menu_open');

         }); 
    };

	if($('.js-promo-size').length){

		$('.js-promo-size').click(function(event) {
			event.preventDefault();
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});
	};	

    //promo page slider

    if ($('.js-poster-slider').length) {

        $('.js-poster-slider').slick({
        	  dots: false,
              arrow: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  slidesToScroll: 1,
        });
    };
