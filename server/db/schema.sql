-- Run this command in terminal to connect and seed to the database
-- /psql cars < server/schema.sql

CREATE TABLE IF NOT EXISTS description (
  car_id bigserial primary key,
  companyName varchar(20),
  carName varchar(50),
  edition varchar(50),
  trips serial,
  mpg serial,
  gas varchar,
  doors serial,
  seats serial,
  description varchar(1000),
  business varchar(50),
  features varchar(30),
  extras varchar(1000),
  guidelines varchar(5000),
  faq varchar(5000),
  moreD varchar(1000),
  moreE varchar(1000),
  sentence varchar(100)
)