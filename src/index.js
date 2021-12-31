import { getMetaData } from './metadata.js'

const data = await getMetaData('https://coub.com/view/2nmqv5')
console.log(data.toString())
console.log(process.env.PG_DB)
