import React, {Component, Fragment} from 'react'

import Todos from '../../containers/TodoList'

class TodoList extends Component {

  render() {
    return (
      <Fragment>
        <Todos/>
      </Fragment>
    )
  }

}

export default TodoList
