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
        {title: String, type: ObjectId, ref: 'List'}
    ],
    actions: [
        {
            type: ObjectId,
            ref: 'List',
            action: [
                {
                    type: String,
                    link: String,
                    date: Date
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Lead', Lead);
