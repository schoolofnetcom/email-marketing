function CrudService (model) {
    this.model = model;
}

CrudService.prototype.list = function () {
    return new Promise((resolve) => {
        this.model.find(null, (err, result) => {
            return resolve({data: result})
        })
    });
}

CrudService.prototype.get = function (id) {
    return new Promise((resolve) => {
        this.model.findById(id, (err, result) => {
            if (err) {
                return reject({err: err});
            }
            return resolve({data: result})
        });
    });
}

CrudService.prototype.update = function (id, data) {
    return new Promise((resolve) => {
        this.model.findByIdAndUpdate(id, {$set: data}, (err, result) => {
            if (err) {
                return reject({err: err});
            }
            return resolve({data: result})
        });
    });
}

CrudService.prototype.delete = function (id) {
    return new Promise((resolve) => {
        this.model.findByIdAndRemove(id, (err, result) => {
            if (err) {
                return reject({err: err});
            }
            return resolve({data: result})
        });
    });
}

module.exports = CrudService;
