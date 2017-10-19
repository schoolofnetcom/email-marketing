const model = require('../models/lead');
const GenericController = require('./generic');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}
