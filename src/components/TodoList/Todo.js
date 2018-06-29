import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.done ? 'line-through' : 'none'
        }}
      >
        {this.props.content}
      </li>
    )
  }

}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default Todo
