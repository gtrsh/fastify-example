import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: process.env.PG_DB
})

export {
  db
}
