import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

class List extends Component {

  constructor(props) {
    super(props)
    this.todosRender = this.todosRender.bind(this)
  }

  todosRender() {
    return this.props.todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => {
          this.props.toggleTodo(todo.id)
        }}
      />
    )
  }

  render() {
    return (
      <ul>
        {this.todosRender()}
      </ul>
    )
  }

}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default List
