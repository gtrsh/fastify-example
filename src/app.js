import fastify from 'fastify'
import {
  coubs,
  healthcheck
} from './api'

const createApp = (opts = {}) => {
  const app = fastify(opts)

  app.register(coubs, { prefix: '/api/coubs' })
  app.register(healthcheck, { prefix: '/api/healthcheck' })
  return app
}

export {
  createApp
}
