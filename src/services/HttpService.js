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

const users = (function () {
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
        throw Error('API: users.reqUserStarred require userName')
      }
      return httpRequest({
        url: url + '/' + userName + '/starred'
      })
    }
  }
})()

const repos = (function () {
  const url = root + '/repos'
  return {
    reqRepo: function (repoFullName) {
      if (!repoFullName) {
        throw Error(`API: repo.reqRepo require repoFullName, but get ${repoFullName}`)
      }
      return httpRequest({
        url: `${url}/${repoFullName}`
      })
    },
    reqRepoStargazers: function (repoFullName) {
      if (!repoFullName) {
        throw Error(`API: repo.reqRepoStargazers require repoFullName, but get ${repoFullName}`)
      }
      return httpRequest({
        url: `${url}/${repoFullName}/stargazers`
      })
    }
  }
})()

export {users, repos}
