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
			}
			else if($("input:radio[id='questionOneRadio2']").is(":checked")){
				wrongAnswer();
			}
			else if($("input:radio[id='questionOneRadio3']").is(":checked")){
				wrongAnswer();
			}
			else if($("input:radio[id='questionOneRadio4']").is(":checked")){
				wrongAnswer();
			}
			else if (timeLeft == -1) {
		        
		       noAnswer();
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
