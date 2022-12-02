import React, { Component } from 'react'

 class Regboot extends Component {
    state={
        user_name:"",
        date:"",
        password:"",
        mobile:""
    }
    handler=(event)=>{
        this.setState({[event.target.name]:event.taret.value})
}
preventdata=(event)=>{
    event.preventDefault()
}
    
  render() {
    return (
      <div>
      <nav className='navbar bg-primary text-white justify-content-center' >
        <h1 className='navbar-brand'>FORM HANDLING USING "REACT"</h1>

      </nav>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-6"><h1>Registration form</h1>
                    <form onSubmit={this.preventdata}>
                        <div className='form-group'>
                            <label>USER NAME</label>
                            <input type="text" name="user name"className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>DOB</label>
                            <input type="date" name="date"className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>PASSWORD</label>
                            <input type="text" name="password" className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>MOBILE</label>
                            <input type="text" name="mobile" className='form-control'/>
                        </div>
                        <input type="submit" value="login"/>

                    </form>

                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Regboot
