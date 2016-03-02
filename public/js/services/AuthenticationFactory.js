app.factory('AuthenticationFactory', ['$rootScope', '$state', '$sessionStorage', '$http', '$window',
    function ($rootScope, $state, $sessionStorage, $http, $window) {
        var factory = {};


        factory.login = function () {
            var url = '/auth/' + factory.user.platform;

            console.log(url);
            $http.get(url)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("Success!");
                    $state.go('default');
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("Unsuccessful");
                });
            /*if ($state.previous && $state.previous.href) {
             url += '?redirect_to=' + encodeURIComponent($state.previous.href);
             }

             // Effectively call OAuth authentication route:
             $window.location.href = url;

             // Check if user logged in
             if ($state == '/') {
             $state.go('default');
             }*/
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
