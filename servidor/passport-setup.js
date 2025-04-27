const passport=require("passport"); 
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
require('dotenv').config(); // al principio del archivo

const clientID= process.env.CLIENT_ID;
const clientSecret= process.env.CLIENT_SECRET;
const callbackURL= process.env.CALLBACK_URL;



passport.serializeUser(function(user, done) { 
    done(null, user); 
});

passport.deserializeUser(function(user, done) { 
    done(null, user); 
}); 

passport.use(new GoogleStrategy({ 
        clientID: clientID,
        clientSecret: clientSecret, 
        callbackURL: callbackURL,
    }, 
    function(accessToken, refreshToken, profile, done) { 
        return done(null, profile); 
    } 
)); 