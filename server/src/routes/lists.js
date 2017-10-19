module.exports = function (app) {
    let controller = require('../controllers/lists')();

    app.get('/api/lists', controller.index);
    app.post('/api/lists', controller.add);
    app.get('/api/lists/:id', controller.view);
    app.put('/api/lists/:id', controller.edit);
    app.delete('/api/lists/:id', controller.delete);
}
