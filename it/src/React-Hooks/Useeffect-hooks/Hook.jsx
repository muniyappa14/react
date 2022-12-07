import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Hook = () => {
  let [ time, sttime]  = useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setInterval(()=>{
        sttime(new Date().toLocaleTimeString())
    },[1000])
  return ()=>{
    console.log("hello")
  }
},[])
  return (
    <div>
      {time}
    </div>
  )
}

export default Hook
