import React, {Component, Fragment} from 'react'
import TodoItem from './components/TodoItem'
import {getAddTodoItemAction} from '../../store/actionCreators';
import store from "../../store";

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: store.getState().todoList,
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleDoneItem = this.handleDoneItem.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    const action = getAddTodoItemAction(this.state.inputValue)
    store.dispatch(action)
    this.setState(() => ({
      inputValue: ''
    }))
  }

  // handleDoneItem(index) {
  //   this.setState((prevState) => {
  //     const list = [...prevState.list]
  //     list.splice(index, 1)
  //     return {
  //       list
  //     }
  //   })
  // }

  handleStoreChange() {
    this.setState(() => ({
      list: store.getState().todoList
    }))
  }

  listRender() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          index={index}
          key={index}
          // doneItem={this.handleDoneItem}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder={'请输入待办事项'}
          />
          <button onClick={this.handleBtnClick}>添加</button>
        </div>
        <ul>{this.listRender()}</ul>
      </Fragment>
    )
  }

}

export default TodoList
