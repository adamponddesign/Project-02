import React from 'react'

class trainAnimations extends React.Component {

  render() {
    return (

      <div className="center">
        <div className="mountains"></div>
        <div className="frame">
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
    )
  }
}

export default trainAnimations
