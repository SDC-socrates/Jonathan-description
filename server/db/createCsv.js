const faker = require('faker');
const csv = require('fast-csv');
const fs = require('fs');

var i = 0;
var csvStream = csv.createWriteStream({ headers: true }),
  writableStream = fs.createWriteStream("server/db/output4.csv");

writableStream.on("finish", function () {
  console.log("DONE!");
});

csvStream.pipe(writableStream);
while (i < 3000000) {
  csvStream.write({
    id: 1000000 + i,
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
  i++;
}
csvStream.end();