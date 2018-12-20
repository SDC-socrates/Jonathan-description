const express = require('express');
const db = require('./db/index.js');

let app = express();
app.set('port', 3000);
app.use(express.static('client/dist'));

app.get('/api/turash/description/:id', function(req, res) {
  var id = req.params.id;
  var queryString = `select * from carInfo where id = ${id};`
  db.query(queryString, function(err, result) {
    if (err) { throw err; }
    else {
      res.send(result[0]);
    }
  });
  // db.getData(function(data) {
  //   res.send(data);
  // });
})

app.listen(app.get('port'), function() {
  console.log(`Listening on port `, app.get('port'));
});