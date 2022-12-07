import React, { Component } from 'react'

 class Contactlist extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <ul className='list-group'>
                <li className='list-group-item'>{this.props.views.id}</li>
                <li className='list-group-item'>{this.props.views.name}</li>
                <li className='list-group-item'>{this.props.views.email}</li>
                
              </ul>

            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Contactlist
