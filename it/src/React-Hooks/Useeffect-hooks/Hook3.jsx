//using the handlers in buttons
//using "usestate"-hook in forms
import  React from 'react'
import {useState} from 'react'

const Hook3 = () => {
    let[form,updateform]=useState({email:"" ,password:""})
  return (
    <div>
       {JSON.stringify(form)}
        <div className="container mt-4">
            <div className="col-7">
                <div className="row-3"></div>
            </div>
        <form action='' className='form-group'>

          <div className='form-group'> <input className='form-control' type="text" name='email' placeholder='email' onChange={(event)=>{
            updateform({...form,email:event.target.value})
                        }} /></div>

          <div className='form-group'><input className='form-control' type="password" name='password' placeholder='password' onChange={(event)=>{
            updateform({...form,password:event.target.value})
          }}/></div>

          <div className='form-group'><input type="checkbox"></input></div>
          <div className='form-group'><button >login</button></div>
        </form>
    </div>
    </div>
    
  )
    
  
}

export default Hook3

