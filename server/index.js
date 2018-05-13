const express = require('express');
const bodyParser = require('body-parser');
const db = require('./components/db');
const routes = require('./router/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/dist'));

app.use('/', routes);

db.connect('mongodb://localhost:27017', (err) => {
    if (err) {
        return console.error(err)
    }
    app.listen(3030, () => {
        console.log('Server started on port 3030');
    })
});
