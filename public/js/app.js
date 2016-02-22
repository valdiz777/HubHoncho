var app = angular.module('socialMediaQuery',
  ['ngStorage',
   'infinite-scroll',
   'satellizer',
   'ui.bootstrap',
   'ui.router',
]);

app.config(function($authProvider) {

    $authProvider.facebook({
      clientId: 934268410020724
    });

    $authProvider.instagram({
      clientId: 'f4a19318a6d3485ab78e950e9d05a5ce'
    });

    $authProvider.twitter({
      clientId: 'xf9DQgMTBNVYbr6NgFT0SQAUQ'
    });

    // No additional setup required for Twitter

  });
