import {ADD_TODO_ITEM, DONE_TODO_ITEM} from "./actionTypes";

const defaultState = {
  todoList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.todoList.push(action.itemContent)
      return newState
    }
    case DONE_TODO_ITEM: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.todoList.splice(action.itemIndex)
      return newState
    }
    default: {
      return state
    }
  }
}