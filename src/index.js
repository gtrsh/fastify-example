import rb from 'rubico'
import { db } from './dal'
import { logger } from './logger'

const insertOp = (data) => db('coubs').insert(data)
const insertCoubData = rb.tryCatch(
  insertOp,
  (error) => {
    logger.error(`insert error: ${error.message}`)
    return error
  }
)

const errVal = await insertCoubData({ data: "test" })
process.exit(0)

process.on('uncaughtException', err => {
  logger.error(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})
