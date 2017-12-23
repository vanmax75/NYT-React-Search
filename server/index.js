const express = require('express');
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path');
const db = require('./db');

const app = express();

app.set('port', process.env.PORT);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.resolve(__dirname, '../app/build')));

require('./routes/api-routes')(app);
require('./routes/app-routes')(app);

db.connection.on('error', err => {
    console.error(`🚫 🚫 🚫  ${err.message}  🚫 🚫 🚫`);
});

db.connection.once('open', () => {
    console.log('😎  - Successfully connected to Mongo database -  😎');
});

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${ app.get('port') }`)
});

// fetch('http://localhost:8000/api').then(res => res.json()).then(data => console.log(data));
