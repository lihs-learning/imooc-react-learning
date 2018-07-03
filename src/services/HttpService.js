import axios from 'axios'

const root = 'http://api.github.com'

function httpRequest({method = 'get', url, data, needToken = false}) {
  if(!url) {
    throw Error('Request need a url')
  }
  return axios({
    method,
    url,
    data,
    needToken
  })
}

const user = (function () {
  const url = root + '/users'
  return {
    reqUser: function (userName) {
      if (!userName) {
        throw Error(`API: user.reqUser require userName, but get ${userName}`)
      }
      return httpRequest({
        url: url + '/' + userName
      })
    },
    reqUserStarred: function (userName) {
      if (!userName) {
        throw Error('API: user.reqUserStarred require userName')
      }
      return httpRequest({
        url: url + '/' + userName + '/starred'
      })
    }
  }
})()

export {user}
