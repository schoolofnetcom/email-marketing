const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

const Campaign = mongoose.Schema({
    title: { type: String, required: true },
    body: String,
    status: String,
    start: { type: Date, required: true },
    opens: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    unsubscribe: { type: Number, default: 0 },
    bounces: { type: Number, default: 0 },
    lists: [
        {type: ObjectId, ref: 'List'}
    ]
});

module.exports = mongoose.model('Campaign', Campaign);
