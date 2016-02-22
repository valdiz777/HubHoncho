app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    $locationProvider.html5Mode(false);
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/dashboard");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            page: {
                auth: false,
            }
        })
        .state('auth', {
            abstract: true,
            templateUrl: "views/layout.html"
        })
        .state('default', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            parent: "auth",
            page: {
                auth: false,   // This needs to be true
            }
        })
        .state('profile', {
            url: "/profile",
            templateUrl: "views/profile.html",
            parent: "auth",
            page: {
                auth: false,   // This needs to be true
            }
        });
});
