import React from 'react'
import { useState } from 'react'

let Counter=()=>{
   let[Counter,setcounter]= useState(0)
  return (
    <div>
        <button onClick={() => {
            setcounter(Counter - 1)
        }}>-</button>

         {Counter}

          <button onClick={() => {
            setcounter(Counter + 1)
        }}>+</button>
    </div>
  )
}
export default Counter
