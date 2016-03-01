'use strict';
module.exports = function (app, passport) {
    var appRoot = require('app-root-path');

// frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function (req, res) {
        res.sendFile(appRoot + '/public/index.html');
    });

    app.get('/login', function (req, res) {
        res.sendFile(appRoot + '/public/index.html');
    });


    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

// server routes ===========================================================
    // handle things like api calls
    // authentication routes
// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // facebook -------------------------------

    //Test HTTP routing
    app.get('/test/facebook', function (req, res) {
        console.log("facebook: I got the request");
        res.json({payload: 'Facebook Request Processed'});
    });

    // send to facebook to do the authentication
    app.get('/auth/facebook', function (req, res) {
        var status = 0;
        passport.authenticate('facebook', {scope: 'email'}, function (req, res) {
            if (req.user) {
                status = 200;
            } else {
                status = 403;
            }
        });
        res.status(status);
    });

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', function (req, res) {
        var status = 0;
        passport.authenticate('facebook', function (req, res) {
            if (req.user) {
                status = 200;
            } else {
                status = 403;
            }
        });
        res.status(status);
    });

    // twitter --------------------------------
    //Test HTTP routing
    app.get('/test/twitter', function (req, res) {
        console.log("twitter: I got the request");
        res.json({payload: 'Twitter Request Processed'});
    });

    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', {scope: 'email'}));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    // instagram ---------------------------------

    //Test HTTP routing
    app.get('/test/instagram', function (req, res) {
        console.log("instagram: I got the request");
        res.json({payload: 'Instagram Request Processed'});
    });

    // send to google to do the authentication
    app.get('/auth/instagram', passport.authenticate('instagram', {scope: 'basic'}));

    // the callback after instagram has authenticated the user
    app.get('/auth/instagram/callback',
        passport.authenticate('instagram', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', {scope: 'email'}));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',function (req, res) {
        var status = 0;
        passport.authorize('facebook', function (req, res) {
            if (req.user) {
                status = 200;
            } else {
                status = 403;
            }
        });
        res.status(status);
    });

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', {scope: 'email'}));

    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
        passport.authorize('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    // instagram -------------------------------

    // send to instagram to do the authentication
    app.get('/connect/instagram', passport.authorize('instagram', {scope: 'basic'}));

    // handle the callback after instagram has authorized the user
    app.get('/connect/instagram/callback',
        passport.authorize('instagram', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function (req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function (req, res) {
        var user = req.user;
        user.twitter.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/instagram', isLoggedIn, function (req, res) {
        var user = req.user;
        user.instagram.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

// =============================================================================
// RETRIEVE USER INFO ==========================================================
// =============================================================================
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
