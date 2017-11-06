const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

const Lead = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    data: [
        {
            label: String,
            value: String
        }
    ],
    lists: [
        {type: ObjectId, ref: 'List'}
    ],
    actions: [
        {
            campaign: {
                type: ObjectId,
                ref: 'Campaign',
            },
            action: [
                {
                    typeAction: String,
                    link: String,
                    date: Date
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Lead', Lead);
