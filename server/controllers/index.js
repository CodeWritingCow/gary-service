let models = require('../models');

const getEventById = function (req, res) {
    models.getEventById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(data);
        }
    });
}

const getEventsByCategory = function (req, res) {
    models.getEventsByCategory(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(data);
        }
    })
}

module.exports = {
    getEventById: getEventById,
    getEventsByCategory: getEventsByCategory
}