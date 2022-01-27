import { Client } from 'minio'

const storeConf = JSON.parse(process.env.MINIO)

const client = new Client({
  useSSL: false,
  ...storeConf
})

const uploadFile = (...args) => new Promise((res, rej) => {
  client.putObject(...args, (err, data) => {
    if (err) return rej(err)
    res(data)
  })
})

export {
  storeConf,
  uploadFile,
  client
}
