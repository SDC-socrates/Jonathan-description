//postgres connection seed is in seed.js file

const Sequelize = require('sequelize');

const sequelize = new Sequelize('cars', 'morgangrace', '', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  pool: {
    max: 10,
    min: 0,
    acquire: 1000000,
    idle: 10000,
  },
  benchmark: true,
  logging: true,
});

const Description = sequelize.define('description', {
  car_id: { type: Sequelize.INTEGER, primaryKey: true },
  companyname: Sequelize.STRING(20),
  carname: Sequelize.STRING(50),
  edition: Sequelize.STRING(50),
  trips: Sequelize.INTEGER,
  mpg: Sequelize.INTEGER,
  gas: Sequelize.STRING,
  doors: Sequelize.INTEGER,
  seats: Sequelize.INTEGER,
  description: Sequelize.STRING(1000),
  business: Sequelize.STRING(50),
  features: Sequelize.STRING(30),
  extras: Sequelize.STRING(1000),
  guidelines: Sequelize.STRING(5000),
  faq: Sequelize.STRING(5000),
  mored: Sequelize.STRING(1000),
  moree: Sequelize.STRING(1000),
  sentence: Sequelize.STRING(100)
}, {
  freezeTableName: true,
  timestamps: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


sequelize.sync();

// const getCarById = (id) => {
//   sequelize.query(`select * from description where car_id = ${id}`).then((results) => {
//     return results;
//   });
// };


exports.Description = Description;

//=======================================================================

//MongoDB database connection/seed

// var mongoose = require('mongoose');
// var db = mongoose.connection;
// mongoose.connect('mongodb://localhost/cars');


// const CarInfo = new mongoose.Schema({
//   id: 'number',
//   companyName: 'string',
//   carName: 'string',
//   edition: 'string',
//   trips: 'number',
//   mpg: 'number',
//   gas: 'string',
//   doors: 'number',
//   seats: 'number',
//   description: 'string',
//   business: 'string',
//   features: 'string',
//   extras: 'string',
//   guidelines: 'string',
//   faq: 'string',
//   moreD: 'string',
//   moreE: 'string',
//   sentence: 'string',
// });

// const carInfo = db.model('carInfo', CarInfo);


// exports.carInfo = carInfo;


// //run these in terminal to seed the database

// // mongoimport --db cars --collection stocks --file csv/output.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output2.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output3.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output4.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output5.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output6.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output7.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output8.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output9.csv --type csv --headerline
// // mongoimport --db cars --collection stocks --file csv/output10.csv --type csv --headerline
