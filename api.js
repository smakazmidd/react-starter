var api = require('express').Router();
var jsonfile = require('jsonfile');
var path = require('path');
var bodyParser = require('body-parser');

api.use(bodyParser.urlencoded({ extended: false }));

api.use(bodyParser.json());

api.get('/hello', (req,res) => {
  res.send('world');
});

api.get('/contacts', (req,res) => {
  jsonfile.readFile(filePath, (err, obj) => {
    if (!err) {
      res.json(obj);
    }
    else {
      res.json([]);
    }
  })
});

api.put('/contact', (req,res) => {
  jsonfile.readFile(filePath, (err, obj) => {
    if (!err) {
      var contactId = req.body.id || Date.now();
      var contacts = obj.filter((c) => c.id != contactId);
      var contact = {id: contactId, firstName: req.body.firstName, lastName: req.body.lastName};
      contacts.push(contact);
      jsonfile.writeFile(filePath, contacts, (err) => {
        if(err)
          res.json(err);
        else {
          res.json({success:true});
          req.io.sockets.emit('contactAdded', contact);
        }
      });
    }
    else {
      res.json(err);
      return;
    }
  });
});

api.delete('/contact', (req,res) => {
  jsonfile.readFile(filePath, (err, obj) => {
    if (!err) {
      var contactId = req.body.id;
      var contacts = obj.filter((c) => c.id != contactId);
      jsonfile.writeFile(filePath, contacts);
    }
    res.end();
  })
});

module.exports = api;
