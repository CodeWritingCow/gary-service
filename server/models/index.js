const db = require('../db');

module.exports = {
    events: {
        get: function (id, callback) {
            // console.log('id', id);
            
            let statement = `SELECT * FROM event WHERE rowId = ${id}`;
            // let id = userId;
                
                db.all(statement, (err, data) => {
                    if (err) {
                        callback(err, null);
                        // return console.log(err.message);
                    } else {
                        // console.log('Data sent: ', data);
                        // db.close();
                        // console.log('Database closed');
                        return callback(null, data);
                    }
                });

        }
    }
}