/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('books', tbl => {
    tbl.increments("book_id")
    tbl.string('book').notNullable()
    tbl.string('chapter').notNullable()
    tbl.string("verse").notNullable()
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books')
};
