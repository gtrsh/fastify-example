import { request } from 'undici'
import { getMetaData } from './metadata'
import { getFileName } from './utils'

const data = await getMetaData('https://coub.com/view/1v0g2g')
const { requested_formats } = JSON.parse(data.toString())
console.log(requested_formats)
const { url: videoUrl, filesize: videoSize } = requested_formats.find((i) => i.video_ext === 'mp4')
const { url: audioUrl, filesize: audioSize } = requested_formats.find((i) => i.audio_ext === 'mp3')

const { statusCodeVid, body: bodyStreamVid } = await request(videoUrl)
const { statusCodeAud, body: bodyStreamAud } = await request(audioUrl)

import { client } from './dal'

client.putObject('coub-bucket', getFileName(videoUrl), bodyStreamVid, videoSize, (err, objInfo) => {
  if(err) {
    return console.log(err) // err should be null
  }
  console.log("upload complete")
  console.log(objInfo)
})

client.putObject('coub-bucket', getFileName(audioUrl), bodyStreamAud, audioSize, (err, objInfo) => {
  if(err) {
    return console.log(err) // err should be null
  }
  console.log("upload complete")
  console.log(objInfo)
})
