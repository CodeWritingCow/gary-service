const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const db = new sqlite3.Database('events.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database');
});

db.serialize(function () {
    db.run(`DROP TABLE IF EXISTS category;`);
    db.run(`CREATE TABLE category (name TEXT)`);    

    var statement = db.prepare("INSERT INTO category VALUES (?)");
    let categories = ['Recently Viewed' ,'Cultural Tours', 'Half-day Tours', 'Day Trips'];

    categories.forEach((category) => {
        statement.run(category);
    })

    statement.finalize();
    
    db.each("SELECT rowid AS id, name FROM category", function(err, row) {
        console.log(row.id + ": " + row.name);
    });

});


db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Closed database connection');
});

