import {combineReducers} from 'redux'

import user from './user'
import userStarredRepos from './userStarredRepos'
import repo from './repo'
import repoStargazers from './repoStargazers'

export default combineReducers({
  user,
  userStarredRepos,
  repo,
  repoStargazers
})
