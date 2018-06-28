import {ADD_TODO_ITEM, DONE_TODO_ITEM} from './actionTypes'

export const getDoneTodoItemAction = (itemIndex) => ({
  type: DONE_TODO_ITEM,
  itemIndex
})

export const getAddTodoItemAction = (itemContent) => ({
  type: ADD_TODO_ITEM,
  itemContent
})