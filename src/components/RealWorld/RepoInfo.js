import React, {Component, Fragment} from 'react'

class RepoInfo extends Component {

  stargazersRender() {

    return (
      <ul>
        {this.props.stargazers_count}
      </ul>
    )
  }

  detailRender() {
    return (
      <Fragment>
        <p>{this.props.ssh_url}</p>
        <p>收藏该项目的其他人</p>
        {this.stargazersRender()}
      </Fragment>
    )
  }

  render() {
    return (
      <div>
        <h2>{this.props.name} <small>{this.props.starNumber}</small></h2>
        <p>{this.props.desc}</p>
        {this.props.detail && this.detailRender()}
      </div>
    )
  }

}

export default RepoInfo
