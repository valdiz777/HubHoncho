app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  $locationProvider.html5Mode(false);
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/dashboard");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "js/pages/login/login.html",
      page: {
        auth: false,
      }
    })
  .state('auth', {
        abstract: true,
        templateUrl: "js/pages/layout/layout.html"
    })
    .state('default', {
      url: "/dashboard",
      templateUrl: "js/pages/dashboard/dashboard.html",
      parent: "auth",
      page: {
        auth: false,   // This needs to be true
      }
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "js/pages/profile/profile.html",
      parent: "auth",
      page: {
        auth: false,   // This needs to be true
      }
    });
});
