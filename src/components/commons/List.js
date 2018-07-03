import React, {Component} from 'react'

class List extends Component{

  render() {
    const {
      loadingLabel, emptyLabel, pageCount, items, renderItem,
      isLoading
    } = this.props
    const isEmpty = items.length === 0
    if(isLoading) {
      return (
        <div>
          <p>{loadingLabel}</p>
        </div>
      )
    }
    if(isEmpty) {
      return (
        <div>
          <p>{emptyLabel}</p>
        </div>
      )
    }
    return (
      <ul>
        {items.map((item) => {
          return (
            <li>{renderItem(item)}</li>
          )
        })}
      </ul>
    )
  }

}

