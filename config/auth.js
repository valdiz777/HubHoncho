// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '934268410020724', // your App ID
        'clientSecret'    : '4e2204cb4acb1f9e92e7e308ceaa82e1', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'HczN1NxhBXD0G4Yujo3k41VFq',
        'consumerSecret'     : 'UeORylLl9x0FEFcyIERL25xtXlgjqlmRmq0PttRZxkywHolpLN',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'instagramAuth' : {
        'clientID'         : 'f4a19318a6d3485ab78e950e9d05a5ce',
        'clientSecret'     : 'e10b5c6cb35b4ea5a0cd630c3cd7749a',
        'callbackURL'      : 'http://localhost:8080/auth/instagram/callback'
    }

};
