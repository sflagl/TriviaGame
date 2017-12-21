var right = 0;
var wrong = 0;
var unanswered = 0;
var wrongTally = 0;
var rightTally = 0;
var unansweredTally = 0;


$(document).ready(function() {
    $('#questions').hide();
	
});



$("#startBtn").click(function(){
		
        $("#currentQuestion").append($("#questionOne").html());
        $('#startBtn').hide();


        var timeLeft = 3;
  
		var elem = document.getElementById('counter');
		var timerId = setInterval(countdown, 1000);

		
		function countdown() {
			if($("input:radio[id='questionOneRadio1']").is(":checked")){
				rightAnswer();
				resultTimer();
			}
			else if($("input:radio[id='questionOneRadio2']").is(":checked")){
				wrongAnswer();
				resultTimer();
			}
			else if($("input:radio[id='questionOneRadio3']").is(":checked")){
				wrongAnswer();
				resultTimer();
			}
			else if($("input:radio[id='questionOneRadio4']").is(":checked")){
				wrongAnswer();
				resultTimer();
			}
			else if (timeLeft == -1) {
		        
		       noAnswer();
		       resultTimer();
		    } 
		    else {
		        elem.innerHTML = timeLeft + ' seconds remaining';
		        timeLeft--;
		    }
		}

		function noAnswer() {
			$("#currentQuestion").empty();		    	
		    $("#currentQuestion").append($("#answerOne").html());
		    clearTimeout(timerId);		    		   
		}

		function rightAnswer(){
			$("#currentQuestion").empty();		    	
			 	$("#currentQuestion").append($("#answerTwo").html());
			 	clearTimeout(timerId);	
		}

		function wrongAnswer(){
			$("#currentQuestion").empty();		    	
			 	$("#currentQuestion").append($("#answerThree").html());
			 	clearTimeout(timerId);	
		}


    });


		function resultTimer(){
			var timeLef = 3;
			var ele = document.getElementById('some_div2');
			var timerI = setInterval(countdown2, 1000);

			function countdown2() {
			    if (timeLef == -1) {
			        clearTimeout(timerI);
			        doSomething2();
			    } else {
			        ele.innerHTML = timeLef + ' seconds remaining';
			        timeLef--;
			    }
			}

			function doSomething2() {
			    nextQuestion();
			}
		}



		function nextQuestion(){
			$("#currentQuestion").empty();		    	
			 	$("#currentQuestion").append($("#questionTwo").html());


			 // 	var timeLeft = 3;
  
				// var elem = document.getElementById('counter');
				// var timerId = setInterval(countdown, 1000);

				
				// function countdown() {
				// 	if($("input:radio[id='questionTwoRadio1']").is(":checked")){
				// 		rightAnswer();
				// 		resultTimer2();
				// 	}
				// 	else if($("input:radio[id='questionTwoRadio2']").is(":checked")){
				// 		wrongAnswer();
				// 		resultTimer2();
				// 	}
				// 	else if($("input:radio[id='questionTwoRadio3']").is(":checked")){
				// 		wrongAnswer();
				// 		resultTimer2();
				// 	}
				// 	else if($("input:radio[id='questionTwoRadio4']").is(":checked")){
				// 		wrongAnswer();
				// 		resultTimer2();
				// 	}
				// 	else if (timeLeft == -1) {
				        
				//        noAnswer();
				//        resultTimer2();
				//     } 
				//     else {
				//         elem.innerHTML = timeLeft + ' seconds remaining';
				//         timeLeft--;
				//     }
				// }

				// function noAnswer() {
				// 	$("#currentQuestion").empty();		    	
				//     $("#currentQuestion").append($("#answerTwoOne").html());
				//     clearTimeout(timerId);		    		   
				// }

				// function rightAnswer(){
				// 	$("#currentQuestion").empty();		    	
				// 	 	$("#currentQuestion").append($("#answerTwoTwo").html());
				// 	 	clearTimeout(timerId);	
				// }

				// function wrongAnswer(){
				// 	$("#currentQuestion").empty();		    	
				// 	 	$("#currentQuestion").append($("#answerTwoOne").html());
				// 	 	clearTimeout(timerId);	
				// }

		}


		// function resultTimer2(){
		// 	var timeLef = 3;
		// 	var ele = document.getElementById('some_div2');
		// 	var timerI = setInterval(countdown2, 1000);

		// 	function countdown2() {
		// 	    if (timeLef == -1) {
		// 	        clearTimeout(timerI);
		// 	        doSomething2();
		// 	    } else {
		// 	        ele.innerHTML = timeLef + ' seconds remaining';
		// 	        timeLef--;
		// 	    }
		// 	}

		// 	function doSomething2() {
		// 	    nextQuestion();
		// 	}
		// }

		





// Function question(){
// if(clicked answer = right answer){

// 	show(“you are right”);
// 	Start 10 sec timer
// 	Move to question 2
// 	correct++;

// } if else(clicked answer = wrong answer){

// 	show(“you are wrong”);
// 	Start 10 sec timer
// 	Move to question 2
// 	wrong++

// } else(no click = show answer){

// 	show(“nope”);
// 	Start 10 sec timer
// 	unanswered++	

// }
