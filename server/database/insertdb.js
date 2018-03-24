const Datastore = require('nedb');
const fs = require('fs');
const db = new Datastore({filename: './database/data.json', autoload: true});


var data = fs.readFileSync("./database/users.json");
var jsonData = JSON.parse(data);

db.remove({}, { multi: true }, (err, resp) => {
  if(err) {
    console.error(err);
  } else {
    console.log("successfully removed data");
  }
});

db.insert(jsonData, (err, resp) => {
  if(err) {
    console.error(err);
  } else {
    console.log("successfully insert data");
  }
});
