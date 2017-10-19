module.exports = function (app) {
    let controller = require('../controllers/campaigns')();

    app.get('/api/campaigns', controller.index);
    app.post('/api/campaigns', controller.add);
    app.get('/api/campaigns/:id', controller.view);
    app.put('/api/campaigns/:id', controller.edit);
    app.delete('/api/campaigns/:id', controller.delete);
}
