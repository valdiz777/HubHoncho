app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  $locationProvider.html5Mode(true);
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "/views/login.html",
      page: {
        auth: false,
      }
    })
    .state('default', {
      url: "/dashboard",
      templateUrl: "/views/dashboard.html",
      parent: "auth",
      page: {
        auth: false,   // This needs to be true
      }
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "/views/profile.html",
      parent: "auth",
      page: {
        auth: false,   // This needs to be true
      }
    });
});
