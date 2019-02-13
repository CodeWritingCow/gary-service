const express = require('express');
const app = express();
const controller = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../client/dist'));

// Test route
app.get('/', (req, res) => {
    res.send('moo');
});

app.get('/api/events/:id', controller.getEventById);

let port = process.env.PORT || 3016;

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

module.exports = app;