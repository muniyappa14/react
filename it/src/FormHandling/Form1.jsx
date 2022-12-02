import React, { Component } from 'react'

 class Form1 extends Component {
    state={
        user_name:" ",
        password :" "
}
Username=(event)=>{
    this.setState({user_name:event.target.value})
}
password=(event)=>{
    this.setState({password:event.target.value})
}
prevent=(event)=>{
    alert(`${this.state.user_name} ${this.state.password}`)
    event.preventDefault()

}

  render() {
    return (
      <div><center>
        <h1>FORM HANDLING</h1>
        <h2>login page</h2>
        <form  onSubmit={this.prevent} >
            <label>USER NAME :</label>
            <input type="text" value={this.state.user_name} onChange={this.Username} /><br/>
            <label>PASSWORD :</label>
            <input type="text" value={this.state.password} onChange={this.password}/><br />
            <button>LOGIN</button>
            

        </form>
        </center >
      </div>
    )
  }
}

export default Form1
