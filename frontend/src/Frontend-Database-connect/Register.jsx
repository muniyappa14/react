import axios from 'axios'
import React, { useState } from 'react'

function Register() {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
let setname=(event)=>{
    setusername(event.target.value)
} 
     let senddata=async(event)=>{
        event.preventDefault(); 
        try{
             axios.post("http://localhost:8080/add",{
                username:username,
                email:email,
                password:password
            })
            alert("data added successfully")
        }
        catch(e){
            alert(e)
        }
     }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="cardheader">
                            <h1>REGISTRATION</h1>
                        </div>
                        <div className="cardbody mt-5">
                            <form onSubmit={senddata} >
                                <div className="form-group ">
                                    <label>NAME:</label>
                                    <input type='text' value={username} onChange={setname} className='form-control'/>
                                </div>
                                <div className="form-group ">
                                    <label>EMAIL:</label>
                                    <input type='text' value={email} onChange={(event)=>{setemail(event.target.value)}} className='form-control'/>
                                </div>
                                <div className="form-group ">
                                    <label>PASSWORD:</label>
                                    <input type='text' value={password} onChange={(event)=>{setpassword(event.target.value)}} className='form-control'/>
                                </div>
                                <button className='btn btn-primary' > SUBMIT</button>
                

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
     
    </div>
  )
}

export default Register
