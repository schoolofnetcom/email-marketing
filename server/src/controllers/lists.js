const model = require('../models/list');
const GenericController = require('./generic');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}
