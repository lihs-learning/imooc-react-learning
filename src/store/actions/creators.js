import * as ACTION_TYPES from './types'

// 用户信息
export const getUserRequestAction = () => ({
  type: ACTION_TYPES.GET_USER,
  isPending: true
})

export const getUserRequestSuccessAction = (info) => ({
  type:ACTION_TYPES.GET_USER_SUCCESS,
  isPending: false,
  info
})

export const getUserRequestFailedAction = () => ({
  type: ACTION_TYPES.GET_USER_FAILED,
  isPending: false,
  msg: '获取用户失败'
})

// 用户收藏仓库
export const getUserStarredRepoRequestAction = () => ({
  type: ACTION_TYPES.GET_USER_STARRED_REPO,
  isPending: true
})

export const getUserStarredRepoRequestSuccessAction = (list) => ({
  type:ACTION_TYPES.GET_USER_STARRED_REPO_SUCCESS,
  isPending: false,
  list
})

export const getUserStarredRepoRequestFailedAction = () => ({
  type: ACTION_TYPES.GET_USER_STARRED_REPO_FAILED,
  isPending: false,
  msg: '获取用户收藏仓库失败'
})

// 仓库信息
export const getRepoAction = (userName, repoName) => ({
  type: ACTION_TYPES.GET_USER,
  isPending: true,
  userName,
  repoName
})

export const getRepoSeccess = (repo) => ({
  type:ACTION_TYPES.GET_USER_SUCCESS,
  isPending: false,
  repo
})

export const getRepoFailed = () => ({
  type: ACTION_TYPES.GET_USER_FAILED,
  isPending: false,
  msg: '获取仓库失败'
})

// 收藏仓库的用户
export const getRepoStargazersAction = (userName, repoName) => ({
  type: ACTION_TYPES.GET_USER,
  isPending: true,
  userName,
  repoName
})

export const getRepoStargazersSeccess = (stargazerList) => ({
  type:ACTION_TYPES.GET_USER_SUCCESS,
  isPending: false,
  stargazerList
})

export const getRepoStargazersFailed = () => ({
  type: ACTION_TYPES.GET_USER_FAILED,
  isPending: false,
  msg: '获取收藏仓库的用户失败'
})
