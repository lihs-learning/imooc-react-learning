import {
  GET_REPO,
  GET_REPO_SUCCESS,
  GET_REPO_FAILED
} from '../actions/types';

const defaultState = {
  isPending: true,
  info: {},
  msg: ''
}

const repo = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPO: {
      return {
        ...state,
        isPending: true,
      }
    }
    case GET_REPO_SUCCESS: {
      return {
        ...state,
        isPending: false,
        info: action.info
      }
    }
    case GET_REPO_FAILED: {
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

export default repo
