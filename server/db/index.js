const mysql = require('mysql');
const faker = require('faker');

let i;


// Create a database connection and export it from this file.

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cars',
});

connection.connect();

// clear table
connection.query('delete from carInfo;', (err) => {
  if (err) { throw err; }
});

// insert 100 mock data into dabase
for (i = 1; i < 101; i += 1) {
  const queryString = 'insert into carInfo (id, companyName, carName, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  const queryArgs = [i, faker.name.firstName(), faker.name.findName(), faker.random.number({ min: 10, max: 100 }), faker.random.number({ min: 16, max: 30 }), 'Gas (Premium)', 4, faker.random.arrayElement([2, 4, 5, 6, 7]), faker.lorem.paragraphs(), 'This host caters to business travelers.', 'Automatic transmission', faker.lorem.paragraphs(), faker.lorem.paragraphs(), faker.lorem.paragraphs()];
  connection.query(queryString, queryArgs, (err) => {
    if (err) { throw err; }
  });
}

const getData = (id, callback) => {
  const queryString = `select * from carInfo where id = ${id};`;
  connection.query(queryString, (err, result) => {
    if (err) {
      throw err;
    } else {
      callback(result[0]);
    }
  });
};

module.exports.connection = connection;
module.exports.getData = getData;
