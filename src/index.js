import rb from 'rubico'
import { db } from './dal'

const insert = (data) => db('coubs').insert(data)
const insertCoubData = rb.tryCatch(
  insert,
  (error) => (error)
)

const errVal = await insertCoubData({ data: "test"})
console.log(errVal.message)

process.exit(0)
