const mysql = require('mysql');
const faker = require('faker');


// Create a database connection and export it from this file.

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cars'
});

connection.connect();

// insert 100 mock data into dabase
for (var i = 1; i < 101; i++) {
  let queryString = 'insert into carInfo (id, companyName, carName, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  let queryArgs = [i, faker.name.firstName(), faker.name.findName(), faker.random.number({'min': 10, 'max': 100}), faker.random.number({'min': 16, 'max': 30}), 'Gas (Premium)', faker.random.arrayElement([2, 4]), faker.random.arrayElement([2, 4, 5, 6, 7]), faker.lorem.sentences(), 'This host caters to business travelers.', 'Automatic transmission', faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];
  connection.query(queryString, queryArgs, function(err) {
    if (err) { throw err; }
  });
}

module.exports = connection;