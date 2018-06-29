import React, {Component, Fragment} from 'react'
import {VisibilityFilters} from '../../store/actions/types'

import FilterLink from '../../containers/TodoList/FilterLink'


class Footer extends Component {

  render() {
    return (
      <Fragment>
        <FilterLink filterName={VisibilityFilters.SHOW_ALL} text={'All'}/>
        <FilterLink filterName={VisibilityFilters.SHOW_ACTIVE} text={'Active'}/>
        <FilterLink filterName={VisibilityFilters.SHOW_COMPLETED} text={'Completed'}/>
      </Fragment>
    )
  }

}

export default Footer
