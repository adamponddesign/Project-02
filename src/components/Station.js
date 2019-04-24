import React from 'react'
import axios from 'axios'
import 'bulma'

class Station extends React.Component {

  constructor() {
    super()

    console.log(this.props)
    this.state = {
      departures: [],
      arrivals: [],
      station: ''
    }

  }

  getDeparturesData() {
    axios.get(`https://transportapi.com/v3/uk/train/station/${this.props.match.params.code}/live.json`, {
      params: {
        app_id: '0321c2ca',
        app_key: 'e105b0121aa3d9c0eb247a0d5aa99ae9',
        darwin: false,
        train_status: 'passenger'
      }
    })
      .then(res => {
        this.setState({ departures: res.data.departures.all, station: res.data.station_name })
      })
  }

  getArrivalsData() {
    axios.get(`https://transportapi.com/v3/uk/train/station/${this.props.match.params.code}/live.json`, {
      params: {
        app_id: '0321c2ca',
        app_key: 'e105b0121aa3d9c0eb247a0d5aa99ae9',
        darwin: false,
        train_status: 'passenger',
        type: 'arrival'
      }
    })
      .then(res => {
        this.setState({ arrivals: res.data.arrivals.all, station: res.data.station_name })
      })
  }

  componentDidMount() {
    this.getDeparturesData()
    this.getArrivalsData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.code !== this.props.match.params.code) {
      this.getDeparturesData()
      this.getArrivalsData()
    }
  }



  render() {
    if (!this.state) return null

    return (
      <div>
        <div id="headerCont" className="headings columns title is-1 has-text-centered is-vcentered is-centered">
          <img id="headerlogo" src="https://art4clip.com/images/subway-clipart-mrt-9.png" alt="train logo image" />

          <h1 className="homePageHeader">{this.state.station}</h1>

          <img id="headerlogo" src="https://art4clip.com/images/subway-clipart-mrt-9.png" alt="train logo image" />
        </div>

        <div className="columns">   {/* overall columns tag*/ }
          <div className="column station-column">  {/* opening column 1 tag*/ }
            <h1 className="headings title is-3 has-text-centered">Arrivals</h1>
            <div className="columns lines">
              <p className="headings column is-three-fifths">Arriving From</p>
              <p className="headings column has-text-centered">Platform</p>
              <p className="headings column has-text-centered">Expected</p>
            </div>
            {this.state.arrivals.map((train, index) =>
              <div className="columns" key={index}>
                <div className="boardtext column is-three-fifths">{train.origin_name}
                </div>
                <div className="boardtext column has-text-centered">{train.platform}</div>
                <div className="boardtext column has-text-centered">{train.expected_arrival_time}</div>
              </div>
            )}
          </div>    {/* closing column 1 tag*/ }
          <div className="column station-column">  {/* opening column 2 tag*/ }
            <h1 className="headings title is-3 has-text-centered">Departures</h1>
            <div className="columns lines">
              <p className="headings column is-three-fifths">Destination</p>
              <p className="headings column has-text-centered">Platform</p>
              <p className="headings column has-text-centered">Expected</p>
            </div>
            {this.state.departures.map((train, index) =>
              <div className="columns" key={index}>
                <div className="boardtext column is-three-fifths">{train.destination_name}
                </div>
                <div className="boardtext column has-text-centered">{train.platform}</div>
                <div className="boardtext column has-text-centered">{train.expected_departure_time}</div>
              </div>
            )}
          </div>    {/* closing column 2 tag*/ }
        </div>    {/* overall close columns tag*/ }
      </div>
    )
  }
}



export default Station
