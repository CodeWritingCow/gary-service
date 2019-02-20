const express = require('express');
const app = express();
const controller = require('./controllers');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.send('moo');
});

app.get('/api/events/:id', controller.getEventById);

app.get('/api/categories/:id', controller.getEventsByCategory);

app.get('/api/category/name/:id', controller.getCategoryNameById);

let port = process.env.PORT || 3016;

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

module.exports = app;