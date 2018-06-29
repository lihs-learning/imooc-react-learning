import {ADD_TODO, TOGGLE_TODO, SWITCH_VISIBILITY_FILTER} from './types'

let nextTodoId = 0

export const getAddTodoAction = (content) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  done: false,
  content
})

export const getToggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const getSwitchVisibilityFilterAction = (filterName) => ({
  type: SWITCH_VISIBILITY_FILTER,
  filterName
})
