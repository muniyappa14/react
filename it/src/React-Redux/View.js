import React from 'react'
import { useDispatch } from 'react-redux'
import {gmaction,gnaction} from "./VIew.action"

const View = () => {
  let dispatch=useDispatch()
   let gmhandler=()=>{
    dispatch(gmaction())

   }
   let gnhandler=()=>{
    dispatch(gnaction())
   }
   let Message="hello"
  return( 
    <div>
    <h1>Message   :{Message} </h1>
      <h1>Redux files</h1>
      <button onClick={gmhandler}>GM</button>
      <button onClick={gnhandler}>GN</button>
    </div>
  )
  
}

export default View
