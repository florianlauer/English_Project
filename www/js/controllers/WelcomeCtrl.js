app.controller('WelcomeCtrl', function($scope, Platform) {
    Platform.ready(function() {
    // Hide the status bar
    StatusBar.hide();
  });
});
