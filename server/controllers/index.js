let models = require('../models');

module.exports = {
    events: {
        get: function (req, res) {
            console.log('req.params.id in controller:', req.params.id);
            models.events.get(req.params.id, function (err, data) {
                // console.log('moo: callback');
                
                if (err) {
                    res.sendStatus(500);
                } else {
                    // console.log('data in controller:', data);
                    res.send(data);
                }
            });
        }
    }
}