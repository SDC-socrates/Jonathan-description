DROP DATABASE IF EXISTS cars;
CREATE DATABASE cars;


for
(i = 1; i < 10000; i += 1) {

//   const queryArgs = [ faker.random.number({ min: 10, max: 100 }), faker.random.number({ min: 16, max: 30 }), `Gas (${faker.random.arrayElement(['Premium', 'Regular'])})`, 4, faker.random.arrayElement
([2, 4, 5, 6, 7]), faker.lorem.paragraph
(), 'This host caters to business travelers.', 'Automatic transmission', faker.lorem.paragraph
(), faker.lorem.paragraph
(), faker.lorem.paragraph
(), faker.lorem.paragraph
(), faker.lorem.paragraph
(), faker.lorem.sentence
(8)];
//   connection.query
(queryString, queryArgs,
(err) => {
//
if (err) { throw err; }
//   });
// }