const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (username, password, done) => {
            UserModel.findOne({ email: username }, (err, user) => {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, { msg: 'Incorrect email.' });
                }

                if (!user.validPassword(password)) {
                    return done(null, false, { msg: 'Incorrect password.' });
                }

                return done(null, user);
            });
        }
    )
);
