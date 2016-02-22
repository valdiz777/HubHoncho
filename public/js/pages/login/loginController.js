app.controller('LoginController', ['$scope', '$rootScope',
function($scope, $rootScope) {
  console.log("login controller");
    $scope.user = $rootScope.authetication.user;
    $scope.platforms = [
      {id: 1, name: 'instagram', icon:'fa-instagram'},
      {id: 2, name: 'facebook', icon:'fa-facebook-official'},
      {id: 3, name: 'twitter', icon:'fa-twitter'}
    ];

    $scope.login = function (platform) {
      $scope.user.platform = platform;
      $rootScope.authetication.login();
    };
  }]);
