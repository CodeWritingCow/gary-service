// To create tables:
// in command line, run 'sqlite3 events.db'
// then in sqlite terminal, run '.read db.sql'

const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const db = new sqlite3.Database('events.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database');
});

db.serialize(function () {    
    // insert data into category table
    let statement = db.prepare("INSERT INTO category VALUES (?)");
    let categories = ['Recently Viewed' ,'Cultural Tours', 'Half-day Tours', 'Day Trips'];

    categories.forEach((category) => {
        statement.run(category);
    })
    statement.finalize();

    // statementTwo VALUES are, in order:
    // reviews_count; price; rating; name; image_url; category
    let statementTwo = db.prepare(`INSERT INTO event VALUES(?, ?, ?, ?, ?, ?)`);
    
    for (let index = 0; index < 100; index++) {
        statementTwo.run(faker.random.number(), faker.commerce.price(), faker.random.number(), faker.address.country(), faker.image.imageUrl(), faker.random.number());        
    }
    statementTwo.finalize();

    // log rows from category table
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
