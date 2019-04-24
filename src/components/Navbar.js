import React from 'react'
import { withRouter } from 'react-router-dom'


class Navbar extends React.Component {

  constructor() {
    super()
    console.log(this.props)
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(e) {
    console.log(e.target.value)

    this.props.history.push(e.target.value)
  }

  render() {
    return (

      <nav>

        <select onChange={this.handleChange}>
          <option value="/">Home</option>
          <option value="/station/kgx">Kings Cross</option>
          <option value="/station/vic">Victoria</option>
          <option value="/station/chx">Charing Cross</option>
          <option value="/station/pad">Paddington</option>
          <option value="/station/spx">St Pancras</option>
          <option value="/station/eus">Euston</option>
          <option value="/station/myb">Marylebone</option>
          <option value="/station/wat">Waterloo</option>
        </select>

      </nav>
    )
  }
}

export default withRouter(Navbar)
