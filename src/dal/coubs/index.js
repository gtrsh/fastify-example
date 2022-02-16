import rb from 'rubico'
import { db } from '../db'
import { logger } from '../../logger'
import { randomUUID } from 'node:crypto'

const selectAllOp = () => db('coubs').select('*')
const insertOp = (data) => (
  db('coubs')
    .insert({ data: { coub_id: randomUUID(), ...data } }, ['data', 'created_at'])
)

const selectAll = rb.tryCatch(
  selectAllOp,
  (error) => {
    logger.error(`can't select: ${error.message}`)
    return error
  }
)

const insert = rb.tryCatch(
  insertOp,
  (error) => {
    logger.error(`can't insert: ${error.message}`)
    return error
  }
)

export {
  selectAll,
  insert
}
