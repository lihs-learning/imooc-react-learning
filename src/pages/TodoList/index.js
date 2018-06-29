import React, {Component, Fragment} from 'react'

import AddTodo from '../../containers/TodoList/AddTodo'
import VisibleTodoList from '../../containers/TodoList/VisibleTodoList'
import Footer from '../../components/TodoList/Footer'

class TodoList extends Component {

  render() {
    return (
      <Fragment>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </Fragment>
    )
  }

}

export default TodoList
