
app.controller('game2Ctrl', function ($scope, $state, bddFactory, $ionicPopup) {

		var questions =  bddFactory.getExpressions();
		$scope.questions = questions;
		var questionPassed = [];
		var bottomPassed;
		$scope.answerRem = 6;
		$scope.remaining = 10;
		$scope.question = selectQuestion();
		$scope.score = 0;
		console.log($scope.question.answers[0]);
		var i=0;
		$scope.answer = $scope.question.answers[0];

		/*
		On selectionne une phrase en langage1
		On selectionne la phrase correspondante en langage 2
		On selectionne 4 autres phrases !!différentes!! en langage2, on les fous dans un tableau
		Si c'est bon : OK
		Sinon : On prend une phrase au hasard dans les 4 restantes

		*/




		$scope.answerRight = function answerRight(u) {

			if($scope.remaining > 0){
			if (i<5) {
				i++;
				$scope.answer = $scope.question.answers[i];
				console.log($scope.question.answers[i]);
				if ($scope.question.answers[i].localeCompare($scope.question.question.french) == 0 && u==1) {
					console.log('bravo pd');
					$scope.score = $scope.score +6;
					message = {
			     template: ' <p style="font-weight : bold; border-bottom : 1px green solid;";> <span class="icon ion-checkmark-round" style = "color: green; font-weight : 60px; font-size : 30px;"></span> ' + 'Congrats' + '</p> <br/>',

			   };
				 $scope.remaining--;
				 $scope.question = selectQuestion();
				 $scope.answer = $scope.question.answers[0];
				}
				else if ($scope.question.answers[i].localeCompare($scope.question.question.french) == 0 && u==0) {
					message = {
			     template: ' <p style="font-weight : bold; border-bottom : 1px red solid;";> <span class="icon ion-close-round" style = "color: red; font-weight : 60px; font-size : 30px;"/></span> ' + 'That was the good answer :-('  + '</p> <br/><p> <span style="text-decoration: line-through;"">',

			   };
					$ionicPopup.alert(message);
					$scope.score = $scope.score -1;
					$scope.remaining--;
 				 	$scope.question = selectQuestion();
 				 	$scope.answer = $scope.question.answers[0];
				}
				}
				else {
					console.log('t nul');
					$scope.score = $scope.score -1;
					message = {
			     template: ' <p style="font-weight : bold; border-bottom : 1px red solid;";> <span class="icon ion-close-round" style = "color: red; font-weight : 60px; font-size : 30px;"/></span> ' + 'Shit'  + '</p> <br/><p> <span style="text-decoration: line-through;"">',

			   };
				}
				$ionicPopup.alert(message);

			}else {
				var endMessage = {
				 template: ' <p style="font-weight : bold; border-bottom : 1px green solid;";> <span class="icon ion-ios-star" style = "color: green; font-weight : 60px; font-size : 30px;"></span> CONGRATULATIONS <span class="icon ion-ios-star" style = "color: green; font-weight : 60px; font-size : 30px;"></span></p><p>SCORE : '+ $scope.score +'</p>',

			 };

			$ionicPopup.alert(endMessage);
 	    $state.go('rules_2');
 	    $scope.score = 0;
			}
			}






		function selectQuestion() {


			// ID random d'une question
		  var randQuestionId = Math.floor(Math.random() * questions.length);
			//console.log(randQuestionId);

		  while(questionPassed.indexOf(randQuestionId) != -1){ // Si cet ID est dans le tableau des questions passées, on en choisit un nouveau

		    randQuestionId = Math.floor(Math.random() * questions.length);

		  }

		  questionPassed.push(randQuestionId); // Et on l'ajoute aux questions passées

			var question = questions[randQuestionId];
			var goodAnsId = randQuestionId;
			var answers = [];
			var goodAns = questions[randQuestionId].french;
			answers.push(goodAns);
			//console.log('init TAB = '+ answers);
			var i =1;
			while (i<6) {
				randId = Math.floor(Math.random() * questions.length);
				answer = questions[randId].french; // réponse aléatoire parmis toutes les expressions
				if (answers.indexOf(answer) === -1) {
					answers.push(answer);
					i++;
					//console.log('Le nouveau tableau est : ' + answers);
				}
				else if ( answers.indexOf(answer) > -1 ) {
					 //console.log(answer + ' existe déjà dans le tableau.');
				}
			}
			//console.log('FINAL '+ answers.toString());
			//console.log(answers.length);


			var mixAnswers = ['','','','','',''];
		  var mixedAnswers = [];
		  i = 0;

		  while(mixedAnswers.length < 6){

		    do{

		      randId = Math.floor(Math.random() * 6);

		    }while(mixedAnswers.indexOf(randId) != -1)

		    mixedAnswers.push(randId);
		    mixAnswers[randId] = answers[i];
		    i++;
		  }

			console.log(mixAnswers);
			//console.log(mixAnswers.length);


		  return {'question' : question, 'response' : goodAns, 'answers' : mixAnswers};

		  }


});
