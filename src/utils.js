import lodash from 'lodash/fp'
const { pipe, split, last } = lodash

const getFileName = pipe([
  split('/'),
  last
])

export {
  getFileName
}
