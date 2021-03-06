const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const db = require('./components/db');
const routes = require('./router/index');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(session({
  secret: 'doesnt metter',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://localhost:27017/vue_blog',
  })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/dist'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

db.connect('mongodb://localhost:27017', (err) => {
  if (err) {
      return console.error(err)
  }
  app.listen(3030, () => {
      console.log('Server started on port 3030');
  })
});
