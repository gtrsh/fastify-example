import {
  insert,
  selectAll
} from '../../dal/coubs'
import { logger } from '../../logger';

const coubs = (fastify, _, done) => {
  fastify.get('/', async (req, res) => {
    logger.info('select coubs')
    return selectAll()
  })

  fastify.post('/', async (req, res) => {
    const { body: data } = req
    return insert(data)
  })

  done()
}

export {
  coubs
}
