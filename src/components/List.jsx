import React from 'react'


const list = (props) => {
  return (
    <div className='ll'>
      <div>
       {props.completed ? <></> :<input type = "checkbox" id = "list" />}
        <label for = "list" >{props.text}</label>
      </div>
      {/* <div>
        <input type = "checkbox" id = "code" />
        <label for = "code" >code</label>
      </div>
      <div>
        <input type = "checkbox" id = "sleep" />
        <label for = "sleep" >sleep</label>
      </div>
      <div>
        <input type = "checkbox" id = "repeat" />
        <label for = "repeat" >repeat</label>
      </div> */}
    </div>
  )
}

export default list
