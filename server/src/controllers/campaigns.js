const model = require('../models/campaign');
const GenericController = require('./generic');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}
