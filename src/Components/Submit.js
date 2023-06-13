import React from 'react'
import './Style.css'

function Submit(props) {
  return (
    <div>
        <button onClick = {() => props.userHandler('')} className='submitbutton'>Submit</button>
    </div>
  )
}

export default Submit