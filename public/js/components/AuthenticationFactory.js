app.factory('AuthenticationFactory', ['$rootScope', '$state', '$sessionStorage', '$http', '$auth',
function($rootScope, $state, $sessionStorage, $http, $auth) {
  var factory = {};
    var twitterAPI = "api.twitter.com",
        instagramAPI = "api.instagram.com",
        facebookAPI = "api.twitter.com";


    factory.login = function () {
      console.log("Login");
        $auth.authenticate(factory.user.platform).then(function() {
          $sessionStorage[factory.user.platform] =
          console.log("Login Success", $auth);
          $state.go("default");
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            console.error(error.error);
          } else if (error.data) {
            // HTTP response error from server
            console.error(error.data.message, error.status);
          } else {
            console.error(error);
          }
        });;
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
