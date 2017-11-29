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
	answerList: ["lain White T's ", "The Police", "Kiss", "Rainbow"],
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

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15'];
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userselect;

var messages = {
	correct: "Yes, correct!",
	incorrect: "Nope, that's not it.",
	endtime: "Out of time!!!!",
	finished: "OK! Let's check out your score!"
}