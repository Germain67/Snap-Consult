const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

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
  phonenumber: String,
  displayName: String,
  age: Number
  // avatar: String
});
const User = mongoose.model('users', userSchema);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Server is running :)');
});

// Beautify lastname and firstname :D
const fixName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

app.post('/adduser', (req, res) => {
  var login = req.body.login;
  var password = req.body.password;
  var email = req.body.email;
  var firstname = fixName(req.body.firstname);
  var lastname = fixName(req.body.lastname);
  var displayName = firstname + " " + lastname;
  var age = req.body.age;
  var phonenumber = req.body.phonenumber;

  const myuser = new User({
    login : login,
    password : password,
    email : email,
    firstname : firstname,
    lastname : lastname,
    displayName: displayName,
    age: age,
    phonenumber : phonenumber
  });

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
  User.find((err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }
    res.status(200).send(users);
  });
});

app.listen(8080);

/* Reste d'une fonctionnalitée laissée à l'abandon *chaton mort*

  app.post('/uploadavatar', (req, res) => {
  var avatar = req.body.avatar;
  var iduser = req.body.id;
  var imageAsBase64 = fs.readFileSync(avatar, 'base64');

  User.update({_id: userid}, {
      avatar: imageAsBase64
  }, function(err, affected, resp) {
     console.log(resp);
  });
}); */
