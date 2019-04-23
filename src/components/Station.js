import React from 'react'
import axios from 'axios'
import 'bulma'

class Station extends React.Component {

  constructor(props) {
    super(props)

    console.log(this.props)
    this.state = {
      trains: [],
      station: ''
    }

  }

  getData() {
    axios.get(`https://transportapi.com/v3/uk/train/station/${this.props.match.params.code}/live.json`, {
      params: {
        app_id: '0321c2ca',
        app_key: 'e105b0121aa3d9c0eb247a0d5aa99ae9',
        darwin: false,
        train_status: 'passenger'
      }
    })
      .then(res => {
        this.setState({ trains: res.data.departures.all, station: res.data.station_name })
      })
  }


  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.code !== this.props.match.params.code) {
      this.getData()
    }
  }



  render() {
    if (!this.state) return null

    return (
      <section className="section">
        <div className="container">




          <h1 className="headings title is-1 has-text-centered">{this.state.station} Departures</h1>

          <div className="columns">
            <p className="headings column is-two-thirds">Destination</p>
            <p className="headings column has-text-centered">Platform</p>
            <p className="headings column has-text-centered">Expected Departure</p>
          </div>

          <div>
            {this.state.trains.map((train, index) =>
              <div className="columns" key={index}>
                <div className="boardtext column is-two-thirds">{train.destination_name}

                </div>
                <div className="boardtext column has-text-centered">{train.platform}</div>
                <div className="boardtext column has-text-centered">{train.expected_departure_time}</div>
              </div>
            )}
          </div>







        </div>
      </section>
    )
  }
}



export default Station



// <div key={train._id} className="column is-one-quarter-desktop is-one-third-tablet">
// </div>
// )}

/*

{this.state.trains.map(train =>
  <div key={train._id} className="column is-one-quarter-desktop is-one-third-tablet">
  </div>
)}

*/
