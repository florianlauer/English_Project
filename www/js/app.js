// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('/', {
      url: '/',
      templateUrl: 'templates/welcome.html'
  })
  .state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html'
  })
  .state('question', {
    url: '/question',
    templateUrl: 'templates/question.html',
  })
  .state('rules_1', {
    url: '/rules_1',
    templateUrl: 'templates/rules_1.html',
  })
  .state('rules_2', {
    url: '/rules_2',
    templateUrl: 'templates/rules_2.html',
  })
  .state('rules_3', {
    url: '/rules_3',
    templateUrl: 'templates/rules_3.html',
  })
  .state('rules_4', {
    url: '/rules_4',
    templateUrl: 'templates/rules_4.html',
  })
  .state('game_1', {
    url: '/game_1',
    templateUrl: 'templates/game_1.html',
    controller: 'game1Ctrl'
  })
  .state('game_2', {
    url: '/game_2',
    templateUrl: 'templates/game_2.html',
    controller: 'game2Ctrl'
  })
  .state('game_3', {
    url: '/game_3',
    templateUrl: 'templates/game_3.html',
    controller: 'game1Ctrl'
  })
  .state('game_4', {
    url: '/game_4',
    templateUrl: 'templates/game_4.html',
    controller: 'game2Ctrl'
  })
  $urlRouterProvider.otherwise('/')

}]);


app.factory('bddFactory', function() {
  var expressions =
    [
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
    {'english' : 'From scratch / to make from scratch', 'french' : ' Faire quelque chose à partir de zero / Commencer par le début, sans préparation ou aide préalable.'},
    {'english' : 'Get bent out of shape', 'french' : ' S\'énerver à propos de quelque chose qui ne peut être évité.'},
    {'english' : 'Have a blast', 'french' : ' Passer un bon moment ou se faire plaisir.'},
    {'english' : 'Have eyes in the back of one\'s head ', 'french' : ' Quelqu\'un peut percevoir des choses ou des événements qui sont en dehors de son champ de vision / Avoir des yeux derrière la tête.'},
    {'english' : 'Hit the road ', 'french' : ' Partir (pour un voyage / une aventure / une enquête).'},
    {'english' : 'Hit the sack ', 'french' : ' Aller se coucher.'},
    {'english' : 'Kick the bucket', 'french' : ' Euphémisme pour mourir.'},
    {'english' : 'Let the cat out of the bag ', 'french' : ' Révéler un secret.'},
    {'english' : 'Off the hook', 'french' : ' Echapper à ses responsabilités ou à une obligation ou (moins souvent) à un danger.'},
    {'english' : 'Piece of cake ', 'french' : ' Un travail, une tâche ou une autre activité qui est agréable et donc facile à réaliser.'},
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
    ]
  ;


  return expressions;

})
