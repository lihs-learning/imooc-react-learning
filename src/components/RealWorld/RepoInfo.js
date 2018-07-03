import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

import UserInfo from './UserInfo'

class RepoInfo extends Component {

  stargazersRender() {
    const {stargazerListIsPending} = this.props
    if (stargazerListIsPending) {
      return (
        <p>正在加载中</p>
      )
    }
    const {stargazerListErrMsg} = this.props
    if (stargazerListErrMsg) {
      return (
        <p>{stargazerListErrMsg}</p>
      )
    }
    const {stargazerList} = this.props
    return (
      <ul>
        {stargazerList.map((stargazer) => {
          return (
            <li key={stargazer.id}>
              <UserInfo userInfo={stargazer}/>
            </li>
          )
        })}
      </ul>
    )
  }

  detailRender() {
    return (
      <Fragment>
        <p>ssh地址：{this.props.repo.ssh_url}</p>
        <p>收藏该项目的其他人（{this.props.repo.stargazers_count}）</p>
        {this.stargazersRender()}
      </Fragment>
    )
  }

  render() {
    const {isPending} = this.props
    if (isPending) {
      return (
        <p>正在搜索 {this.props.repoName} 的信息</p>
      )
    }
    const {repo} = this.props
    if (!Object.keys(repo).length) {
      return (
        <p>没有信息</p>
      )
    }
    return (
      <div>
        <h2>
          <Link to={`/RealWorld/${repo.full_name}`}>{repo.name}</Link>
          <small><span role="img">{'\u2728'}</span>{repo.stargazers_count}</small>
        </h2>
        <p>作者：{repo.owner.login}</p>
        <p>描述：{repo.description}</p>
        {this.props.detail && this.detailRender()}
      </div>
    )
  }

}

export default RepoInfo
