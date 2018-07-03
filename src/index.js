import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import Root from './Root'
import store from './store'

render(
  <Router>
    <Root store={store}/>
  </Router>,
  document.getElementById('root')
);
