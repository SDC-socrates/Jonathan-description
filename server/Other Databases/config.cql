write_request_timeout_in_ms: 20000;

CREATE KEYSPACE IF NOT EXISTS cars WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE cars;

CREATE TABLE cars.description (
  car_id int PRIMARY KEY,
  companyName text,
  carName text,
  edition text,
  trips int,
  mpg int,
  gas text,
  doors int,
  seats int,
  description text,
  business text,
  features text,
  extras text,
  guidelines text,
  faq text,
  moreD text,
  moreE text,
  sentence text
);

COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output1.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output2.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output3.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output4.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output5.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output6.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output7.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output8.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output9.csv' WITH HEADER = TRUE and delimiter = ',';
COPY cars.description (car_id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) FROM 'csv/output10.csv' WITH HEADER = TRUE and delimiter = ',';