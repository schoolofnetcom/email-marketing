const passport = require('../auth/auth');

module.exports = function (app) {
    const controller = require('../controllers/auth')(app);

    app.post('/oauth/token', controller.token);
    app.get('/oauth/me', passport.authenticate('jwt', {session: false}), controller.me);
    app.post('/oauth/register', controller.register);
    app.put('/oauth/profile-update', passport.authenticate('jwt', {session: false}), controller.edit);
}
