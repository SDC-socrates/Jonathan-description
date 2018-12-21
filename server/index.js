const express = require('express');
const parser = require('body-parser');
const db = require('./db/index.js');

let app = express();
app.set('port', 3333);
app.use(parser.json());
app.use(express.static(__dirname + '/../public'));

app.get('/api/turash/description/:id', function(req, res) {
  var id = req.params.id;
  db.getData(id, function(data) {
    res.send(data);
  });
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ', app.get('port'));
});



