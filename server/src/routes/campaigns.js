module.exports = function (app) {
    let controller = require('../controllers/campaigns')();
    app.get('/campaigns/email-render/:id', controller.apiRenderEmail);
    app.get('/campaigns/in-browser/:id/:leadid', controller.renderEmail);

    app.get('/api/campaigns', controller.index);
    app.get('/api/campaigns/totals', controller.totals);
    app.post('/api/campaigns', controller.add);
    app.get('/api/campaigns/:id', controller.view);
    app.put('/api/campaigns/:id', controller.edit);
    app.delete('/api/campaigns/:id', controller.delete);
}
