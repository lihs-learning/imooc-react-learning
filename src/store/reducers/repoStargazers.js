import {
  GET_REPO_STARGAZERS,
  GET_REPO_STARGAZERS_SUCCESS,
  GET_REPO_STARGAZERS_FAILED
} from '../actions/types';

const defaultState = {
  isPending: null,
  userName: '',
  repoName: '',
  stargazersList: []
}

const repoStargazers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPO_STARGAZERS: {
      return {
        ...state,
        isPending: action.isPending,
        userName: action.userName,
        repoName: action.repoName
      }
    }
    case GET_REPO_STARGAZERS_SUCCESS: {
      return {
        ...state,
        isPending: action.isPending,
        stargazersList: action.stargazersList
      }
    }
    case GET_REPO_STARGAZERS_FAILED: {
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

export default repoStargazers
