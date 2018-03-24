const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow CORS requests
app.use(cors());

var Datastore = require('nedb');
var db = new Datastore({filename: './database/data.json', autoload: true });

db.loadDatabase(function (err) {
  if(err) {
    console.error(err);
  }
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Server is running :)');
});

// Beautify lastname and firstname :D
const fixName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

app.post('/adduser', (req, res) => {
  var email = req.body.email;
  var firstname = (req.body.firstname !== undefined) ? fixName(req.body.firstname) : "";
  var lastname = (req.body.lastname !== undefined) ? fixName(req.body.lastname) : "";
  var displayName = firstname + " " + lastname;
  var age = req.body.age;
  var phonenumber = req.body.phonenumber;
  var motive = req.body.motive;
  var symptoms = req.body.symptoms;
  var avatar = req.body.avatar;
  var firstConsult = req.body.firstConsult;
  var antecedent = req.body.antecedent;
  var timeSubscribed = new Date(Date.now());

  const myuser = {
    email : email,
    firstname : firstname,
    lastname : lastname,
    displayName: displayName,
    age: age,
    phonenumber : phonenumber,
    motive: motive,
    symptoms: symptoms,
    avatar: avatar,
    firstConsult: firstConsult,
    timeSubscribed: timeSubscribed,
    antecedent: antecedent
  };
  
  db.insert(myuser, (err, resp) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(resp);
    }
  });
});

app.get('/users', (req, res) => {
  db.find({}).sort({ timeSubscribed: 1 }).exec((err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }
    res.status(200).send(users);
  });
});

app.delete('/users/:id', (req, res) => {
  var iduser = req.params.id;
  if(!iduser || iduser === "") {
    res.status(400).send("Bad request: id of user is missing");
  }
  console.log(iduser);
  db.remove({ _id: iduser }, {}, (err, resp) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }
    res.status(200).send("Successfully deleted user");
  });
});

app.listen(8080);
