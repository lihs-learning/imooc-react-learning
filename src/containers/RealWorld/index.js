import React, {Component, Fragment} from 'react'
import {Route, withRouter} from 'react-router-dom'

import SearchInput from '../../components/RealWorld/SearchInput'
import RealWorldDesc from '../../components/RealWorld/RealWorldDesc'
import User from './User'
import Repository from './Repository'

class RealWorld extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(userName) {
    if(!userName.trim()) return
    this.props.history.push(`/RealWorld/${userName}`)
  }

  render() {
    return (
      <Fragment>
        <h1>Real World</h1>
        <SearchInput
          onSubmit={this.handleSubmit}
        />
        <hr/>
        <Route path="/RealWorld" exact
               component={RealWorldDesc}/>
        <Route path="/RealWorld/:userName" exact
               component={User}/>
        <Route path="/RealWorld/:userName/:repoName" exact
               component={Repository}/>
      </Fragment>
    )
  }

}

export default withRouter(RealWorld)
