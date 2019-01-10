const Sequelize = require('sequelize');

const sequelize = new Sequelize('cars', 'morgangrace', '', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  pool: {
    max: 1,
    min: 0,
    acquire: 1000000,
    idle: 10000,
  },
});

const CarInfo = sequelize.define('carInfo', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  companyName: Sequelize.STRING(20),
  carName: Sequelize.STRING(50),
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
  moreD: Sequelize.STRING(1000),
  moreE: Sequelize.STRING(1000),
  sentence: Sequelize.STRING(100),
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


exports.CarInfo = CarInfo;
