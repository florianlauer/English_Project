
app.controller('game2Ctrl', function ($scope, bddFactory) {

		var questions =  bddFactory.getExpressions();
		$scope.questions = questions;
		console.log(questions[0]);







	function selectQuestion() {



		var randId = Math.floor(Math.random() * expressions.length);


		while(questionPassed.indexOf(randId) != -1){

			randId = Math.floor(Math.random() * expressions.length);

		}

		questionPassed.push(randId);

		return expressions[randId];

	}


});
