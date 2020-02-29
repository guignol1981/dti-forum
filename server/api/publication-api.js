const express = require('express');
const router = express.Router();
const PublicationModel = require('../models/publication');
const PublicationReponseModel = require('../models/publication-reponse');
const authenticate = require('../passport/authenticate');

router.get('/:id', authenticate, (req, res) => {
    PublicationModel.findById(req.params.id)
        .populate('auteur')
        .exec((err, doc) => {
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
        .populate('auteur')
        .exec((err, docs) => {
            if (err) throw err;

            res.send({
                data: docs,
                msg: 'Publications found!'
            });
        });
});

router.post('/', authenticate, (req, res) => {
    PublicationModel.create(
        Object.assign(req.body, { auteur: req.user }),
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
    PublicationModel.findById(req.params.id)
        .populate('auteur')
        .exec((err, doc) => {
            if (err) throw err;

            Object.assign(doc, req.body);

            doc.save().then(doc => {
                res.send({
                    data: doc,
                    msg: 'Publication updated!'
                });
            });
        });
});

router.delete('/:id', authenticate, (req, res) => {
    PublicationModel.findById(req.params.id).exec((err, doc) => {
        if (err) {
            throw err;
        }

        doc.remove();

        res.send({
            data: true,
            msg: 'Publication deleted!'
        });
    });
});

module.exports = router;
