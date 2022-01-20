import { Client } from 'minio'

const storeConf = JSON.parse(process.env.MINIO)

const client = new Client({
  useSSL: false,
  ...storeConf
})

export {
  storeConf,
  client
}
