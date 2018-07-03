import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {users as userHttpServices} from '../../services/HttpService'

import UserInfo from '../../components/RealWorld/UserInfo'
import StarredRepoList from '../../components/RealWorld/StarredRepoList'
import {
  getUserRequestAction,
  getUserRequestFailedAction,
  getUserRequestSuccessAction,
  getUserStarredRepoRequestAction,
  getUserStarredRepoRequestFailedAction,
  getUserStarredRepoRequestSuccessAction
} from '../../store/actions/creators'

const loadData = (userName, {
                    getUser,
                    getUserSuccess,
                    getUserFailed,
                    getUserStarredRepoList,
                    getUserStarredRepoListSuccess,
                    getUserStarredRepoListFailed
                  }) => {
  getUser(userName)
  userHttpServices.reqUser(userName)
    .then(
      (res) => {
        getUserSuccess(res.data)
      },
      (res)=> {
        getUserFailed(res)
      })
  getUserStarredRepoList(userName)
  userHttpServices.reqUserStarred(userName)
    .then(
      (res) => {
        getUserStarredRepoListSuccess(res.data)
      },
      (res)=> {
        getUserStarredRepoListFailed(res)
      })
}

class User extends Component {

  componentWillMount() {
    const {userName} = this.props.match.params
    loadData(userName, this.props)
  }

  componentWillReceiveProps(nextProps) {
    const nextUserName = nextProps.match.params.userName
    const {userName} = this.props.match.params
    if (nextUserName !== userName) {
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
        <StarredRepoList
          userName={this.props.match.params.userName}
          starredRepoList={this.props.starredRepoList}
          isPending={this.props.starredRepoListIsPending}
          errMsg={this.props.StarredRepoListErrMsg}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
  userInfoIsPending: state.user.isPending,
  userInfoErrMsg: state.user.msg,
  starredRepoList: state.userStarredRepos.list,
  starredRepoListIsPending: state.userStarredRepos.isPending,
  starredRepoListErrMsg: state.userStarredRepos.msg
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (userName) => dispatch(getUserRequestAction(userName)),
  getUserSuccess: (user) => dispatch(getUserRequestSuccessAction(user)),
  getUserFailed: () => dispatch(getUserRequestFailedAction()),
  getUserStarredRepoList: (userName) => dispatch(getUserStarredRepoRequestAction()),
  getUserStarredRepoListSuccess: (list) => dispatch(getUserStarredRepoRequestSuccessAction(list)),
  getUserStarredRepoListFailed: () => dispatch(getUserStarredRepoRequestFailedAction())
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(User))
