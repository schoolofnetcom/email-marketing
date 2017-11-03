const model = require('../models/campaign');
const GenericController = require('./generic');

const CrudService = require('../services/crud');
const service = new CrudService(model);


module.exports = function () {
    const controller = new GenericController(model)

    controller.edit = (req, res) => {
        let data = {};
        data.lists = [];

        Object.keys(req.body).forEach(function(element, index) {
            if (element.startsWith('lists[')) {
                data.lists.push(req.body[element]);
            } else {
                data[element] = req.body[element];
            }
        });

        service.update(req.params.id, data)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(422).json(err);
            })
    }

    return controller
}
