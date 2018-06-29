import React, {Component} from 'react'
import {connect} from 'react-redux'

import {VisibilityFilters} from "../../store/actions/types";
import {getAddTodoAction, getSwitchVisibilityFilterAction, getToggleTodoAction} from "../../store/actions/creators";

import AddTodo from '../../components/TodoList/AddTodo'
import List from '../../components/TodoList/List'
import Footer from '../../components/TodoList/Footer'

class TodoList extends Component {

  render() {
    return (
      <div>
        <AddTodo
          addTodo={this.props.addTodo}
        />
        <List
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
        />
        <Footer
          switchTodoFilter={this.props.switchTodoFilter}
          curFilterName={this.props.curFilterName}
        />
      </div>
    )
  }

}

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

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  curFilterName: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(getToggleTodoAction(id)),
  switchTodoFilter: filterName => dispatch(getSwitchVisibilityFilterAction(filterName)),
  addTodo: content => dispatch(getAddTodoAction(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
