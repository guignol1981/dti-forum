const express = require('express');
const router = express.Router();
const passport = require('passport');
const PublicationModel = require('../models/publication');
const authenticate = require('../passport/authenticate');

router.get('/:id', (req, res) => {
    PublicationModel.findById(req.query.id).exec((err, doc) => {
        if (err) {
            throw err;
        }

        res.send({
            data: doc,
            msg: 'Publication found!'
        });
    });
});

router.get('/', (req, res) => {
    PublicationModel.find().exec((err, docs) => {
        if (err) {
            throw err;
        }

        res.send({
            data: docs,
            msg: 'Publications found!'
        });
    });
});

router.post('/', (req, res) => {
    PublicationModel.create(req.body, (err, doc) => {
        if (err) {
            throw err;
        }

        res.send({
            data: doc,
            msg: 'Publication created!'
        });
    });
});

router.delete('/:id', (req, res) => {
    PublicationModel.findOneAndDelete({ id: req.query.id }).exec(err => {
        if (err) {
            throw err;
        }

        res.send({
            data: true,
            msg: 'Publication deleted!'
        });
    });
});

module.exports = router;
