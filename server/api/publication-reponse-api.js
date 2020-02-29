const express = require('express');
const router = express.Router();
const PublicationReponseModel = require('../models/publication-reponse');
const authenticate = require('../passport/authenticate');

router.get('/publication/:id', authenticate, (req, res) => {
    PublicationReponseModel.find({ publicatonId: req.params.id })
        .populate('author')
        .exec((err, doc) => {
            if (err) throw err;

            res.send({
                data: doc,
                msg: 'Publication reponses found!'
            });
        });
});

router.post('/', authenticate, (req, res) => {
    PublicationReponseModel.create(req.body, (err, doc) => {
        if (err) throw err;

        doc.auteur = req.user;

        res.send({
            data: doc,
            msg: 'Publication reponse created!'
        });
    });
});

router.put('/:id', authenticate, (req, res) => {
    PublicationReponseModel.findById(req.params.id)
        .populate('auteur')
        .exec((err, doc) => {
            if (err) throw err;

            Object.assign(doc, req.body);

            doc.save().then(doc => {
                res.send({
                    data: doc,
                    msg: 'Publication reponse updated!'
                });
            });
        });
});

router.delete('/:id', authenticate, (req, res) => {
    PublicationReponseModel.findById(req.params.id).exec((err, doc) => {
        if (err) throw err;

        doc.remove();

        res.send({
            data: true,
            msg: 'Publication reponse deleted!'
        });
    });
});

module.exports = router;
