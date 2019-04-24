import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import 'bulma'

import './style.scss'
import Station from './components/Station'
import Home from './components/Home'



class App extends React.Component {

handleChange(e) {
    this.state.data(() => this.props.history.push())
}

  render() {
    return (
      <Router>
        <main>
          <section>
            <div className="container">
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

              <Switch>
                <Route path="/station/:code" component={Station} />
                <Route path="/" component={Home} />


              </Switch>

            </div>
          </section>
        </main>
      </Router>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



// <div key={train._id} className="column is-one-quarter-desktop is-one-third-tablet">
// </div>
// )}

/*

{this.state.trains.map(train =>
  <div key={train._id} className="column is-one-quarter-desktop is-one-third-tablet">
  </div>
)}

*/
