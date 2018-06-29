import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Link extends Component {

  constructor(props) {
    super(props)

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick() {
    console.log(this.props.filterName)
    this.props.onClick(this.props.filterName)
  }

  render() {
    return (
      <button
        onClick={this.handleBtnClick}
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
