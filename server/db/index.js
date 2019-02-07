const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./server/db/events.db', (err) => {
    if (err) {
        console.error('Err', err.message);
        return err.message;
    }
    console.log('Connected to the SQLite database');
});

// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Closed database connection');
// });

module.exports = db;