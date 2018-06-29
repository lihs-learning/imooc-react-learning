import {connect} from 'react-redux'
import {getSwitchVisibilityFilterAction} from '../../store/actions/creators'
import Link from '../../components/TodoList/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filterName === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(getSwitchVisibilityFilterAction(ownProps.filterName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
