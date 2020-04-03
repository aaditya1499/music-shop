$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});

$('.nav-link').hover(function () {
		console.log("called");
		if(!($(this).parent().hasClass("active"))) {
			$(".active").children(".underline").hide("slow");
		}
	}, function () {
		$(".active").children(".underline").show("slow");
	}
);

// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://api.covid19india.org/data.json', true)

// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   console.log(data);
//   var stateData = data.statewise;
//   console.log(stateData);
//   stateData.forEach(states => {
// 	console.log(states.state);
//   });
// }

// // Send request
// request.send()



var x = screen.width; 

var cw = $('.featured-product-card').width();
if(x>768)
	$('.featured-product-card').css({'height':cw+'px'});
