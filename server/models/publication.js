const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const publicationSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    titre: { type: Schema.Types.String, required: true },
    corps: { type: Schema.Types.String, required: true },
    upvoteCount: { type: Schema.Types.Number, default: 0 },
    downvoteCount: { type: Schema.Types.Number, default: 0 }
});

const model = mongoose.model('Pubication', publicationSchema);

module.exports = model;
