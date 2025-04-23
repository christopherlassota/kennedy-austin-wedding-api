/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("guestlist", (table) => {
    table.increments("id").primary();
    table.string("guest_firstname").notNullable();
    table.string("guest_lastname").notNullable();
    table.string("rsvp").nullable();
    table.string("contact_email").nullable();
    table.string("group").notNullable();
    table.string("dietary_restrictions").nullable();
    table.string("address").nullable();
    table.string("city").nullable();
    table.string("province").nullable();
    table.string("postal_code").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("guestlist");
}
