import React from 'react'

const Child = (props) => {

  return (

    <div>
        <h2>child component</h2>
      <button onClick={()=>{
       return  props.func("muni")
      }} >submit</button>
    </div>
  )
}

export default Child
