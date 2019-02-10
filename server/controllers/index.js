let models = require('../models');

const getEventById = function (req, res) {
    models.events.get(req.params.id, (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
}

module.exports = {
    getEventById: getEventById
}