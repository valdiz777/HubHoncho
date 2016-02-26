app.run(['$rootScope', '$state', 'AuthenticationFactory',
function ($rootScope, $state, AuthenticationFactory) {
  console.log("Running now");
  $rootScope.authetication = AuthenticationFactory;



  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
        $rootScope.previousState = {
          toState: toState,
          toParams: toParams
        };

        if(toState.page && toState.page.auth && !$rootScope.authetication.user.isLoggedIn()) {
          event.preventDefault();
          $state.go('login');
        } else if (toState.name == "login") {

        }

        // transitionTo() promise will be rejected with
        // a 'transition prevented' error
    });
}]);
