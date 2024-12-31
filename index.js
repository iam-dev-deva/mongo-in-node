const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ProductRoutes = require('./routes/product.routes')
const passport = require('passport');
const session = require('express-session');
require('./passport.js');

app.use(session({
    secret: 'yourSecretKey', // Replace with a strong secret
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
  

app.get('/', (req, res) => {
    res.send("<button><a href='/auth'>Login With Google</a></button>")
});

// Auth 
app.get('/auth' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}));

// Auth Callback
app.get( '/auth/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/callback/success',
        failureRedirect: '/auth/callback/failure'
}));

// Success 
app.get('/auth/callback/success' , (req , res) => {
    if(!req.user)
        res.redirect('/auth/callback/failure');
    res.send("Welcome " + req.user.email);
});

// failure
app.get('/auth/callback/failure' , (req , res) => {
    res.send("Error");
})

//Middleware
app.use(express.json())

//routes
app.use('/api', ProductRoutes)

//DB Connection
mongoose.connect("mongodb+srv://admin:admin@personal-db.7hde9.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=personal-DB")
    .then(() => { console.log("MongoDB Connected"); })
    .catch(() => {
        console.log("connection failed");
    })

app.listen(3000, () => {
    console.log("API is running on port 3000");
})

app.get('/', (req, res) => {
    res.json("MongoDB NodeJS integration")
})