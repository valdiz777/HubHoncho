app.factory('AuthenticationFactory', ['$rootScope', '$state', '$sessionStorage', '$http',
function($rootScope, $state, $sessionStorage, $http) {
  var factory = {};
    var twitterAPI = "api.twitter.com",
        instagramAPI = "api.instagram.com",
        facebookAPI = "api.facebook.com";


    factory.login = function () {
      $http.get('/test/'+factory.user.platform)
          .success(function(response){
            console.log(response);
          });
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
