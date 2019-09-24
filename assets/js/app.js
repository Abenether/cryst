

var random_result;

var lost = 0;

var win = 0;

var previous = 0;






var resetAndStart = function () {



	$(".crystals").empty();



	var images = [

			'https://www.mining.com/wp-content/uploads/2019/09/48202790487_6772d18874_k.jpg', 

			'http://www.lifegem.com/images/mainLG4_1380x470.jpg', 

			'https://i0.wp.com/www.sirfnews.com/wp-content/uploads/2019/06/blood-diamond.jpg?fit=1500%2C609&ssl=1', 

			'https://dailyfintech.com/wp-content/uploads/2018/05/conflict-diamond_ginger-snaps-org_.jpg'];

		

	random_result = Math.floor(Math.random() * 69 ) + 30; 





	$("#result").html('Random Result: ' + random_result);



	for(var i = 0; i < 4; i++){



		var random = Math.floor(Math.random() * 10) + 2;



		var crystal = $("<div>");

			crystal.attr({

				"class": 'crystal',

				"data-random": random

			});

			crystal.css({

				"background-image":"url('" + images[i] + "')",

				"background-size":"cover"



			});





		$(".crystals").append(crystal);



	}



	$("#previous").html("Total Score: " + previous);



}





resetAndStart();







$(document).on('click', ".crystal", function () {



	var num = parseInt($(this).attr('data-random'));



	previous += num;





	$("#previous").html("Total score: " + previous);



	console.log(previous);



	if(previous > random_result){



		lost++;



		$("#lost").html("oops You lost: " + lost);



		previous = 0;



		resetAndStart();



	} 

	else if(previous === random_result){



		win++;



		$("#win").html("yay You win: " + win);



		previous = 0;



		resetAndStart();



	}



});

