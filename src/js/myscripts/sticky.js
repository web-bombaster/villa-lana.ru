// прилипающее меню с помощью jquery.sticky.js
$(window).load(function() {
	$('.header-menu').sticky({ topSpacing: 0 });
	$(window).resize(function() {
		$('nav').sticky({ topSpacing: 0 });
	});
});
