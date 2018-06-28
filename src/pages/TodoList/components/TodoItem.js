import React, {Component} from 'react'
import {getDoneTodoItemAction} from '../../../store/actionCreators'
import store from '../../../store'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.content !== this.props.content
  }

  handleItemClick() {
    // const {doneItem, index} = this.props
    const {index} = this.props
    const action = getDoneTodoItemAction(index)
    // doneItem(index)
    store.dispatch(action)
  }

  render() {
    const {content} = this.props
    return (
      <li onClick={this.handleItemClick}>
        {content}
      </li>
    )
  }
}

export default TodoItem
