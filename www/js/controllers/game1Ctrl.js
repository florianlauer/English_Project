
//var game1 =  angular.module('game1', []);

app.controller('game1Ctrl', function ($scope) {

var questionPassed = [];
var score = 0;
var remaining = 10;
var englishTokens = ['is',
'the',
'to',
'a',
'of',
"don't",
"do",
'in',
'as',
'at',
'/',
'by',
'.',
'from',
' ',
'it',
'']

var expressions = [
{'english' : 'A bitter pill', 'french' : ' Une situation ou information qui est n\'est pas agréable mais qui doit être acceptée.'},
{'english' : 'A dime a dozen', 'french' : ' Tout ce qui est commun, pas cher et facile à obtenir ou disponible n\'importe où.'},
{'english' : 'Ace in the hole', 'french' : ' Une force secrète ou un avantage jamais révélé.'},
{'english' : 'Achilles\' heel', 'french' : ' Talon d\'Achille / Métaphore pour une faiblesse fatale en dépit d\'une grande force globale.'},
{'english' : 'Add insult to injury', 'french' : ' Aggraver une situation difficile.'},
{'english' : 'All ears', 'french' : ' Écouter attentivement.'},
{'english' : 'All thumbs', 'french' : ' Maladroit.'},
{'english' : 'Apple of discord', 'french' : ' Tout ce qui cause des ennuis, de la discorde ou de la jalousie.'},
{'english' : 'At the drop of a hat', 'french' : ' Sans aucune hésitation, immédiatement.'},
{'english' : 'Barking up the wrong tree', 'french' : ' Chercher dans la mauvaise direction.'},
{'english' : 'Basket case', 'french' : ' Lorsque quelqu\'un devient impuissant ou inefficace à cause de la panique ou du stress.'},
{'english' : 'Beat around the bush', 'french' : ' Traiter d\'un sujet, mais omettre les points importants, souvent intentionnellement pour retarder ou éviter de parler de quelque chose de difficile ou de désagréable. / Tourner autour du pot.'},
{'english' : 'Bite off more than one can chew', 'french' : ' Prendre plus de responsabilités ou d\'engagements que l\'on peut gérer. / Avoir les yeux plus gros que le ventre.'},
{'english' : 'Bite the bullet', 'french' : ' Supporter une situation douloureuse ou désagréable qui est inévitable.'},
{'english' : 'Bite the dust', 'french' : ' Euphémisme pour mourir ou la mort.'},
{'english' : 'Break a leg', 'french' : ' Un proverbe issu du théâtre qui signifie ', 'french' : 'bonne chance', 'french' : '.'},
{'english' : 'Burn the midnight oil', 'french' : ' Travailler tard dans la nuit (fait allusion à la période précédant l\'éclairage électrique) .'},
{'english' : 'Bust one\'s chops', 'french' : ' Dire des choses destinées à harceler ou à pousser quelqu\'un.'},
{'english' : 'By the seat of one\'s pants', 'french' : ' Faire quelque chose instinctivement ou faire quelque chose sans préparation préalable.'},
{'english' : 'By the skin of one\'s teeth', 'french' : ' Echapper de justice à quelque chose.'},
{'english' : 'Call it a day', 'french' : ' Déclarer la fin d\'une tâche / S\'arrêter là pour aujourd\'hui.'},
{'english' : 'Chomp at the bit', 'french' : ' Afficher de l\'impatience ou de la frustration en cas de retard.'},
{'english' : 'Chew the fat', 'french' : ' Discuter de tout et de rien /Discuter le bout de gras.'},
{'english' : 'Chink in one\'s armor', 'french' : ' Une zone de vulnérabilité .'},
{'english' : 'Clam up', 'french' : ' Devenir silencieux / Arrêter de parler.'},
{'english' : 'Cold shoulder', 'french' : ' Être froid et méprisant.'},
{'english' : 'Couch potato', 'french' : ' Une personne paresseuse.'},
{'english' : 'Cut a rug', 'french' : ' Danser.'},
{'english' : 'Cut the mustard', 'french' : ' Faire quelque chose de bien / Répondre aux attentes.'},
{'english' : 'Don\'t have a cow ', 'french' : ' Ne pas réagir de manière excessive.'},
{'english' : 'Drop a dime ', 'french' : ' Être un informateur / Dénoncer quelqu\'un ou quelque chose.'},
{'english' : 'Fit as a fiddle', 'french' : ' Être en bonne santé physique.'},
{'english' : 'For a song', 'french' : ' Presque gratuit ou peu cher.'},
{'english' : 'From A to Z', 'french' : ' Couvrant une gamme complète / Globalement.'},
{'english' : 'To make from scratch', 'french' : ' Faire quelque chose à partir de zero. Se dit aussi "From scratch" '},
{'english' : 'Get bent out of shape', 'french' : ' S\'énerver à propos de quelque chose qui ne peut être évité.'},
{'english' : 'Have a blast', 'french' : ' Passer un bon moment ou se faire plaisir.'},
{'english' : 'Have eyes in the back of one\'s head ', 'french' : ' Quelqu\'un peut percevoir des choses ou des événements qui sont en dehors de son champ de vision / Avoir des yeux derrière la tête.'},
{'english' : 'Hit the road ', 'french' : ' Partir (pour un voyage / une aventure / une enquête).'},
{'english' : 'Hit the sack ', 'french' : ' Aller se coucher.'},
{'english' : 'Kick the bucket', 'french' : ' Euphémisme pour mourir.'},
{'english' : 'Let the cat out of the bag ', 'french' : ' Révéler un secret.'},
{'english' : 'Off the hook', 'french' : ' Echapper à ses responsabilités ou à une obligation ou (moins souvent) à un danger.'},
{'english' : 'Piece of cake', 'french' : ' Un travail, une tâche ou une autre activité qui est agréable et donc facile à réaliser.'},
{'english' : 'Pull somebody\'s leg', 'french' : ' Taquiner ou plaisanter en disant un mensonge.'},
{'english' : 'Pushing up daisies', 'french' : ' Euphémisme pour mourir.'},
{'english' : 'Put the cat among the pigeons', 'french' : ' Créer une perturbation et causer des problèmes.'},
{'english' : 'Right as rain', 'french' : ' Quelque chose de nécessaire et qui arrive juste au bon moment.'},
{'english' : 'Shoot the breeze', 'french' : ' Discuter de tout et de rien / Perdre son temps à parler'},
{'english' : 'Sleep with the fishes', 'french' : ' Euphémisme pour mourir.'},
{'english' : 'Spill the beans', 'french' : ' Révéler le secret de quelqu\'un.'},
{'english' : 'Split the whistle', 'french' : ' Arriver juste à temps.'},
{'english' : 'Take the biscuit', 'french' : ' (expression du Royaume-Uni) Faire quelque chose de mauvais ou dépasser les limites (Cette expression est proche de la goute d\'eau qui fait déborder le vase ou dépasser les bornes ou encore c\'est un comble'},
{'english' : 'Take the cake', 'french' : ' (expression des Etats-Unis) Être particulièrement bon. / Faire quelque chose de manière exceptionnelle.'},
{'english' : 'Through thick and thin', 'french' : ' Dans les bons et les mauvais moments (être présent dans).'},
{'english' : 'Thumb one\'s nose', 'french' : ' Exprimer du mépris ou ignorer.'},
{'english' : 'Tie one on', 'french' : ' Se saouler.'},
{'english' : 'Trip the light fantastic', 'french' : ' Danser.'},
{'english' : 'Under the weather', 'french' : ' Ne pas se sentir bien. / Se sentir malade.'},
{'english' : 'You can say that again', 'french' : ' C\'est très vrai. / Expression d\'un accord sans réserve.'}
];




  $scope.score = score;
  $scope.remaining = remaining;
  $scope.question = selectQuestion();



$scope.answer = function answer(answer){

  if(answer == $scope.question.response){
    console.log('Well done !');
    $scope.score++;
    $scope.question = selectQuestion();
  }

  $scope.remaining--;

}



function selectQuestion() {



  var randQuestionId = Math.floor(Math.random() * expressions.length);


  while(questionPassed.indexOf(randQuestionId) != -1){

    randQuestionId = Math.floor(Math.random() * expressions.length);

  }

  questionPassed.push(randQuestionId);

  var expressionTab = expressions[randQuestionId].english.split(' ');


  var wordRem = 0;
  var answers;

  while(wordRem == 0){  //Searching for the word to remove

    randId = Math.floor(Math.random() * expressionTab.length);

    if(englishTokens.indexOf(expressionTab[randId]) == -1){ // The word is not 'the' or 'is'...

      wordRem = 1;
      answers = [expressionTab[randId].toLowerCase(), '', '', '']; //Here we set the right answer
      expressionTab[randId] = '..'; // And replace the missing word with ...

    }


  }




  var question = '';  //Here we concatenate the question in a single string

  var i = 0;

  for(i = 0; i < expressionTab.length; i++){

    question = question + ' ' + expressionTab[i];

  }

  //Now it's time to set the other answers :

  var randWord = '';
  var attempts = 0;

  for(i = 1; i < 4; i++ ){

      do{

        randId = Math.floor(Math.random() * expressions.length);
        attempts = 0;

      do{

        randWord = (expressions[randId].english).split(' ')[Math.floor(Math.random() * (expressions[randId].english).split(' ').length)].toLowerCase();
        attempts++;


      }while(englishTokens.indexOf(randWord) != -1 || randWord == answers[0] && attempts < 10)



    }while(randId == randQuestionId)


      answers[i] = randWord.replace('.', '').toLowerCase();


  }

  var mixAnswers = ['','','',''];
  var mixedAnswers = [];
  i = 0;

  while(mixedAnswers.length < 4){


    do{

      randId = Math.floor(Math.random() * 4);

    }while(mixedAnswers.indexOf(randId) != -1)





    mixedAnswers.push(randId);
    mixAnswers[randId] = answers[i];
    i++;
  }


  var goodAnsId = mixAnswers.indexOf(answers[0]);

  console.log(question + ' : ' + mixAnswers[0] + ' : ' + mixAnswers[1]  + ' : ' + mixAnswers[2] + ' : ' + mixAnswers[3] + ':' + goodAnsId );
  return {'question' : question, 'answers' : mixAnswers, 'response' : goodAnsId};

  }





});
