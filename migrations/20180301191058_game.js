
exports.up = (knex, Promise) => {
  return knex.schema.createTable('game', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('developer');
    table.float('rating', 3, 1);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('game');
};
