var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/cars');


const CarInfo = new mongoose.Schema({
  id: 'number',
  companyName: 'string',
  carName: 'string',
  edition: 'string',
  trips: 'number',
  mpg: 'number',
  gas: 'string',
  doors: 'number',
  seats: 'number',
  description: 'string',
  business: 'string',
  features: 'string',
  extras: 'string',
  guidelines: 'string',
  faq: 'string',
  moreD: 'string',
  moreE: 'string',
  sentence: 'string',
});

const carInfo = db.model('carInfo', CarInfo);


exports.carInfo = carInfo;


//run these in terminal to seed the database

// mongoimport --db cars --collection stocks --file csv/output.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output2.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output3.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output4.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output5.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output6.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output7.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output8.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output9.csv --type csv --headerline
// mongoimport --db cars --collection stocks --file csv/output10.csv --type csv --headerline