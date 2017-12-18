var right = 0;
var wrong = 0;
var unanswered = 0;
var wrongTally = 0;
var rightTally = 0;
var unansweredTally = 0;


$(document).ready(function() {
    $('#questionOne').hide();
	$('#questionTwo').hide();
	$('#questionThree').hide();
	$('#questionFour').hide();
	console.log('working');
});



$("#startBtn").click(function(){
        $("#currentQuestion").append($("#questionOne").html());
        $('#startBtn').hide();
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
