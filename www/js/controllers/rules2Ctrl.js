app.controller('rules2Ctrl', function ($scope){


	var bestScore = JSON.parse( window.localStorage.getItem('score_game_2'));

	if(bestScore == null){
		bestScore = "No score yet";
	}else{
		bestScore = "BEST SCORE : " + bestScore + ' points';
	}

	$scope.bestScore = bestScore;

});
