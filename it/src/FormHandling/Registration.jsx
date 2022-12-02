import React, { Component } from 'react'

 class Registration extends Component {
    state={
        user_name:"",
        email:"",
        mobile_number:"",
        password:""
    }
    update=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.update}>

        <label>user name</label>
        <input type="text" onChange={this.update} name="user_name"/> <br/><br/>
        <label>email</label>
        <input type="email" onChange={this.update} name="email" /><br/><br/>
        <label>mobile_number</label>
        <input type="text" onChange={this.update}name="mobile_number"/><br/><br/>
        <label>password</label>
        <input type="password" onChange={this.update} name="password"/><br></br>
        <input type="submit" value="sign up "/>
        
</form>

        
      </div>
    )
  }
}
export default Registration
//using "name" attribute for specifies a name in form events
//
