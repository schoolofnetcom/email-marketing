const CrudService = require('../services/crud');

function GenericController(model) {
    this.service = new CrudService(model);

    this.index = (req, res) => {
        this.service.list()
            .then((result) => {
                return res.json(result);
            })
    }

    this.add = (req, res) => {
        this.service.insert(req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(422).json(err);
            })
    }

    this.edit = (req, res) => {
        this.service.update(req.params.id, req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(422).json(err);
            })
    }

    this.view = (req, res) => {
        this.service.get(req.params.id)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }

    this.delete = (req, res) => {
        this.service.delete(req.params.id)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }
}

module.exports = GenericController;
