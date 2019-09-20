import React from "react"

const Message = (props) => {

  return(
  <div className='popup'>
    <div className='popup_inner'>
      <h1>{props.text}</h1>
      <p>Good detective work! You Found Gracie and sent her back to the Flatiron School where she belongs</p>
      <button onClick={props.closePopup}>close me</button>
    </div>
  </div>
  )
}

export default Message
