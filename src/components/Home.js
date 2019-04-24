import React from 'react'


const Home = () => {
  return(
    <section id="home-section" className="section">
      <div className="container homepage">
        <div className="center">
          <div className="mountains"></div>
          <div className="frame">
            <h1 className="headings title is-1 has-text-centered">Rail Arrivals & Departures</h1>
            <h2 className="homesub subtitle is-1 has-text-centered">London Stations</h2>

            <img className="homepageimage" src="https://art4clip.com/images/subway-clipart-mrt-9.png" alt="train logo image" />

            <div className="train">
              <div className="engine-front">
                <div className="chimney">
                  <div className="smoke"></div>
                  <div className="smoke smoke-2"></div>
                  <div className="smoke smoke-3"></div>
                  <div className="smoke smoke-4"></div>
                </div>
              </div>

              <div className="engine-body"></div>

              <div className="compartment">
                <div className="compartment-window"></div>
              </div>

              <div className="compartment compartment-two">
                <div className="compartment-window"></div>
              </div>

              <div className="compartment compartment-three">
                <div className="compartment-window"></div>
              </div>

              <div className="wheel-holder">
                <div className="wheel"></div>
                <div className="wheel wheel-2">
                  <div className="wheel-joint"></div>
                  <div className="wheel-joint wheel-joint-2"></div>
                </div>
                <div className="wheel wheel-3"></div>
                <div className="wheel wheel-4"></div>
                <div className="wheel wheel-5"></div>
                <div className="wheel wheel-6"></div>
                <div className="wheel wheel-7"></div>
                <div className="wheel wheel-8"></div>
                <div className="wheel wheel-9"></div>
              </div>
            </div>
          </div>
          <div className="bridge"></div>
        </div>
      </div>

    </section>

  )
}

export default Home
