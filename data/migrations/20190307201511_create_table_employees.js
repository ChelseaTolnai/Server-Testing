exports.up = function (knex, Promise) {
    return knex.schema.createTable('employees', e => {
        e.increments();
        e.string('name', 255).notNullable();
        e.string('jobTitle', 255).notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('employees');
};