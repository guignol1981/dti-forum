const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const publicationSchema = new Schema({
    titre: { type: Schema.Types.String, required: true },
    corps: { type: Schema.Types.String, required: true },
    upvoteCount: { type: Schema.Types.Number, default: 0 },
    downvoteCount: { type: Schema.Types.Number, default: 0 }
});

const model = mongoose.model('Pubication', publicationSchema);

module.exports = model;
