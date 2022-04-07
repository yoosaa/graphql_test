
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('name')
        t.integer('age')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
