import React from "react"
import Person from '../components/Person'

class HoldingContainer extends React.Component {

  render() {
    return(
      <div className="holding pt-5">
        <h1>HOLDING</h1>
        { this.props.placeInHolding ? <Person
          whereIsGracie={this.props.whereIsGracie}
          handleChange={this.props.handleChange}
        /> : null}

      </div>
    )
  }
}

export default HoldingContainer
