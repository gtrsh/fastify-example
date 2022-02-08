const healthcheck = (fastify, _, done) => {
  fastify.get('/', async (req, rep) => {
    return {
      status: 'LIVE'
    }
  })

  done()
}

export {
  healthcheck
}
