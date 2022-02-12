import { createApp } from './app'
import { logger } from './logger'

const app = createApp({ logger: false })
const start = async () => {
  try {
    await app.listen(process.env.APP_PORT)
    logger.info(`app running on port ${process.env.APP_PORT}`)
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}
start()

process.on('uncaughtException', err => {
  logger.error(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})
