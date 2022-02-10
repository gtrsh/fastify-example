import fastify from 'fastify'
import {
  healthcheck
} from './api'

const createApp = (opts = {}) => {
  const app = fastify(opts)

  app.register(healthcheck, { prefix: '/api/healthcheck'})
  return app
}

export {
  createApp
}
