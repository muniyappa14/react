import React from 'react'
import Child from './Child'

const Parent = () => {
    
    let parent="mother"
    function dad(abc){
        alert(`hello ${abc}`)
    }
  return (
    
    <div>
        <h1>parent component</h1>
      <Child name={parent} func={dad}/>
    </div>
  )
}

export default Parent
