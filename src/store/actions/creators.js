import * as ACTION_TYPES from './types'

// 用户信息
export const getUserRequestAction = () => ({
  type: ACTION_TYPES.GET_USER
})

export const getUserRequestSuccessAction = (info) => ({
  type:ACTION_TYPES.GET_USER_SUCCESS,
  info
})

export const getUserRequestFailedAction = () => ({
  type: ACTION_TYPES.GET_USER_FAILED,
  msg: '获取用户失败'
})

// 用户收藏仓库
export const getUserStarredRepoRequestAction = () => ({
  type: ACTION_TYPES.GET_USER_STARRED_REPO,
})

export const getUserStarredRepoRequestSuccessAction = (list) => ({
  type:ACTION_TYPES.GET_USER_STARRED_REPO_SUCCESS,
  list
})

export const getUserStarredRepoRequestFailedAction = () => ({
  type: ACTION_TYPES.GET_USER_STARRED_REPO_FAILED,
  msg: '获取用户收藏仓库失败'
})

// 仓库信息
export const getRepoRequestAction = () => ({
  type: ACTION_TYPES.GET_REPO
})

export const getRepoSuccessAction = (info) => ({
  type:ACTION_TYPES.GET_REPO_SUCCESS,
  info
})

export const getRepoFailedAction = () => ({
  type: ACTION_TYPES.GET_REPO_FAILED,
  msg: '获取仓库失败'
})

// 收藏仓库的用户
export const getRepoStargazersAction = () => ({
  type: ACTION_TYPES.GET_REPO_STARGAZERS,
})

export const getRepoStargazersSuccessAction = (list) => ({
  type:ACTION_TYPES.GET_REPO_STARGAZERS_SUCCESS,
  list
})

export const getRepoStargazersFailedAction = () => ({
  type: ACTION_TYPES.GET_REPO_STARGAZERS_FAILED,
  msg: '获取收藏仓库的用户失败'
})
