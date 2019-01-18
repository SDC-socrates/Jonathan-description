require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./db/index.js');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3003);
app.use(parser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(/\/\d+\//, express.static(path.join(__dirname, '../public')));

// app.get('/api/turash/description/:id', (req, res) => {
//   let car_id = Number(req.params.id);
//   db.carInfo.find({'id': car_id}).exec().then( (data) => {
//     res.send(data);
//   });
// });

//postgres

app.get('/api/turash/description/:id', (req, res) => {
  let id = req.params.id.split(':')
  id = Number(id[0]);
  if (isNaN(id)) {
    id = 0;
  }
  db.Description.findAll({ where: {car_id: id}}).then((data) => {
    res.send(data);
  });
});

app.listen(app.get('port'), () => {
  console.log('Listening on port ', app.get('port'));
});
