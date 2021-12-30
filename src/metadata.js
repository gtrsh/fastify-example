import spawn from 'await-spawn'

const args = '--dump-single-json'
const command = 'yt-dlp'
const getMetaData = (url) => spawn(command, [args, url])

export {
  getMetaData
}
