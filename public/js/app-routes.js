app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    $locationProvider.html5Mode(true);
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
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

        .state('default', {
            url: "/dashboard",
            templateUrl: "js/pages/dashboard/dashboard.html",
            page: {
                auth: false,   // This needs to be true
            }
        })
        .state('profile', {
            url: "/profile",
            templateUrl: "js/pages/profile/profile.html",
            page: {
                auth: false,   // This needs to be true
            }
        });
});
