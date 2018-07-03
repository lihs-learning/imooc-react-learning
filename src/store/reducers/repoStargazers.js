import {
  GET_REPO_STARGAZERS,
  GET_REPO_STARGAZERS_SUCCESS,
  GET_REPO_STARGAZERS_FAILED
} from '../actions/types';

const defaultState = {
  isPending: null,
  stargazersList: []
}

const repoStargazers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPO_STARGAZERS: {
      return {
        ...state,
        isPending: true
      }
    }
    case GET_REPO_STARGAZERS_SUCCESS: {
      return {
        ...state,
        isPending: false,
        list: action.list
      }
    }
    case GET_REPO_STARGAZERS_FAILED: {
      return {
        ...state,
        isPending: false,
        msg: action.msg
      }
    }
    default: {
      return state
    }
  }
}

export default repoStargazers
