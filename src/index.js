import { getMetaData } from './metadata'

const data = await getMetaData('https://coub.com/view/2nmqv5')
console.log(data.toString())
console.log(process.env.PG_DB)

import { client } from './dal'

client.listBuckets(function(err, buckets) {
  if (err) return console.log(err)
  console.log('buckets :', buckets)
})

const stream = client.listObjectsV2('coub-bucket','', true,'')
stream.on('data', function(obj) { console.log(obj) } )
