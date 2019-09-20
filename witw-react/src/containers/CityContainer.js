import React from "react"
import Person from "../components/Person"

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class CityContainer extends React.Component {

  render() {
    return(
      <Container className="pt-3">
      <div className="cityContainerDiv">
      <Button>Start Game</Button>
        <h1>HONG KONG</h1>
        <img className="city" src="hongkong.jpg" alt="Hong Kong"/>
        {!this.props.placeInHolding ? <Person whereIsGracie={this.props.whereIsGracie} handleChange={this.props.handleChange}/> : null}
      </div>
      </Container>
    )
  }
}

export default CityContainer
