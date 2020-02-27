const express = require('express');
const router = express.Router();
const passport = require('passport');
const PublicationModel = require('../models/publication');
const authenticate = require('../passport/authenticate');

router.get('/:id', authenticate, (req, res) => {
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

router.get('/', authenticate, (req, res) => {
    PublicationModel.find()
        .populate('author')
        .exec((err, docs) => {
            if (err) {
                throw err;
            }

            res.send({
                data: docs,
                msg: 'Publications found!'
            });
        });
});

router.post('/', authenticate, (req, res) => {
    PublicationModel.create(
        Object.assign(req.body, { author: req.user }),
        (err, doc) => {
            if (err) {
                throw err;
            }

            res.send({
                data: doc,
                msg: 'Publication created!'
            });
        }
    );
});

router.put('/:id', authenticate, (req, res) => {
    PublicationModel.updateOne({ id: req.query.id }, req.body, (err, doc) => {
        if (err) {
            throw err;
        }

        res.send({
            data: doc,
            msg: 'Publication created!'
        });
    });
});

router.delete('/:id', authenticate, (req, res) => {
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
