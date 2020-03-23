$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});

var cw = $('.featured-product-card').width();
$('.featured-product-card').css({'height':cw+'px'});