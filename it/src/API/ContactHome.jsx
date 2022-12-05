import React, { Component } from 'react'
import Axios from "axios"
 class Contact extends Component {
constructor(props){
  super(props);
  this.state={
    users:[]
  }


}
//life cycle method:component did mount
componentDidMount(){
  Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    this.setState({
      users:response.data
    })
    //console.log(response.data)
  }).catch((err)=>{
    console.log(err)
  })
}
  render() {
    return (
      <div>
        
        <pre>
        {JSON.stringify(this.state.users)}
      </pre>{
      this.state.users.length>0 ?  <> 
      <table className='table table-hover'> 
        <thead>
        <tr>
          <th> id</th>
          <th> name</th>
          <th> email</th>
        </tr>
        </thead>
        <tbody>
          {
            this.state.users.map((user)=>{
             return (<>
             <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
             </tr>
             </>)
            })
          }
        </tbody>
      </table>
      </> :null
  
      }
        
      </div>
    )
  }
}

export default Contact
