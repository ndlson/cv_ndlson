(function($) {
	"use strict";
	$(document).ready(function() {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 1,
		      spaceBetween: 30,
		      loop: true,
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
    });
		$('.banner').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    navText: ['<i class="icofont-hand-drawn-alt-left"></i>', '<i class="icofont-hand-drawn-alt-right"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
		$('.list-item-team').owlCarousel({
		    loop:true,
		    margin:32,
		    nav:true,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:4
		        }
		    }
		});
		$('.list-people').owlCarousel({
		    loop:true,
		    margin:32,
		    nav:false,
		    dots: true,
		    center: true,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:3
		        }
		    }
		});
		$('.newly-slider').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:3
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:6
		        }
		    }
		});
		


		$( '.field-input input' ).on( 'focus', function() {
			$( this ).parent().addClass( 'active' );
		});
		$( '.field-input textarea' ).on( 'focus', function() {
			$( this ).parent().addClass( 'active' );
		});
		$( '.field-input input' ).on( 'blur', function() {
			var val = $( this ).val();
			if (val == '') {
				$( this ).parent().removeClass( 'active' );
			}
		});
		$( '.field-input textarea' ).on( 'blur', function() {
			
			var val = $( this ).val();
			if (val == '') {
				$( this ).parent().removeClass( 'active' );
			}
		});
		
		$( '.popup-callback' ).on( 'click', function(event) {
            event.preventDefault();
            var id = $( this ).attr( 'href' );
            $( id ).addClass( 'open' );
        });

        $(".faq-title").click(function () {
            $(this).parents( '.faq-item' ).find( '.faq-content' ).slideToggle("open");
            $(this).parents( '.faq-item' ).find( '.top' ).toggleClass("open");
            $( '.faq-title').not( this ).parents( '.faq-item' ).find( '.faq-content' ).slideUp('open');
            $( '.faq-title').not( this ).parents( '.faq-item' ).find( '.top' ).removeClass('open');

        });


        $('.custom-count').each(function () {
		  var $this = $(this);
		  jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
		    duration: 4000,
		    easing: 'swing',
		    step: function (now) {
		      $this.text(Math.ceil(now));
		    }
		  });
		});



        $( '.popup-close' ).on( 'click', function(event) {
            event.preventDefault();
            $( this ).parents( '.popup-modal' ).removeClass( 'open' );
        });
        $( '.popup-bg' ).on( 'click', function() {
			$( this ).parent().removeClass( 'open' );
		});
       
        $('.back-to-top').click(function(event) {
            $('html,body').animate({scrollTop: 0},1400);
        });


        /*  [ Tabs ]
        - - - - - - - - - - - - - - - - - - - - */
        $('.exclusive-head li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('.exclusive-head li').removeClass('active');
            $('.exclusive-inner').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
        document.getElementById("defaultOpen").click();

        
        $('.tab-head li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('.tab-head li').removeClass('active');
            $('.tab-inner').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
        document.getElementById("defaultOpen").click();


        $('.licence-head li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('.licence-head li').removeClass('active');
            $('.licence-inner').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
        document.getElementById("defaultOpen2").click();

        
	});

})(jQuery);
