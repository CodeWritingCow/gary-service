const db = require('../db');

const getEventById = function (id, callback) {
    let statement = `SELECT * FROM event WHERE rowId = ${id}`;
        db.all(statement, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                // db.close();
                return callback(null, data);
            }
        });
}

module.exports = {
    getEventById: getEventById
}