import React from 'react';

import CityContainer from "./containers/CityContainer"
import HoldingContainer from "./containers/HoldingContainer"
import CaseFile from "./containers/CaseFile"
import Message from "./components/Message"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';

class App extends React.Component {

  state = {
    clues: [],
    text: "YAS QUEEN",
    placeInHolding: false,
    popup: false,
    whereIsGracie: 'gracieHongKong'
  }

  closePopup = () => {
    this.setState(prevState =>({ popup: !prevState.popup })
  )
  }

  handleChange= () => {
    this.setState(prevState => ({
      popup: true,
      placeInHolding: !prevState.placeInHolding,
      whereIsGracie: 'gracieHolding'
    }))

    // When you click on gracie, she is moved back to holding
      // Remmove Gracie
      // put person component in holding

    // A window then pops up and gracie egives you a give
    // Gracie then escapes from holding!

  }

  componentDidMount() {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => {
      const clues = data.map(datum => {
        return {
          id: datum.id,
          title: datum.title,
          url: datum.images.original.url
        }
      })
      this.setState({
        clues
    })
    })
  }

  render() {
    return (
    <div className="CenterText">

      <Row>
          <Col lg={{span: 2}}>
            <HoldingContainer
              placeInHolding={this.state.placeInHolding}
              whereIsGracie={this.state.whereIsGracie}/>
            <CaseFile />
          </Col>
          <Col lg={{span:10}}>
            <CityContainer
              handleChange={this.handleChange}
              whereIsGracie={this.state.whereIsGracie}
              placeInHolding={this.state.placeInHolding}
              clues={this.state.clues}
            />
          </Col>
          {this.state.popup ? <Message closePopup={this.closePopup} text={this.state.text}/> : null}
      </Row>
    </div>
  )
}
}

export default App;
