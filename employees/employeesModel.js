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
  return null;
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

