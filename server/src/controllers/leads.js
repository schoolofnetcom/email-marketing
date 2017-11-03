const model = require('../models/lead');
const listModel = require('../models/list');
const GenericController = require('./generic');

module.exports = function () {
    const controller = new GenericController(model)

    controller.subscribe = async function (req, res) {
        req.checkBody('email', 'Enter a valid email').isEmail();
        req.checkBody('list', 'List is required').exists();

        let errors = req.validationErrors();
        if (errors) {
            return res.status(422).json(errors);
        }

        let list;
        await listModel.findOne({ title: req.body['list'] }, async (err, result) => {
            if (!result) {
                await listModel.create({title: req.body['list'], quantity: 0}, (err, result) => {
                    list = result;
                })
            } else {
                list = result;
            }
        });

        let register = function () {
            let lead = {
                email: req.body['email'],
                lists: [list._id]
            }
            model.create(lead);

            list.quantity++;
            list.save();
        }

        let update = function (lead) {
            if (lead.lists.indexOf(list._id) === -1) {
                lead.lists.push(list._id);
                lead.save();

                list.quantity++;
                list.save();
            }
        }

        model.findOne({email: req.body['email']}, function (err, lead) {
            if (err) return res.json(err);

            if (!lead) {
                register();
            } else {
                update(lead);
            }
        });

        model.findOne({ email: req.body['email'] }).populate('lists').exec(function (err, lead) {
            console.log(lead)
        })

        return res.json({status: 'success'});
    }

    controller.leadsByList = function (req, res) {
        model.find({lists: { $in: [req.params.id] }}).populate('lists').exec(function (err, leads) {
            return res.json({data: leads});
        });
    }

    controller.view = function (req, res) {
        model.findById(req.params.id).populate('lists').exec((err, result) => {
            if (err) {
                return res.status(404).json(err);
            }
            return res.json({data: result});
        })
    }

    return controller
}
