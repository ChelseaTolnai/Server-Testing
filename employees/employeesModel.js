const db = require('../data/dbConfig');

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove,
};

function getAll() {
  return db('employees');
}

async function getById(id) {
  return await db('employees').where({ id }).first();
}

function insert(employee) {
  return null
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

