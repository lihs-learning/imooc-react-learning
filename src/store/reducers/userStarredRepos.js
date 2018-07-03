import {
  GET_USER_STARRED_REPO,
  GET_USER_STARRED_REPO_SUCCESS,
  GET_USER_STARRED_REPO_FAILED
} from '../actions/types';

const defaultState = {
  isPending: true,
  list: [],
  msg: ''
}

const userStarredRepos = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_STARRED_REPO: {
      return {
        ...state,
        isPending: action.isPending
      }
    }
    case GET_USER_STARRED_REPO_SUCCESS: {
      return {
        ...state,
        isPending: action.isPending,
        list: action.list
      }
    }
    case GET_USER_STARRED_REPO_FAILED: {
      return {
        ...state,
        isPending: action.isPending,
        msg: action.msg
      }
    }
    default: {
      return state
    }
  }
}

export default userStarredRepos
