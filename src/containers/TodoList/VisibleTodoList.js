import {connect} from 'react-redux'
import {getToggleTodoAction} from "../../store/actions/creators";
import {VisibilityFilters} from "../../store/actions/types";

import List from '../../components/TodoList/List'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL: {
      return todos
    }
    case VisibilityFilters.SHOW_ACTIVE: {
      return todos.filter(todo => !todo.done)
    }
    case VisibilityFilters.SHOW_COMPLETED: {
      return todos.filter(todo => todo.done)
    }
    default: {
      throw new Error('Unknown filter: ' + filter)
    }
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(getToggleTodoAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
