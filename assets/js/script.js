$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});

$('.nav-link').hover(function () {
	if(!($(this).parent().hasClass("active"))) {
		$(".active").children(".underline").stop( true, true ).hide("slow");
	}
	}, function () {
		$(".active").children(".underline").stop( true, true ).show("slow");
	}
);

request.open('GET', 'https://covidvisualizer.com/api', true)
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.setRequestHeader("Access-Control-Allow-Credentials", "true");
request.setRequestHeader("Access-Control-Allow-Methods", "GET");
request.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  var country = data.countries;
  console.log(country);
  // var dailyLength = dailyData.length-1;
  // var todayData = dailyData[dailyData.length-1]
  // console.log(todayData);
  // var stateData = data.statewise;
  // var confirmed = data.statewise[0].confirmed
  // $("#total-confirmed").text(confirmed);
  // $("#total-active").text(stateData[0].active);
  // $("#total-recovered").text(stateData[0].recovered);
  // $("#total-deaths").text(stateData[0].deaths);
  // console.log("confirm",confirmed);
  // stateData.forEach(states => {
	// console.log(states.state);
  // });

}



var x = screen.width; 

var cw = $('.featured-product-card').width();
if(x>768)
	$('.featured-product-card').css({'height':cw+'px'});

$(function(){
	$(".dropdown").hover(            
		function() {
			$('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
			$(this).toggleClass('open');
			$('b', this).toggleClass("caret caret-up");       
			$(".active").children(".underline").hide("slow");         
		},
		function() {
			$('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
			$(this).toggleClass('open');
			$('b', this).toggleClass("caret caret-up"); 
			$(".active").children(".underline").show("slow");               
		});
	});