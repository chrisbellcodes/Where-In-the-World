import React from "react"

const Person = (props) => {


  return(
    <React.Fragment>
      <img
        onClick={props.handleChange}
        className={props.whereIsGracie} src="gracie_clipped.png" alt="Gracie"/>
    </React.Fragment>
  )
}

export default Person
