(function($) {	
	"use strict";	
	
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	

	

	if($("#contact-form").length){
	    $("#contact-form").validate({
	        submitHandler: function(form) {
	          var form_btn = $(form).find('button[type="submit"]');
	          var form_result_div = '#form-result';
	          $(form_result_div).remove();
	          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
	          var form_btn_old_msg = form_btn.html();
	          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
	          $(form).ajaxSubmit({
	            dataType:  'json',
	            success: function(data) {
	              if( data.status = 'true' ) {
	                $(form).find('.form-control').val('');
	              }
	              form_btn.prop('disabled', false).html(form_btn_old_msg);
	              $(form_result_div).html(data.message).fadeIn('slow');
	              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
	            }
	          });
	        }
	    });
	}

	//Seleccionar fecha
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}

	//Elementos de animación
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',     
			animateClass: 'animated', 
			offset:       0,         
			mobile:       false,      
			live:         true      
		  }
		);
		wow.init();
	}

	// Hero (actualidad) Slider
	
	$('.hero-slider').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 300,
		dots: true,
		arrows: true,
		fade: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: false
				}
			}
		]
	});
	

	// Elemento del slider

	$('.items-container').slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 525,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});


/* cuando el documento se cargue */

	$(window).on('load', function() {

		// añadir funciones

		(function ($) {
			handlePreloader();
			datepicker();
		})(jQuery);
	});


})(window.jQuery);