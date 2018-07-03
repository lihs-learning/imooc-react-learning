import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Route, Link} from 'react-router-dom'

import RealWorld from './containers/RealWorld'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Route path="/" exact
                 component={() => (<Link to="/RealWorld">RealWorld</Link>)}/>
          <Route path="/RealWorld"
                 component={RealWorld}/>
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
