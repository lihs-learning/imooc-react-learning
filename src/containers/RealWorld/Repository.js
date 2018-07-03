import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {repos as repoHttpServices, users as userHttpServices} from '../../services/HttpService'

import UserInfo from '../../components/RealWorld/UserInfo'
import RepoInfo from '../../components/RealWorld/RepoInfo'
import {
  getRepoFailedAction,
  getRepoRequestAction,
  getRepoStargazersAction,
  getRepoStargazersFailedAction,
  getRepoStargazersSuccessAction,
  getRepoSuccessAction,
  getUserRequestAction,
  getUserRequestFailedAction,
  getUserRequestSuccessAction,
} from '../../store/actions/creators'

const loadData = (repoFullName, {
  getUser,
  getUserSuccess,
  getUserFailed,
  getRepo,
  getRepoSuccess,
  getRepoFailed,
  getRepoStargazerList,
  getRepoStargazerListSuccess,
  getRepoStargazerListFailed
}) => {
  const userName = repoFullName.split('/')[0]
  getUser()
  userHttpServices.reqUser(userName)
    .then(
      (res) => {
        getUserSuccess(res.data)
      },
      (res) => {
        getUserFailed(res)
      })
  getRepo()
  repoHttpServices.reqRepo(repoFullName)
    .then(
      (res) => {
        getRepoSuccess(res.data)
      },
      (res) => {
        getRepoFailed(res)
      })
  getRepoStargazerList()
  repoHttpServices.reqRepoStargazers(repoFullName)
    .then(
      (res) => {
        getRepoStargazerListSuccess(res.data)
      },
      (res) => {
        getRepoStargazerListFailed(res)
      })
}

class Repository extends Component {

  componentWillMount() {
    const {userName, repoName} = this.props.match.params
    loadData(`${userName}/${repoName}`, this.props)
  }

  componentWillReceiveProps(nextProps) {
    const {userName: nextUserName, repoName: nextRepoName} = nextProps.match.params
    const {userName, repoName} = this.props.match.params
    const nextRepoFullName = `${nextUserName}/${nextRepoName}`
    const repoFullName = `${userName}/${repoName}`
    if (nextRepoFullName !== repoFullName) {
      loadData(userName, this.props)
    }
  }

  render() {
    return (
      <div>
        <UserInfo
          userName={this.props.match.params.userName}
          userInfo={this.props.userInfo}
          isPending={this.props.userInfoIsPending}
          errMsg={this.props.userInfoErrMsg}/>
        <RepoInfo
          repoName={this.props.match.params.repoName}
          repo={this.props.repoInfo}
          isPending={this.props.repoInfoIsPending}
          errMsg={this.props.repoInfoErrMsg}
          detail={true}
          stargazerList={this.props.repoStargazerList}
          stargazerListIsPending={this.props.repoStargazerListIsPending}
          stargazerListErrMsg={this.props.repoStargazerListErrMsg}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
  userInfoIsPending: state.user.isPending,
  userInfoErrMsg: state.user.msg,
  repoInfo: state.repo.info,
  repoInfoIsPending: state.repo.isPending,
  repoInfoErrMsg: state.repo.msg,
  repoStargazerList: state.repoStargazers.list,
  repoStargazerListIsPending: state.repoStargazers.isPending,
  repoStargazerListErrMsg: state.repoStargazers.msg
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (userName) => dispatch(getUserRequestAction(userName)),
  getUserSuccess: (user) => dispatch(getUserRequestSuccessAction(user)),
  getUserFailed: () => dispatch(getUserRequestFailedAction()),
  getRepo: () => dispatch(getRepoRequestAction()),
  getRepoSuccess: (repo) => dispatch(getRepoSuccessAction(repo)),
  getRepoFailed: () => dispatch(getRepoFailedAction()),
  getRepoStargazerList: () => dispatch(getRepoStargazersAction()),
  getRepoStargazerListSuccess: (list) => dispatch(getRepoStargazersSuccessAction(list)),
  getRepoStargazerListFailed: () => dispatch(getRepoStargazersFailedAction())
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Repository))
