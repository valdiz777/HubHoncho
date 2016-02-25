module.exports = function (app, passport) {
    var appRoot = require('app-root-path');
    var User = require(appRoot + '/app/models/user');

// frontend routes =========================================================
    // route to handle all angular requests
     app.get('/', function (req, res) {
     // load the single view file (angular will handle the page changes on the front-end)
     res.sendFile(appRoot + '/public/index.html');
     });

     app.get('/login', function (req, res) {
     // load the single view file (angular will handle the page changes on the front-end)
     res.sendFile(appRoot + '/public/index.html');
     });

    app.get('/user/facebook/', function (req, res) {
        // use mongoose to get all todos in the database
        User.find(function (err, user) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(user); // return all todos in JSON format
        });
        res.json(User);
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
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/'
        }));

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
            successRedirect: '/',
            failureRedirect: '/'
        }));


    // instagram ---------------------------------

    //Test HTTP routing
    app.get('/test/instagram', function (req, res) {
        console.log("instagram: I got the request");
        res.json({payload: 'Instagram Request Processed'});
    });

    // send to google to do the authentication
    app.get('/auth/instagram', passport.authenticate('instagram-token', {scope: 'email'}));

    // the callback after google has authenticated the user
    app.get('/auth/instagram/callback', passport.authenticate('instagram-token'));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', {scope: 'email'}));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

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
    app.get('/connect/instagram', passport.authorize('instagram', {scope: 'email'}));

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

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

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
    app.get('/unlink/google', isLoggedIn, function (req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
