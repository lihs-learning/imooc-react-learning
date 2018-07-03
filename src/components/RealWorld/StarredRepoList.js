import React, {Component} from 'react'

class StarredRepository extends Component {

  render() {
    if (!this.props.RepoList) {
      return null
    }
    if (this.props.RepoList.length === 0) {
      return (
        <p>暂时没有关注的库</p>
      )
    }
    return (
      <div>
        关注的库有：

      </div>
    )
  }

}

export default StarredRepository
