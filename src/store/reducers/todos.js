import {ADD_TODO, TOGGLE_TODO} from "../actions/types";

const defaultState = [];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          done: action.done,
          content: action.content
        }
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id
          ? {...todo, done: !todo.done}
          : todo
      )
    }
    default: {
      return state
    }
  }
}

export default todos