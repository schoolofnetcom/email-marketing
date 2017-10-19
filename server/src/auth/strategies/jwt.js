let passport = require('passport');
let passportJwtStrategy = require('passport-jwt').Strategy;
let passportExtractJwt = require('passport-jwt').ExtractJwt;

let User = require('../../models/user');
let cfg = require('../../../config');

let params = {
    secretOrKey: cfg.jwrSecret,
    jwtFromRequest: passportExtractJwt.fromAuthHeaderAsBearerToken()
}

let strategy = new passportJwtStrategy(params, function(jwt_payload, done) {
    let id = jwt_payload.id;

    let callback = function (err, user) {
        if (err) {
            return done(err);
        }

        return done(null, user);
    }

    User.findById(id, callback);
});

passport.use(strategy);

module.exports = passport;
