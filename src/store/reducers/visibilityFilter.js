import {VisibilityFilters, SWITCH_VISIBILITY_FILTER} from "../actions/types";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SWITCH_VISIBILITY_FILTER: {
      return action.filterName
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter
