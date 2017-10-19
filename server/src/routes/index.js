const passport = require('../auth/auth');

let auth = require('./auth');
let campaigns = require('./campaigns');
let leads = require('./leads');
let lists = require('./lists');

module.exports = (app) => {
    app.get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    });

    app.use('/api', passport.authenticate('jwt', {session: false}));

    auth(app);
    campaigns(app);
    leads(app);
    lists(app);
}
