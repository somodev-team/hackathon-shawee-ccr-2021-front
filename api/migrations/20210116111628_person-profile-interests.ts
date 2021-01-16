import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('person_profile', table => {
    table.json('areas-of-interest')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('person_profile', table => {
    table.dropColumn('areas-of-interest')
  })
}
