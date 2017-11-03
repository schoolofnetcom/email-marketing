module.exports = function (app) {
    let controller = require('../controllers/tracking')();

    app.get('/campaigns/tracking/open/:id/:leadid', controller.open);
    app.get('/campaigns/tracking/click/:id/:leadid', controller.click);
}
