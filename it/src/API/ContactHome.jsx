//axios method has inbuilt promise method (.then() .catch() )
import Axios from 'axios'
import React, { Component } from 'react'
import Contactlist from './Contactlist'
import Contactdetails from './Contactdetails'

 class ContactHome extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[],
      view:{}
    }
  }
  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      this.setState({users:response.data})
    }).catch()
  }
  get_details=(contact)=>{
     this.setState({view:contact})
  }
  render() {
    return (
      <div>
       
        <div className="container">
          <div className="row">
            <div className="col-8">
              {
                  this.state.users.length>0 ?   <>
                  <Contactdetails    user_details={this.state.users} view_details={this.get_details}/>
                  </>   :null
              }
            </div>
            <div className="col-4">
              {
                Object.keys(this.state.view).length>0?   <>
                <Contactlist  views={this.state.view}/>
                </>:null
              }

            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ContactHome
