import React, {Component} from 'react'

class AddTodo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoContent: ''
    }
    this.handleContentInput = this.handleContentInput.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  handleContentInput(e) {
    const todoContent = e.target.value
    this.setState(() => ({
      todoContent
    }))
  }

  handleAddClick() {
    let todoContent = this.state.todoContent
    if (!todoContent.trim()) {
      return
    }
    this.props.addTodo(todoContent)
    this.setState(() => ({
      todoContent: ''
    }))
  }

  render() {
    return (
      <div>
        <input
          onInput={this.handleContentInput}
          value={this.state.todoContent}
          type="text"
        />
        <button onClick={this.handleAddClick}>Add</button>
      </div>
    )
  }

}

export default AddTodo
