//use effect hook in form handling
import React from 'react'
import { useState } from 'react'

const Hook1 = () => {
    let[form,updateform]=useState({email:"" ,password:""})
    
    let emailhandler=(event)=>{
        updateform({...form,email:event.target.value})
    }
    let passwordhandler=(event)=>{
        updateform({...form,password:event.target.value})

    }
    

  return (
    <div>
        {JSON.stringify(form)}
        <div className="container mt-4">
            <div className="col-7">
                <div className="row-3"></div>
            </div>
        <form action='' className='form-group'>

          <div className='form-group'> <input className='form-control' type="text" name='email' placeholder='email' onChange={emailhandler} /></div>
          <div className='form-group'><input className='form-control' type="password" name='password' placeholder='password' onChange={passwordhandler} /></div>
          <div className='form-group'><input type="checkbox"></input></div>
          <div className='form-group'><button >login</button></div>
        </form>
    </div>
    </div>
  )
}

export default Hook1
