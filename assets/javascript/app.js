// the questions begin
var triviaQuestions = [{
	question: "This musician is often referred to as the fifth Beatle.",
	answerList: ["Peter Framton", "Tom Jones", "Pete Best", "Chuck Yager"],
	answer: 2
},{
	question: "How many keys are on most baby grand pianos?",
	answerList: ["88", "102", "66", "122"],
	answer: 0
},{
	question: "When did the Beatles arrive to the U.S.?",
	answerList: ["1964", "1965", "1966", "1967"],
	answer: 0
},{
	question: "Which one of Prince's songs reached highest on the music charts?",
	answerList: ["Little Red Corvette", "1999", "When Dove's Cry", "Gold"],
	answer: 2
},{
	question: "Who was the lead singer of the band Queen?",
	answerList: ["Roger Clyne", "Jimmy Page", "Pete Townsand", "Freddie Mercury"],
	answer: 3
},{
	question: "Which band released the song, Hey There Delilah?",
	answerList: ["Plain White T's ", "The Police", "Kiss", "Rainbow"],
	answer: 0
},{
	question: "All Shook Up is a song that topped the U.S. Billboard Hot 100 in 1957. Who was the singer?",
	answerList: ["Tom Petty", "Elvis Presley", "Edger Allan Poe", "Jerry Lee Lewis"],
	answer: 1
},{
	question: "What musician won the Nobel Prize for Literature in 2016?",
	answerList: ["Kurt Cobain", "Neal Young", "Bob Dylan", "Dave Mustaine"],
	answer: 2
},{
	question: "What American singer-songwriter wrote and first recorded the song Blue Suede Shoes in 1955?",
	answerList: ["Elvis Presley", "Carl Perkins", "Nate King Cole", "BB King"],
	answer: 1
},{
	question: "Hallelujah is a song written by which Canadian recording artist?",
	answerList: ["Joni Mitchell", "Alanis Morissette", "Neil Young", "Leonard Cohen"],
	answer: 3
},{
	question: "What famous female singer died of alcohol poisoning in 2011 at the age of 27?",
	answerList: ["Amy Winehouse", "Tommy Keene", "Dan Peek", "Jani Lane"],
	answer: 0
},{
	question: "Which famous American musician was fatally shot by his father on April 1, 1984?",
	answerList: ["Harmonica Slim", "Marvin Gaye", "Lenny Breau", "Steve Goodman"],
	answer: 1
},{
	question: "In 2012, Psy got the record for most YouTube views ever, passing what artist who previously held the record?",
	answerList: ["Snoop Dog", "Prince", "Justin Timberlake", "Justin Bieber"],
	answer: 3
},{
	question: "Who is the most successful UK solo artist in the US?",
	answerList: ["Elton John", "Amy Winehouse", "Goerge Michael", "Carl Carlton"],
	answer: 0
},{
	question: "In the original Jackson family line up, how many brothers were there?",
	answerList: ["6", "4", "5", "3"],
	answer: 2
}];

// so now these are variables for the array and all that I want to happen taking the trivia game
//as you can see it is the main elements of the trivia game
var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15'];
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userselect;

// so this is the messages you'll get throughout the game
var messages = {
	correct: "Yes, correct!",
	incorrect: "Nope, that's not it.",
	endtime: "Out of time!!!!",
	finished: "OK! Let's check out your score!"
}

//will hide start button when clicked for a new game 
$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//will hide the startover button and create a new game
$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//when starting a new game will give you current scores also keep a running tally
function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

//this prompts new question and states correct answer when answered correctly 
function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}
//this is the timer start for each new question, answering the right question stops timer 
function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}
//shows the timer
function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 3000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 3000);
	}	
}
//the running tally of the games you've played as well as correct or incorrect questions answered
function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	//the messages desplayed throughout the game
	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}