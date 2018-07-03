import {
  GET_USER_STARRED_REPO,
  GET_USER_STARRED_REPO_SUCCESS,
  GET_USER_STARRED_REPO_FAILED
} from '../actions/types';

const defaultState = {
  isPending: null,
  userName: '',
  userStarredRepoList: [],
  msg: ''
}

const userStarredRepo = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_STARRED_REPO: {
      return {
        ...state,
        isPending: action.isPending,
        userName: action.userName
      }
    }
    case GET_USER_STARRED_REPO_SUCCESS: {
      return {
        ...state,
        isPending: action.isPending,
        user: action.user
      }
    }
    case GET_USER_STARRED_REPO_FAILED: {
      return {
        ...state,
        isPending: action.isPending,
        msg: action.msg
      }
    }
  }
}

export default userStarredRepo
