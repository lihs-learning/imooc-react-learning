import React, {Component} from 'react'

class SearchInput extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.input.value)
  }

  render() {
    return (
      <div>
        <section>
          <p>请输入一个用户的名字或一个仓库完整名字（包括所有者的名字），然后点击 "走一个！" 按钮</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref={input => {
              this.input = input
            }}/>
            <button type="submit">走一个！</button>
          </form>
        </section>
      </div>
    )
  }

}

export default SearchInput
