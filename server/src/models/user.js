let mongoose = require('mongoose');

let User = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    accounts: [{
        name: String,
        role: String,
        enabled: Boolean
    }]
});

module.exports = mongoose.model('User', User);
