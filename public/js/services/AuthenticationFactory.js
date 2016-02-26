app.factory('AuthenticationFactory', ['$rootScope', '$state', '$sessionStorage', '$window',
    function ($rootScope, $state, $sessionStorage, $window) {
        var factory = {};


        factory.login = function () {
            var url = '/auth/' + factory.user.platform;

            console.log(url);
            if ($state.previous && $state.previous.href) {
                url += '?redirect_to=' + encodeURIComponent($state.previous.href);
            }

            // Effectively call OAuth authentication route:
            $window.location.href = url;
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
