import React, {Component} from 'react';
import TodoList from './pages/TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;
