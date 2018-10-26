/*!
* Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});

function handleMotionForMobile() {
	var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
	var mobile = windowWidth < 500;
	var config = {
		reset : true,
		mobile : true,
		vFactor : 0.1,
		//viewport : document.getElementById('mobile_stage')
	};
	if (mobile) {
		config.viewport = document.getElementById('mobile_stage');
	}
	window.sr = new scrollReveal(config);
}


$(document).ready(function() {
	handleMotionForMobile();
	$("#main_sample").click(function() {
		document.location.href = "http://cend.in/newyear/superman/Have-fun/Spiderman";
	});
	
	$("#open_app").click(function() {
		document.location.href = "http://cend.in/";
	});

});

