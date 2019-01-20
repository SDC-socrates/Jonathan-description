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

module.exports = {
  Description
};
