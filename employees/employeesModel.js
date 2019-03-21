const db = require('../data/dbConfig');

module.exports = {
  getAll,
  getById,
  insert,
  remove,
};

function getAll() {
  return db('employees');
}

function getById(id) {
  return db('employees').where({ id }).first();
}

async function insert(employee) {
  const [id] = await db('employees').insert(employee);
  return db('employees').where({ id }).first();
}

function remove(id) {
  return db('employees').where({ id }).del();
}

