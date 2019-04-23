import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'bulma'
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      trains: []
    }

  }

  getDepartures() {
    return this.state.trains.departures.all.map(data => data.origin_name).join(', ')
  }




  componentDidMount() {
    axios.get('https://transportapi.com/v3/uk/train/station/kgx/live.json?app_id=0321c2ca&app_key=e105b0121aa3d9c0eb247a0d5aa99ae9&darwin=false&train_status=passenger')


      .then(res => this.setState({ trains: res.data.departures.all }))

  }



  render() {
    console.log(this.state.trains)

    if (!this.state) return null

    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Kings Cross Departure Trains</h1>
          <div className="columns is-multiline">
            {this.state.trains.map((train, index) =>
              <div className="column is-full-desktop" key={index}>

                <div>{train.destination_name}</div>
                <div>{train.expected_departure_time}</div>
                <div>{train.aimed_departure_time}</div>

              </div>
            )}
          </div>
        </div>
      </section>
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
