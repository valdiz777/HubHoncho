// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '934268410020724', // your App ID
        'clientSecret'    : '4e2204cb4acb1f9e92e7e308ceaa82e1', // your App Secret
        'callbackURL'     : 'https://hubhoncho.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'HczN1NxhBXD0G4Yujo3k41VFq',
        'consumerSecret'     : 'UeORylLl9x0FEFcyIERL25xtXlgjqlmRmq0PttRZxkywHolpLN',
        'callbackURL'        : 'https://hubhoncho.herokuapp.com/auth/twitter/callback'
    },

    'instagramAuth' : {
        'clientID'         : '7b297ccd426a4e4aa0e7a1b123d55b91',
        'clientSecret'     : 'c1a300a2546f4b0cbb8bd7a8e6744bbc',
        'callbackURL'      : 'https://hubhoncho.herokuapp.com/auth/instagram/callback'
    }

};
