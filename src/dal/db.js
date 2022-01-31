import Knex from 'knex'

const { pathname } = new URL('./migrations', import.meta.url)
const config = {
  client: 'pg',
  connection: process.env.PG_DB,
  migrations: {
    tableName: 'knex_migrations',
    directory: pathname,
    loadExtensions: ['.js']
  }
}

const db = Knex(config)

export {
  db,
  config as default
}
