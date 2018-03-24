const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/snap_consult');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('db successfully connected'); });

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  email: String,
  firstname: String,
  lastname: String,
  phonenumber: String
});
const Users = mongoose.model('users', userSchema);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/adduser', (req, res) => {
  const myuser = new Users({ login: '', password: '', email: '', firstname: '', lastname: '', phonenumber: '' });

  myuser.save((err, resp) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      console.log(resp.firstname);
      res.status(200).send(resp);
    }
  });
});

app.get('/users', (req, res) => {
  Users.find((err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }
    res.status(200).send(users);
  });
});

app.listen(8080);
