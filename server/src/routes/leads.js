module.exports = function (app) {
    let controller = require('../controllers/leads')();

    app.post('/leads/subscribe', controller.subscribe);

    app.get('/api/leads-by-list/:id', controller.leadsByList);
    app.get('/api/leads', controller.index);
    app.post('/api/leads', controller.add);
    app.get('/api/leads/:id', controller.view);
    app.put('/api/leads/:id', controller.edit);
    app.delete('/api/leads/:id', controller.delete);
}
