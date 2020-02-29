const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const publicationReponseSchema = new Schema({
    auteur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    publicationId: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: true
    },
    corps: { type: Schema.Types.String, required: true },
    upvotes: [{ type: Schema.Types.String, default: [] }],
    downvotes: [{ type: Schema.Types.String, default: [] }],
    best: { type: Schema.Types.Boolean, default: false }
});

const model = mongoose.model('PublicationReponse', publicationReponseSchema);

module.exports = model;
