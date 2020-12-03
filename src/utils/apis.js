import http from './httpFacade'
import config from './config'

export const create = async payload =>
  await http({
    url: `${config.APP_API}/workshops/create`,
    // url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    body: JSON.stringify(payload)
  })
