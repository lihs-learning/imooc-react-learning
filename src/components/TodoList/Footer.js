import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {VisibilityFilters} from '../../store/actions/types'

import Link from './Link'

class Footer extends Component {

  render() {
    return (
      <div>
        <Link
          onClick={this.props.switchTodoFilter}
          filterName={VisibilityFilters.SHOW_ALL}
          active={this.props.curFilterName === VisibilityFilters.SHOW_ALL}
          text={'All'}
        />
        <Link
          onClick={this.props.switchTodoFilter}
          filterName={VisibilityFilters.SHOW_ACTIVE}
          active={this.props.curFilterName === VisibilityFilters.SHOW_ACTIVE}
          text={'Active'}
        />
        <Link
          onClick={this.props.switchTodoFilter}
          filterName={VisibilityFilters.SHOW_COMPLETED}
          active={this.props.curFilterName === VisibilityFilters.SHOW_COMPLETED}
          text={'Complete'}
        />
      </div>
    )
  }

}

Footer.propTypes = {
  switchTodoFilter: PropTypes.func.isRequired,
  curFilterName: PropTypes.string.isRequired
}

export default Footer
