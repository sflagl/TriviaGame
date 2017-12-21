var right = 0;
var wrong = 0;
var unanswered = 0;



$(document).ready(function() {
    $('#questions').hide();
	
});



 $("#startBtn").click(function(){
		
        $("#currentQuestion").append($("#questionOne").html());
        $('#startBtn').hide();


        var timeLeft = 10;
  
		var elem = document.getElementById('counter');
		var timerId = setInterval(countdown, 1000);

		
		function countdown() {
			if($("input:radio[id='questionOneRadio1']").is(":checked")){
				rightAnswer();
				resultTimer();
				right++;
				$('.total-right').html(right);
			}
			else if($("input:radio[id='questionOneRadio2']").is(":checked")){
				wrongAnswer();
				resultTimer();
				wrong++;
				$('.total-wrong').html(wrong);
			}
			else if($("input:radio[id='questionOneRadio3']").is(":checked")){
				wrongAnswer();
				resultTimer();
				wrong++;
				$('.total-wrong').html(wrong);
			}
			else if($("input:radio[id='questionOneRadio4']").is(":checked")){
				wrongAnswer();
				resultTimer();
				wrong++;
				$('.total-wrong').html(wrong);
			}
			else if (timeLeft == -1) {
		        
		       noAnswer();
		       resultTimer();
		       unanswered++;
		       $('.total-unanswered').html(wrong);
		    } 
		    else {
		        elem.innerHTML = timeLeft + ' seconds remaining';
		        timeLeft--;
		    }
		}

		function noAnswer() {
			$("#currentQuestion").empty();		    	
		    $("#currentQuestion").append($("#answerTwo").html());
		    clearTimeout(timerId);		    		   
		}

		function rightAnswer(){
			$("#currentQuestion").empty();		    	
			 	$("#currentQuestion").append($("#answerOne").html());
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
			        ele.innerHTML = 'Next question in ' + timeLef + ' seconds';
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


			var timeLeft = 10;
	  
			var elem = document.getElementById('counter');
			var timerId = setInterval(countdown, 1000);

			
			function countdown() {
				if($("input:radio[id='questionTwoRadio1']").is(":checked")){
					rightAnswer();
					resultTimer2();
					right++;
					$('.total-right').html(right);
				}
				else if($("input:radio[id='questionTwoRadio2']").is(":checked")){
					wrongAnswer();
					resultTimer2();
					wrong++;
					$('.total-wrong').html(wrong);
				}
				else if($("input:radio[id='questionTwoRadio3']").is(":checked")){
					wrongAnswer();
					resultTimer2();
					wrong++;
					$('.total-wrong').html(wrong);
				}
				else if($("input:radio[id='questionTwoRadio4']").is(":checked")){
					wrongAnswer();
					resultTimer2();
					wrong++;
					$('.total-wrong').html(wrong);
				}
				else if (timeLeft == -1) {
			        
			       noAnswer();
			       resultTimer2();
			       unanswered++;
					$('.total-unanswered').html(unanswered);
			    } 
			    else {
			        elem.innerHTML = timeLeft + ' seconds remaining';
			        timeLeft--;
			    }
			}

			function noAnswer() {
				$("#currentQuestion").empty();		    	
			    $("#currentQuestion").append($("#answerTwoTwo").html());
			    clearTimeout(timerId);		    		   
			}

			function rightAnswer(){
				$("#currentQuestion").empty();		    	
				 	$("#currentQuestion").append($("#answerTwoOne").html());
				 	clearTimeout(timerId);	
			}

			function wrongAnswer(){
				$("#currentQuestion").empty();		    	
				 	$("#currentQuestion").append($("#answerTwoThree").html());
				 	clearTimeout(timerId);	
			}
		}


		function resultTimer2(){
			var timeLef = 3;
			var ele = document.getElementById('some_div2');
			var timerI = setInterval(countdown2, 1000);

			function countdown2() {
			    if (timeLef == -1) {
			        clearTimeout(timerI);
			        doSomething2();
			    } else {
			        ele.innerHTML = 'Next question in ' + timeLef + ' seconds';
			        timeLef--;
			    }

			}

			function doSomething2() {
			    nextQuestion2();
			}
		}


		function nextQuestion2(){
			 $("#currentQuestion").empty();
			 $("#currentQuestion").append($("#questionThree").html());


			var timeLeft = 10;
	  
			var elem = document.getElementById('counter');
			var timerId = setInterval(countdown, 1000);

			
			function countdown() {
				if($("input:radio[id='questionThreeRadio1']").is(":checked")){
					rightAnswer();
					resultTimer3();
					right++;
					$('.total-right').html(right);
				}
				else if($("input:radio[id='questionThreeRadio2']").is(":checked")){
					wrongAnswer();
					resultTimer3();
					wrong++;
					$('.total-wrong').html(wrong);
				}
				else if($("input:radio[id='questionThreeRadio3']").is(":checked")){
					wrongAnswer();
					resultTimer3();
					wrong++;
					$('.total-wrong').html(wrong);
				}
				else if($("input:radio[id='questionThreeRadio4']").is(":checked")){
					wrongAnswer();
					resultTimer3();
					wrong++;
					$('.total-wrong').html(wrong);
				}
				else if (timeLeft == -1) {
			        
			       noAnswer();
			       resultTimer3();
			       unanswered++;
					$('.total-unanswered').html(unanswered);
			    } 
			    else {
			        elem.innerHTML = timeLeft + ' seconds remaining';
			        timeLeft--;
			    }
			}

			function noAnswer() {
				$("#currentQuestion").empty();		    	
			    $("#currentQuestion").append($("#answerThreeTwo").html());
			    clearTimeout(timerId);		    		   
			}

			function rightAnswer(){
				$("#currentQuestion").empty();		    	
				 	$("#currentQuestion").append($("#answerThreeOne").html());
				 	clearTimeout(timerId);	
			}

			function wrongAnswer(){
				$("#currentQuestion").empty();		    	
				 	$("#currentQuestion").append($("#answerThreeThree").html());
				 	clearTimeout(timerId);	
			}
		}


		function resultTimer3(){
			var timeLef = 3;
			var ele = document.getElementById('some_div2');
			var timerI = setInterval(countdown2, 1000);

			function countdown2() {
			    if (timeLef == -1) {
			        clearTimeout(timerI);
			        doSomething2();
			    } else {
			        ele.innerHTML = 'Next question in ' + timeLef + ' seconds';
			        timeLef--;
			    }

			}

			function doSomething2() {
			    nextQuestion3();
			}
		}


		function nextQuestion3(){
			 $("#currentQuestion").empty();
			  $("#currentQuestion").append($("#gameResults").html());


		}




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
