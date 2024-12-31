const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
// Load environment variables from .env file

// Serialize user information into session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user information from session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Configure Google Strategy
passport.use(new GoogleStrategy({
    clientID:"796195068489-q97f8eekp6f0hoc5rp3kp2o1lkied9nv.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:3000/auth/callback",
    passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
    console.log("User Profile:", profile);

    // Pass user profile to the done callback
    return done(null, profile);
}));
