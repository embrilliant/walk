$(function(){


	var housePost;

	$(window).keydown(sthMove);

	function sthMove(event) {

		//for character
		// var cSKey = $("#characterSpeed").css({"left":"-=1"});
		var cSPost = $("#characterSpeed").position().left;
		var distance = 24;
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
					if (changeMod== -0) {
						$("#character").attr("src","images/walk/8.png");
					} 
					if (changeMod== -3) {
						$("#character").attr("src","images/walk/1.png");
					} 
					if (changeMod== -6) {
						$("#character").attr("src","images/walk/2.png");
					}
					if (changeMod== -9) {				
						$("#character").attr("src","images/walk/3.png");
					}
					if (changeMod== -12) {				
						$("#character").attr("src","images/walk/4.png");
					}
					if (changeMod== -15) {				
						$("#character").attr("src","images/walk/5.png");
					}
					if (changeMod== -18) {				
						$("#character").attr("src","images/walk/6.png");
					}
					if (changeMod== -21) {				
							$("#character").attr("src","images/walk/7.png");
					}
					//end of character

					break;
				case 37:
					$("#character").css({"left":"-=4"});
					//character animation
					$("#characterSpeed").css({"left":"-=1"});
					if (changeMod== -0) {
						$("#character").attr("src","images/walk/8fl.png");
					} 
					if (changeMod== -3) {
						$("#character").attr("src","images/walk/1fl.png");
					} 
					if (changeMod== -6) {
						$("#character").attr("src","images/walk/2fl.png");
					}
					if (changeMod== -9) {				
						$("#character").attr("src","images/walk/3fl.png");
					}
					if (changeMod== -12) {				
						$("#character").attr("src","images/walk/4fl.png");
					}
					if (changeMod== -15) {				
						$("#character").attr("src","images/walk/5fl.png");
					}
					if (changeMod== -18) {				
						$("#character").attr("src","images/walk/6fl.png");
					}
					if (changeMod== -21) {				
						$("#character").attr("src","images/walk/7fl.png");
					}
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

			if (housePost > -960 && housePost < 0) {

				//switch starts

				switch (event.which) {
					
					case 39:
						$("#vidBg").css({"left":"-=0.3"});

						$("#mountains").css({"left":"-=1"});
				
						$("#houses").css({"left":"-=3"});
						
						$("#trees").css({"left":"-=5"});

						$("#grass").css({"left":"-=6"});

						$("#ground").css({"left":"-=7"});

						//character
						$("#characterSpeed").css({"left":"-=1"});
						if (changeMod== -0) {
							$("#character").attr("src","images/walk/8.png");
						} 
						if (changeMod== -3) {
							$("#character").attr("src","images/walk/1.png");
						} 
						if (changeMod== -6) {
							$("#character").attr("src","images/walk/2.png");
						}
						if (changeMod== -9) {				
							$("#character").attr("src","images/walk/3.png");
						}
						if (changeMod== -12) {				
							$("#character").attr("src","images/walk/4.png");
						}
						if (changeMod== -15) {				
							$("#character").attr("src","images/walk/5.png");
						}
						if (changeMod== -18) {				
							$("#character").attr("src","images/walk/6.png");
						}
						if (changeMod== -21) {				
							$("#character").attr("src","images/walk/7.png");
						}
						//end of character

						break;

					case 37:
						$("#vidBg").css({"left":"+=0.3"});

						$("#mountains").css({"left":"+=1"});
				
						$("#houses").css({"left":"+=3"});
						
						$("#trees").css({"left":"+=5"});

						$("#grass").css({"left":"+=6"});

						$("#ground").css({"left":"+=7"});

						//character
						$("#characterSpeed").css({"left":"-=1"});
						if (changeMod== -0) {
							$("#character").attr("src","images/walk/8fl.png");
						} 
						if (changeMod== -3) {
							$("#character").attr("src","images/walk/1fl.png");
						} 
						if (changeMod== -6) {
							$("#character").attr("src","images/walk/2fl.png");
						}
						if (changeMod== -9) {				
							$("#character").attr("src","images/walk/3fl.png");
						}
						if (changeMod== -12) {				
							$("#character").attr("src","images/walk/4fl.png");
						}
						if (changeMod== -15) {				
							$("#character").attr("src","images/walk/5fl.png");
						}
						if (changeMod== -18) {				
							$("#character").attr("src","images/walk/6fl.png");
						}
						if (changeMod== -21) {				
							$("#character").attr("src","images/walk/7fl.png");
						}
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
						$("#vidBg").css({"left":"+=0.3"});

						$("#mountains").css({"left":"+=1"});
				
						$("#houses").css({"left":"+=3"});
						
						$("#trees").css({"left":"+=5"});

						$("#grass").css({"left":"+=6"});

						$("#ground").css({"left":"+=7"});
						
						//character
						$("#characterSpeed").css({"left":"-=1"});
						if (changeMod== -0) {
							$("#character").attr("src","images/walk/8fl.png");
						} 
						if (changeMod== -3) {
							$("#character").attr("src","images/walk/1fl.png");
						} 
						if (changeMod== -6) {
							$("#character").attr("src","images/walk/2fl.png");
						}
						if (changeMod== -9) {				
							$("#character").attr("src","images/walk/3fl.png");
						}
						if (changeMod== -12) {				
							$("#character").attr("src","images/walk/4fl.png");
						}
						if (changeMod== -15) {				
							$("#character").attr("src","images/walk/5fl.png");
						}
						if (changeMod== -18) {				
							$("#character").attr("src","images/walk/6fl.png");
						}
						if (changeMod== -21) {				
							$("#character").attr("src","images/walk/7fl.png");
						}
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
						$("#vidBg").css({"left":"-=0.3"});

						$("#vidBg").css({"left":"-=0.3"});

						$("#mountains").css({"left":"-=1"});
				
						$("#houses").css({"left":"-=3"});
						
						$("#trees").css({"left":"-=5"});

						$("#grass").css({"left":"-=6"});

						$("#ground").css({"left":"-=7"});
						
						//character
						$("#characterSpeed").css({"left":"-=1"});
						if (changeMod== -0) {
							$("#character").attr("src","images/walk/8.png");
						} 
						if (changeMod== -3) {
							$("#character").attr("src","images/walk/1.png");
						} 
						if (changeMod== -6) {
							$("#character").attr("src","images/walk/2.png");
						}
						if (changeMod== -9) {				
							$("#character").attr("src","images/walk/3.png");
						}
						if (changeMod== -12) {				
							$("#character").attr("src","images/walk/4.png");
						}
						if (changeMod== -15) {				
							$("#character").attr("src","images/walk/5.png");
						}
						if (changeMod== -18) {				
							$("#character").attr("src","images/walk/6.png");
						}
						if (changeMod== -21) {				
							$("#character").attr("src","images/walk/7.png");
						}
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
						if (changeMod== -0) {
							$("#character").attr("src","images/walk/8fl.png");
						} 
						if (changeMod== -3) {
							$("#character").attr("src","images/walk/1fl.png");
						} 
						if (changeMod== -6) {
							$("#character").attr("src","images/walk/2fl.png");
						}
						if (changeMod== -9) {				
							$("#character").attr("src","images/walk/3fl.png");
						}
						if (changeMod== -12) {				
							$("#character").attr("src","images/walk/4fl.png");
						}
						if (changeMod== -15) {				
							$("#character").attr("src","images/walk/5fl.png");
						}
						if (changeMod== -18) {				
							$("#character").attr("src","images/walk/6fl.png");
						}
						if (changeMod== -21) {				
							$("#character").attr("src","images/walk/7fl.png");
						}
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