const passport = require('passport');
const UserModel = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id).exec((err, user) => {
        done(err, user);
    });
});
