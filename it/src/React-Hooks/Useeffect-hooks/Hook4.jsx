//form handling using "useref" hook
//useref used to get tag refernce instead of dom
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Hook4 = () => {
    let btncheck=useRef(null)
   let[form,updateform]= useState(false)
   let checked=(event)=>{

updateform(event.target.checked)
if(event.target.checked===true){
    btncheck.current.disabled=false
}
else{
    btncheck.current.disabled=true
}
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
            <div className="form-group"><input className='form-control' name="email" type="text"  placeholder='email'  /></div>
            <div className="form-group"> <input className='form-control' name="password" type="password" placeholder='password'   /></div>
            <div className="form-group"> <input className='form-control' name="mobileno" type="number" placeholder='number'   /></div>
            <div className='form group'><input type="checkbox" onClick={checked} />pls ccept terms and condition</div>
            <div className="form-group"><button className='btn btn-primary' ref={btncheck} disabled>login</button></div>
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
