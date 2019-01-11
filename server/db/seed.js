const faker = require('faker');
const db = require('./index.js');


const carInfo = () => {
  for (let i = 0; i < 65000; i += 1) {
    db.CarInfo.create({
      id: i + 1,
      companyName: 'LUSO',
      carName: `${faker.name.firstName().toUpperCase()}`,
      edition: faker.name.findName(),
      trips: faker.random.number({ min: 10, max: 100 }),
      mpg: faker.random.number({ min: 16, max: 30 }),
      gas: `Gas (${faker.random.arrayElement(['Premium', 'Regular'])})`,
      doors: 4,
      seats: faker.random.arrayElement([2, 4, 5, 6, 7]),
      description: faker.lorem.paragraph(),
      business: 'This host caters to business travelers.',
      features: 'Automatic transmission',
      extras: faker.lorem.paragraph(),
      guidelines: faker.lorem.paragraph(),
      faq: faker.lorem.paragraph(),
      moreD: faker.lorem.paragraph(),
      moreE: faker.lorem.paragraph(),
      sentence: faker.lorem.sentence(8),
    });
  }
};

carInfo();
