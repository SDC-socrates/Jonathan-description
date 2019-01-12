const faker = require('faker');
const db = require('./index.js');
let n = 0;
const insertIntoDb = (numOfTimes = 500) => {
  const reviews = [];
  for (let i = 0; i < numOfTimes; i += 1) {
    const info = {
      id: n,
      companyName: 'LUSO',
      carName: `${faker.name.firstName().toUpperCase()}`,
      edition: faker.name.findName(),
      trips: faker.random.number({ min: 10, max: 100 }),
      mpg: faker.random.number({ min: 16, max: 30 }),
      gas: `Gas (${faker.random.arrayElement(['Premium', 'Regular'])})`,
      doors: 4,
      seats: faker.random.arrayElement([2, 4, 5, 6, 7]),
      description: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
      business: 'This host caters to business travelers.',
      features: 'Automatic transmission',
      extras: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
      guidelines: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
      faq: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
      moreD: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
      moreE: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
      sentence: faker.lorem.sentence(8)
    }
    reviews.push(info);
  }

  let timer = 500;
  let n = 0;
  while (n < 10000) {
    setTimeout(() => { db.CarInfo.bulkCreate(reviews) }, timer);
    timer += 500;
    n += 1;
  }
};

module.exports = {
  insertIntoDb
}

require('make-runnable');
