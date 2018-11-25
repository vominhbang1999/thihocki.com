// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
});

$(window).on('scroll', function(){
	if($(window).scrollTop()) {
		$('nav.navbar').addClass('maunen');
	}
	else {
		$('nav.navbar').removeClass('maunen');
	}
});
$('nav.menu-ngang .menutoggle').on('click', function(){
	$(this).parents('nav.menu-ngang').toggleClass('active')
})
$('nav.menu-ngang .menuhide').on('click', function(){
	$(this).parents('nav.menu-ngang').removeClass('active')
})
