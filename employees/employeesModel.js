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

function getById(id) {
  return db('employees').where({ id }).first();
}

async function insert(employee) {
  const [id] = await db('employees').insert(employee);
  return db('employees').where({ id }).first();
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

