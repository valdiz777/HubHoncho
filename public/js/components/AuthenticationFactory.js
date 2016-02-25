app.factory('AuthenticationFactory', ['$rootScope', '$state', '$sessionStorage', '$http',
    function ($rootScope, $state, $sessionStorage, $http) {
        var factory = {};

        factory.login = function () {
            $http({
                method: 'GET',
                url: '/auth/' + factory.user.platform,
                headers: {
                    "Access-Control-Allow-Origin": "http://localhost:8080",
                    "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With",
                    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
                }

            }).then(function successCallback(response) {
                $state.go('default');
            }, function errorCallback(response) {
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
    }
]);
