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
		var elem = document.getElementById('some_div');
		var timerId = setInterval(countdown, 1000);

		function countdown() {
		    if (timeLeft == -1) {
		        clearTimeout(timerId);
		        doSomething();

		    
		      
		    } else {
		        elem.innerHTML = timeLeft + ' seconds remaining';
		        timeLeft--;
		    }
		}

		function doSomething() {
			$("#currentQuestion").empty();		    	
		    $("#currentQuestion").append($("#answerOne").html());		    		   
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
