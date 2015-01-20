$(function(){


	var housePost;

	$(window).keydown(sthMove);

	function sthMove(event) {

		//for character
		// var cSKey = $("#characterSpeed").css({"left":"-=1"});
		var cSPost = $("#characterSpeed").position().left;		
		// Changes: adding loop 21Jan2015
		var gifImgs = [8, 1, 2, 3, 4, 5, 6, 7];
		var numOfImgs = gifImgs.length;
		var charSpeed = -3;
		var distance = numOfImgs * charSpeed;
		//end of Changes
		var changeMod = cSPost % distance;
		//end of for character

		var characterPost = $("#character").position().left;
		
		if (characterPost <= -125 || characterPost < -64) {
			$("#character").css({"left":"-64px"});
		} else if (characterPost >= -64 && characterPost < 400) {
			//switch starts
			switch (event.which) {
					
				case 39:
					$("#character").css({"left":"+=4"});
					//character
					$("#characterSpeed").css({"left":"-=1"});
					// image bunch loop
					var i;
					for (i = 0; i < numOfImgs; i++) {
						var remainN = charSpeed * i;
						if (changeMod == remainN) {
							$("#character").attr("src","images/walk/"+gifImgs[i]+".png");
						}
					}
					// image bunch loop ends
					//end of character
					break;

				case 37:
					$("#character").css({"left":"-=4"});
					//character animation
					$("#characterSpeed").css({"left":"-=1"});
					// image bunch loop
					var i;
					for (i = 0; i < numOfImgs; i++) {
						var remainN = charSpeed * i;
						if (changeMod == remainN) {
							$("#character").attr("src","images/walk/"+gifImgs[i]+"fl.png");
						}
					}
					// image bunch loop ends
					//end of character		
					break;

				case 38:
					$("#character").stop().animate({bottom:"105px"}, 75, fallDown);
					break;
				
				default: return; // exit this handler for other keys
			}
			event.preventDefault(); // prevent the default action (scroll / move caret)
			//switch ends

		} else {

			var vidBgPost = $("#vidBg").position().left;
			var mountPost = $("#mountains").position().left;
			housePost = $("#houses").position().left;
			var treePost = $("#trees").position().left;
			var grassPost = $("#grass").position().left;
			var groundPost = $("#ground").position().left;

			function moveForward() {
				$("#vidBg").css({"left":"-=0.3"});
				$("#mountains").css({"left":"-=1"});			
				$("#houses").css({"left":"-=3"});				
				$("#trees").css({"left":"-=5"});
				$("#grass").css({"left":"-=6"});
				$("#ground").css({"left":"-=7"});
			}

			function moveBackward() {
				$("#vidBg").css({"left":"+=0.3"});
				$("#mountains").css({"left":"+=1"});
				$("#houses").css({"left":"+=3"});
				$("#trees").css({"left":"+=5"});
				$("#grass").css({"left":"+=6"});
				$("#ground").css({"left":"+=7"});
			}

			if (housePost > -960 && housePost < 0) {

				//switch starts
				switch (event.which) {
					
					case 39:
						moveForward();

						//character
						$("#characterSpeed").css({"left":"-=1"});
						// image bunch loop
						var i;
						for (i = 0; i < numOfImgs; i++) {
							var remainN = charSpeed * i;
							if (changeMod == remainN) {
								$("#character").attr("src","images/walk/"+gifImgs[i]+".png");
							}
						}
						// image bunch loop ends
						//end of character
						break;

					case 37:
						moveBackward();

						//character
						$("#characterSpeed").css({"left":"-=1"});
						// image bunch loop
						var i;
						for (i = 0; i < numOfImgs; i++) {
							var remainN = charSpeed * i;
							if (changeMod == remainN) {
								$("#character").attr("src","images/walk/"+gifImgs[i]+"fl.png");
							}
						}
						// image bunch loop ends
						//end of character
						break;

					case 38:
						$("#character").stop().animate({bottom:"105px"}, 75, fallDown);
						break;
					
					default: return; // exit this handler for other keys
				}
				event.preventDefault(); // prevent the default action (scroll / move caret)

				//switch ends

			} else if (housePost <= -960) {

				switch (event.which) {
					case 39:
						$("#vidBg").css({"left":"-96"});

						$("#mountains").css({"left":"-411"});
				
						$("#houses").css({"left":"-960"});
						
						$("#trees").css({"left":"-1600"});

						$("#grass").css({"left":"-1920"});

						$("#ground").css({"left":"-2240"});
						//character
						$("#character").attr("src","images/walk/7.png");

						if (housePost == -960) {
							$("#panel").fadeIn(200);
						}
						break;

					case 37:
						moveBackward();

						//character
						$("#characterSpeed").css({"left":"-=1"});
						// image bunch loop
						var i;
						for (i = 0; i < numOfImgs; i++) {
							var remainN = charSpeed * i;
							if (changeMod == remainN) {
								$("#character").attr("src","images/walk/"+gifImgs[i]+"fl.png");
							}
						}
						// image bunch loop ends
						//end of character

						$("#panel").stop().fadeOut();
						break;

					case 38:
						$("#character").stop().animate({bottom:"105px"}, 75, fallDown);
						break;

				}
			} else if (housePost >= 0) {

				switch (event.which) {	
					case 39:
						moveForward();
						
						//character
						$("#characterSpeed").css({"left":"-=1"});
						// image bunch loop
						var i;
						for (i = 0; i < numOfImgs; i++) {
							var remainN = charSpeed * i;
							if (changeMod == remainN) {
								$("#character").attr("src","images/walk/"+gifImgs[i]+".png");
							}
						}
						// image bunch loop ends
						//end of character
						break;

					case 37:
						$("#vidBg").css({"left":"0"});

						// mountPost = -91;
						$("#mountains").css({"left":"-91"});

						// housePost = 0;
						$("#houses").css({"left":"0"});
								
						// treePost = 0;
						$("#trees").css({"left":"0"});

						// grassPost = 0;
						$("#grass").css({"left":"0"});

						// groundPost = 0;
						$("#ground").css({"left":"0"});

						$("#character").css({"left":"-=4"});
						//character animation
						$("#characterSpeed").css({"left":"-=1"});
						// image bunch loop
						var i;
						for (i = 0; i < numOfImgs; i++) {
							var remainN = charSpeed * i;
							if (changeMod == remainN) {
								$("#character").attr("src","images/walk/"+gifImgs[i]+"fl.png");
							}
						}
						// image bunch loop ends
						//end of character
						break;

					case 38:
						$("#character").stop().animate({bottom:"105px"}, 75, fallDown);
						break;
						
				}
			} 
		}
		console.log(characterPost, housePost, groundPost, mountPost, changeMod, vidBgPost);
		
	} //end of sthMove function

	/* $(window).keyup(function() {

		$("#character").stop().animate({bottom:"50px"});

	}); */

	function fallDown() {
		$("#character").stop(true, true).animate({bottom:"50px"}, 75);
	}
	
	//fortune panel starts
	var howOpt;

	$("button#butNext").click(
		function(){
			$("#preHappen").css({"display":"none"});
			$("#happen").css({"display":"block"});
  		}
	);

	$("button#fortune").click(fortuneCheck);

	function fortuneCheck() {
		//get value
		howOpt = document.getElementById("howOpt").value;
		//end of get value

		$("#result").text("");
		setTimeout(randomChance, 150);

		console.log(howOpt);
	}

	function randomChance() {

		var n = Math.floor((Math.random() * 100) + 1);

		if (howOpt < 34) {

			if (n>=80) {

				$("#result").text("Yes.");

			} else if (n<80 && n>=60) {

				$("#result").text("Maybe (50% chance yes and 50% chance no).");

			} else {

				$("#result").text("No.");

			}
		} else if (howOpt >= 34 && howOpt <= 68) {

			if (n>=70) {

				$("#result").text("Yes.");

			} else if (n<70 && n>30) {

				$("#result").text("Maybe (50% chance yes and 50% chance no).");

			} else {

				$("#result").text("No.");

			}

		} else {

			if (n>=50) {

				$("#result").text("Yes.");

			} else if (n<50 && n>=25) {

				$("#result").text("Maybe (50% chance yes and 50% chance no).");

			} else {

				$("#result").text("No.");

			}

		}
	}
	// ends of fortune panel

});