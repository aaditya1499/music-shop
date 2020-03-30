$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});

$('.nav-link').hover(function () {
		console.log("called");
		$(".active").children(".underline").hide("slow");
	}, function () {
		$(".active").children(".underline").show("slow");
	}
);

var x = screen.width; 

var cw = $('.featured-product-card').width();
if(x>768)
	$('.featured-product-card').css({'height':cw+'px'});