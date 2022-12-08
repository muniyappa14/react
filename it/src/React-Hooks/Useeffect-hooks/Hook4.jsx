//form handling using "useref" hook
import React from 'react'
import { useState } from 'react'

const Hook4 = () => {
    let[form,formupdate]=useState({email:"",password:"",mobile:""})
    let  updatehandler=(event)=>{
        formupdate({...form,[event.target.name]:event.target.value})
    }
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-5">
               <div className="card">
                <div className="card-header">
                    <div className="card-body">

                    <form >
            <div className="form-group"><input className='form-control' name="email" type="text"  placeholder='email' onChange={updatehandler} /></div>
            <div className="form-group"> <input className='form-control' name="password" type="password" placeholder='password'  onChange={updatehandler} /></div>
            <div className="form-group"> <input className='form-control' name="mobileno" type="number" placeholder='number'  onChange={updatehandler} /></div>
            <div className='form group'><input type="checkbox" />pls ccept terms and condition</div>
            <div className="form-group"><button className='btn btn-primary' disabled>login</button></div>
            </form>


              </div>
                </div>
               </div>
                </div>
            </div>
        </div>
       
             
        
      
    </div>
  )
}

export default Hook4
