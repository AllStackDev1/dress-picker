import fetch from 'node-fetch'
import QueryString from 'query-string'
import isEmpty from 'lodash/isEmpty'

const Ajax = async ({ url, method, body, query, token }) => {
  let _url = null
  if (!isEmpty(query)) {
    const queryString = QueryString.stringify(query)
    _url = `${url}?${queryString}`
  } else {
    _url = `${url}`
  }

  const headers = { 'Content-type': 'application/json; charset=UTF-8' }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  try {
    return await fetch(_url, { method, body, headers })
  } catch (err) {
    return err
  }
}

export default Ajax
