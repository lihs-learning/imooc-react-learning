import React, {Component} from 'react'

class UserInfo extends Component {

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.userInfo.id !== this.props.userInfo.id
  // }

  render() {
    const {isPending, userName} = this.props
    if (isPending) {
      return (
        <p>正在搜索 {userName} 请稍后</p>
      )
    }
    const {errMsg} = this.props
    if (errMsg) {
      return (
        <p>{errMsg}</p>
      )
    }
    const {avatar_url, html_url, login, name} = this.props.userInfo
    return (
      <div>
        <img src={avatar_url} alt="user avatar" width="200px"/>
        <h2><a href={html_url}>{login}({name})</a></h2>
      </div>
    )
  }

}

export default UserInfo
