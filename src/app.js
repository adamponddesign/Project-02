import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'
import Station from './components/Station'
import Home from './components/Home'
import Navbar from './components/Navbar'






class App extends React.Component {




  render() {
    return (
      <Router>
        <main>
          <section>
            <div className="container">
              <Navbar />

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
