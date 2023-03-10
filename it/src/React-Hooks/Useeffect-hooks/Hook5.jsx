import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Hook5 = () => {
    let check=useRef(null)
    let[state,stState]=useState(false)
    let handler=(event)=>{
        stState(event.target.checked)
        if(event.target.checked===true){
            check.current.disabled=false
        }
    }

  return (
    <div>
        {JSON.stringify(state)}
        <div className="container">
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <div className="card bg-primary">
                    <div className="card-body">
                             <form >

                             <div className='form-group'> <input type="text"  placeholder='email' className='form-control' /></div>
                             <div className="form-group"><input type="password"  placeholder='password' className='form-control' /></div>
                            <div className='form-check'>
                                <input type="checkbox" onClick={handler} className='form-check-input'/> pleace accept terms and condition
                            </div>
                             <input type="submit" value="submit" ref={check} className='btn btn-warning' disabled /> 
                                </form>   
                     </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hook5
