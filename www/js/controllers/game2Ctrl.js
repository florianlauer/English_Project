
app.controller('game2Ctrl', function ($scope, bddFactory) {

		$scope.question =  bddFactory.expressions;
		$scope.question;
		console.log(bddFactory.expressions[5]);








	function selectQuestion() {



		var randId = Math.floor(Math.random() * expressions.length);


		while(questionPassed.indexOf(randId) != -1){

			randId = Math.floor(Math.random() * expressions.length);

		}

		questionPassed.push(randId);

		return expressions[randId];

	}


});
