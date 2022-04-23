export const up = (db) => (
  db.schema.createTable('tasks', (table) => {
    table.increments()
    table.jsonb('data')
    table.timestamp('created_at', { useTz: false }).defaultTo(db.fn.now())
    table.timestamp('updated_at', { useTz: false }).defaultTo(db.fn.now())
  })
)

export const down = (db) => (
  db.schema.dropTable('tasks')
)
