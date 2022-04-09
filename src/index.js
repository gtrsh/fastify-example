import { spawn } from 'child_process'

const getMetaData = (url) => spawn('yt-dlp', ['--dump-single-json', url])

getCoubDataObject('https://coub.com/view/2nmqv5')
  .stdout
  .on('data', (data) => console.log(JSON.parse(data.toString())))

getMetaData('https://coub.com/view/2nmqasfd33333333333v5')
  .stderr
  .on('data', (data) => console.log(data.toString()))

