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


// let i;


// clear table
// connection.query('delete from carInfo;', (err) => {
//   if (err) { throw err; }
// });

// insert 100 mock data into dabase
// for (i = 1; i < 10000; i += 1) {

//   const queryArgs = [i, 'LUSO', `${faker.name.firstName().toUpperCase()} ${faker.name.lastName().toUpperCase()}`, faker.name.findName(), faker.random.number({ min: 10, max: 100 }), faker.random.number({ min: 16, max: 30 }), `Gas (${faker.random.arrayElement(['Premium', 'Regular'])})`, 4, faker.random.arrayElement([2, 4, 5, 6, 7]), faker.lorem.paragraph(), 'This host caters to business travelers.', 'Automatic transmission', faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.sentence(8)];
//   connection.query(queryString, queryArgs, (err) => {
//     if (err) { throw err; }
//   });
// }

// const getData = (id, callback) => {
//   const queryString = `select * from carInfo where id = ${id};`;
//   connection.query(queryString, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       callback(result[0]);
//     }
//   });
// };

sequelize.sync();


exports.CarInfo = CarInfo;
