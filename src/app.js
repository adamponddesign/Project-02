import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import 'bulma'

import './style.scss'
import Station from './components/Station'
import Home from './components/Home'



class App extends React.Component {



  render() {
    return (
      <Router>
        <main>
          <section>
            <div className="container">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/station/kgx">Kings Cross</Link>
                <Link to="/station/vic">Victoria</Link>
                <Link to="/station/chx">Charing Cross</Link>
                <Link to="/station/pad">Paddington</Link>
                <Link to="/station/spx">St Pancras</Link>
                <Link to="/station/eus">Euston</Link>
                <Link to="/station/myb">Marylebone</Link>
                <Link to="/station/wat">Waterloo</Link>
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
