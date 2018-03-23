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

const kittySchema = mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model('Kitten', kittySchema);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/addkitten', (req, res) => {
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  silence.save((err, kit) => {
    if (err) {
      console.error(err);
    } else {
      console.log(kit.name); // 'Silence'
      res.send('New kitten added !');
    }
  });
});

app.get('/kittens', (req, res) => {
  Kitten.find((err, kittens) => {
    if (err) {
      console.error(err);
    }
    res.send(kittens);
  });
});

app.listen(8080);
