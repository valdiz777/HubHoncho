app.factory('AuthenticationFactory', ['$rootScope', '$state', '$sessionStorage', '$http', '$auth',
function($rootScope, $state, $sessionStorage, $http, $auth) {
  var factory = {};

    factory.login = function () {
      switch(factory.user.platform.id) {
        case 1: //instagram
              break;
        case 2: //facebook
              break;
        case 3: //twitter
              break;
      }
    };

    factory.logout = function () {

    };
    factory.user = {
      userName: '',
      password: '',
      platform: null,
      isLoggedIn: function () {
        return false;
      }
    };

  return factory;
}]);
