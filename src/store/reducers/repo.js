import {
  GET_REPO,
  GET_REPO_SUCCESS,
  GET_REPO_FAILED
} from '../actions/types';

const defaultState = {
  isPending: null,
  userName: '',
  repoName: '',
  repo: {}
}

const repo = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPO: {
      return {
        ...state,
        isPending: action.isPending,
        userName: action.userName,
        repoName: action.repoName
      }
    }
    case GET_REPO_SUCCESS: {
      return {
        ...state,
        isPending: action.isPending,
        repo: action.repo
      }
    }
    case GET_REPO_FAILED: {
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

export default repo
