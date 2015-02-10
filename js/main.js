$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1500);
			return false;
		}
	}
});

var previousScroll = 0,
    maxScroll = 100;
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > maxScroll) {
        	$('body').addClass('scroll');
            if (currentScroll < previousScroll) {
                $('body').addClass('scrollup');
            } else {
                $('body').removeClass('scrollup');
                
            }
        } else {
             $('body').removeClass('scroll');
             if(currentScroll < maxScroll) {
                $('body').removeClass('scrollup');
             }
        }
        previousScroll = currentScroll;
});