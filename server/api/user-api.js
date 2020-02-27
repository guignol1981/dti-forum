const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/user');
const authenticate = require('../passport/authenticate');

router.get('/', authenticate, (req, res) => {
    UserModel.findById(req.user).exec((err, doc) => {
        if (err) {
            throw err;
        }

        res.send({
            data: doc,
            msg: 'User found!'
        });
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send({
        data: true,
        msg: 'Login successful'
    });
});

router.post('/logout', (req, res) => {
    req.logout();

    res.send({
        data: true,
        msg: 'Logout successful'
    });
});

router.get('/is-authenticated', authenticate, (req, res) => {
    res.send({
        data: true,
        msg: 'Is authenticated'
    });
});

router.post('/username-avaibility', (req, res) => {
    UserModel.find({ username: req.body.username }).exec((err, docs) => {
        if (err) {
            throw err;
        }

        res.send({
            data: !docs.length,
            msg: !!docs.length ? 'username not available' : 'username available'
        });
    });
});

router.post('/email-avaibility', (req, res) => {
    UserModel.find({ email: req.body.email }).exec((err, docs) => {
        if (err) {
            throw err;
        }

        res.send({
            data: !docs.length,
            msg: !!docs.length ? 'email not available' : 'email available'
        });
    });
});

router.post('/register', (req, res) => {
    const registerData = req.body;
    const user = new UserModel(registerData);

    user.setPassword(registerData.password);

    user.save(err => {
        if (err) {
            throw err;
        }

        req.login(user, () => {
            res.send({
                data: true,
                msg: 'Registration successful'
            });
        });
    });
});

module.exports = router;
