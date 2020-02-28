const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const publicationSchema = new Schema({
    auteur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    titre: { type: Schema.Types.String, required: true },
    corps: { type: Schema.Types.String, required: true },
    upvotes: [{ type: Schema.Types.String, default: [] }],
    downvotes: [{ type: Schema.Types.String, default: [] }]
});

const model = mongoose.model('Publication', publicationSchema);

module.exports = model;
