$(function(){


	var housePost;

	$(window).keydown(sthMove);

	function sthMove(event) {

		//vars for character animation
		var cSPost = $("#charAnime").position().left;		
		// var gifImgs = [8, 1, 2, 3, 4, 5, 6, 7];
		var imgsF = [-875, 0, -125, -250, -375, -500, -625, -750];
		var imgsB = [-1875, -1000, -1125, -1250, -1375, -1500, -1625, -1750];
		var numOfImgs = imgsF.length;
		var charSpeed = 3;
		var distance = numOfImgs * charSpeed;
		var changeMod = cSPost % distance;
		//end of vars for character animation

		function characterFaceForward() {		
			$("#charAnime").css({"left":"+=1"});
			var i;
			for (i = 0; i < numOfImgs; i++) {
				var remainN = charSpeed * i;
				if (changeMod == remainN) {
					// $("#character").attr("src","images/walk/"+gifImgs[i]+".png");
					$("#character").css({"background-position":imgsF[i]+"px"});
				}
			}
		}

		function characterFaceBack() {			
			$("#charAnime").css({"left":"+=1"});
			var i;
			for (i = 0; i < numOfImgs; i++) {
				var remainN = charSpeed * i;
				if (changeMod == remainN) {
					// $("#character").attr("src","images/walk/"+gifImgs[i]+"fl.png");
					$("#character").css({"background-position":imgsB[i]+"px"});
				}
			}
		}

		function characterJump() {
			$("#character").stop().animate({bottom:"105px"}, 80, fallDown);
		}

		function fallDown() {
			$("#character").stop(true, true).animate({bottom:"50px"}, 75);
		}

		var characterPost = $("#character").position().left;
		
		if (characterPost <= -125 || characterPost < -64) {
			$("#character").css({"left":"-64px"});
		} else if (characterPost >= -64 && characterPost < 400) {
			
			switch (event.which) {
					
				case 39:
					$("#character").css({"left":"+=4"});
					characterFaceForward();
					break;

				case 37:
					$("#character").css({"left":"-=4"});
					characterFaceBack();		
					break;

				case 38:
					characterJump();
					break;

			}

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

			function moveBack() {
				$("#vidBg").css({"left":"+=0.3"});
				$("#mountains").css({"left":"+=1"});
				$("#houses").css({"left":"+=3"});
				$("#trees").css({"left":"+=5"});
				$("#grass").css({"left":"+=6"});
				$("#ground").css({"left":"+=7"});
			}

			if (housePost > -960 && housePost < 0) {

				switch (event.which) {
					
					case 39:
						moveForward();

						characterFaceForward();
						break;

					case 37:
						moveBack();

						characterFaceBack();
						break;

					case 38:
						characterJump();
						break;
	
				}

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
						// $("#character").attr("src","images/walk/7.png");
						$("#character").css({"background-position":"-750px"});

						if (housePost == -960) {
							$("#panel").fadeIn(200);
						}
						break;

					case 37:
						moveBack();

						characterFaceBack();

						$("#panel").stop().fadeOut();
						break;

					case 38:
						characterJump();
						break;

				}
			} else if (housePost >= 0) {

				switch (event.which) {	
					case 39:
						moveForward();
						
						characterFaceForward();
						break;

					case 37:
						$("#vidBg").css({"left":"0"});

						$("#mountains").css({"left":"-91"});

						$("#houses").css({"left":"0"});
								
						$("#trees").css({"left":"0"});

						$("#grass").css({"left":"0"});

						$("#ground").css({"left":"0"});

						$("#character").css({"left":"-=4"});
						
						characterFaceBack();
						break;

					case 38:
						characterJump();
						break;
						
				}
			} 
		}
		console.log(characterPost, housePost, groundPost, mountPost, changeMod, vidBgPost);
		
	} //end of sthMove function
	
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