let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }, function (err) {
    if (err) {
        console.log('Mongoose error => ', err);
    }

    console.log('Mongoose connected');
});

module.exports = mongoose;
