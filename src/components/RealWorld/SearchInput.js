import React, {Component, Fragment} from 'react'

class SearchInput extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>Real World</h1>
          <section>
            <p>请输入一个用户的名字或一个仓库完整名字（包括所有者的名字），然后点击 "走一个！" 按钮</p>
            <form onSubmit={this.handleSubmit}>
              <input type="text"/>
              <button type="submit">走一个！</button>
            </form>
          </section>
        </div>
        <hr/>
      </Fragment>
    )
  }

}

export default SearchInput
