import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED
} from '../actions/types';

const defaultState = {
  isPending: true,
  info: {},
  msg: ''
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        isPending: action.isPending
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        isPending: action.isPending,
        info: action.info
      }
    }
    case GET_USER_FAILED: {
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

export default user
