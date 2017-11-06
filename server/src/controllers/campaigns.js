const model = require('../models/campaign');
const GenericController = require('./generic');
const tracker = require('../email/tracker');

const CrudService = require('../services/crud');
const service = new CrudService(model);


module.exports = function () {
    const controller = new GenericController(model)

    controller.totals = (req, res) => {
        const query = {
            $group: {
                _id: null,
                clicks: { $sum: '$clicks' },
                opens: { $sum: '$opens' },
            }
        }

        model.aggregate(query).exec(function (err, result) {
            return res.json(result);
        });
    }

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

    controller.apiRenderEmail = (req, res) => {
        model.findById(req.params.id, (err, result) => {
            if (err) {
                return res.status(404).send('not found');
            }
            return res.render('mail_render', { body: result.body })
        });
    }

    controller.renderEmail = (req, res) => {
        model.findById(req.params.id, (err, result) => {
            if (err) {
                return res.status(404).send('not found');
            }
            let body = tracker(result.body, req.params.id, req.params.leadid);
            return res.render('mail_render', { body: body })
        });
    }

    return controller
}
