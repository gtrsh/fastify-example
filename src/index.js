import { getMetaData } from './metadata'

const data = await getMetaData('https://coub.com/view/2nmqv5')
const { requested_formats } = JSON.parse(data.toString())
console.log(requested_formats)
const { url: videoUrl, filesize: videoSize } = requested_formats.find((i) => i.video_ext === 'mp4')
const { url: audioUrl, filesize: audioSize } = requested_formats.find((i) => i.audio_ext === 'mp3')

console.log(videoUrl)
console.log(videoSize)
console.log('==========')
console.log(audioUrl)
console.log(audioSize)

import { client } from './dal'
