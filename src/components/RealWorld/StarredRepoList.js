import React, {Component} from 'react'

import RepoInfo from '../../components/RealWorld/RepoInfo'

class StarredRepoList extends Component {

  renderRepoList() {
    return (
      <ul>
        {this.props.starredRepoList.map(repo => (
          <li key={repo.id}>
            <RepoInfo
              repo={repo}
              detail={false}
            />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    if (this.props.isPending) {
      return (
        <p>正在搜索 {this.props.userName} 关注的库</p>
      )
    }
    const {errMsg} = this.props
    if (errMsg) {
      return (
        <p>{errMsg}</p>
      )
    }
    if (this.props.starredRepoList.length === 0) {
      return (
        <p>{this.props.userName} 暂时没有关注的库</p>
      )
    }
    return (
      <div>
        <p>关注的库有：</p>
        {this.renderRepoList()}
      </div>
    )
  }

}

export default StarredRepoList
