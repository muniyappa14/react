import React, { Component } from 'react'

 class Contactdetails extends Component {
  receive=(contact)=>{
    this.props.view_details(contact)
  }
    render() {
    return (
      <div><table className='table table-hover'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
 </tr>
        </thead>
        <tbody>
          {
            this.props.user_details.map((contact)=>{
                return(
                  <> <tr key={contact.id} onMouseOver={this.receive.bind(this,contact)}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                  </tr>
                  </>
                )
            })
          }
        </tbody>
      </table>
        
      </div>
    )
  }
}

export default Contactdetails
