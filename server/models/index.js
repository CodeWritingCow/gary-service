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

const getEventsByCategory = function (id, callback) {
    let statement = `SELECT * FROM event WHERE category = ${id}`;
        db.all(statement, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                // db.close();
                return callback(null, data);
            }
        });
}

const getCategoryNameById = function (id, callback) {
    let statement = `SELECT category.name FROM category WHERE category.rowId = ${id}`;
    db.all(statement, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            return callback(null, data);
        }
    });
}

module.exports = {
    getEventById: getEventById,
    getEventsByCategory: getEventsByCategory,
    getCategoryNameById: getCategoryNameById
}