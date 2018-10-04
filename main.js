
function getScore(form){

// create a new array with questions and answers 

	var AnswersAndObjects = new Array();
	AnswersAndObjects[0] = ["Russia", form.question1];

	AnswersAndObjects[1] = ["Christianity", form.question2];

	AnswersAndObjects[2] = ["China", form.question3]; 

	AnswersAndObjects[3] = ["Chinese", form.question4];

	AnswersAndObjects[4] = ["Pacific Ocean", form.question5];

	AnswersAndObjects[5] = ["Antartic Desert", form.question6];
	var score = 0;
	for (i=0; i < AnswersAndObjects.length; i++) {
		currQuestionObject = AnswersAndObjects[i][1];
		for (j=0; j<currQuestionObject.length; j++){

			//check if the answer selceted equal the correct answer from the array
			if (currQuestionObject[j].checked && currQuestionObject[j].value == AnswersAndObjects[i][0]){
				// if the correct answer ws selected then user score will increase
				score++;
				break;
			}
		}
	} 

	form.mark.value = score + "/6";
}




