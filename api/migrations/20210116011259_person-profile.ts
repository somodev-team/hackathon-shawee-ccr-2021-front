import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('person_profile', (table) => {
    table.string('user_id', 36).primary().notNullable().unique();
    table.string('name', 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('person_profile');
}
