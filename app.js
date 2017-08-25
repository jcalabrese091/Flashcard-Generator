var basic = require('./BasicCard.js');
var cloze= require('./ClozeCard.js');
var questions = require('./Questions.js').questions;
var inquirer = require('inquirer');
var correct = 0;
var wrong = 0;
var flashCard = 0;


var clozeDelete = [];

for (var i=0; i<questions.length; i++){
	var questionGen = new cloze.ClozeCard(questions[i].full, questions[i].cloze);
	clozeDelete.push(questionGen);
}
function questionPopulate (){
	inquirer.prompt([
		{
			type: 'input',
			message: clozeDelete[flashCard].partial + '\nAnswer: ',
			name: 'userInput'		
		}
	]).then(function (answer){
		if (answer.userInput.toLowerCase() == clozeDelete[flashCard].cloze.toLowerCase()){
			correct++;
			console.log('Great Job, that\'s correct');
		} else {
			wrong++;
			console.log('Sorry that is incorrect');
		}
		if (flashCard < clozeDelete.length -1){
			flashCard++;
			questionPopulate();
		}

	})
}
questionPopulate();