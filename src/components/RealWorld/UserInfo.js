import React, {Component} from 'react'

class UserProfile extends Component{

  render() {
    if (!this.props.username) {
      return null
    }
    if (!this.props.user) {
      return (
        <div>
          <p>正在搜索 {this.props.username} 请稍后</p>
        </div>
      )
    }
    const {avatar_url, html_url, login, name} = this.props.user
    return (
      <div>
        <img src={avatar_url} alt="user avatar" width="200px"/>
        <h2><a href={html_url}>{login}({name})</a></h2>
      </div>
    )
  }

}

export default UserProfile
