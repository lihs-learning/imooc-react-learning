import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Link extends Component {

  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.active}
        style={{
          marginLeft: '4px'
        }}
      >
        {this.props.text}
      </button>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
