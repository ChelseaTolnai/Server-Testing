const faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('employees')
    .truncate()
    .then(function () {
      return knex('employees').insert([
        { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
        { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
        { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
        { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
      ]);
    });
};
