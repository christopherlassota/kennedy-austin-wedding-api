/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('guestlist', (table) => {
      table.increments('id').primary();
      table.string('guest_firstname').notNullable();
      table.string('guest_lastname').notNullable();
      table.string('rsvp').notNullable();
      table.string('contact_email').notNullable();
      table.string('group').notNullable();
      table.string('dietary_restrictions').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('guestlist');
  };