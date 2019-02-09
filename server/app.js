const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
    res.send('moo');
});

app.get('/api/events/:id', controller.events.get);

let port = process.env.PORT || 3016;

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

module.exports = app;