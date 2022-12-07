
import React from 'react'
import { Link } from 'react-router-dom'
 class Router1 extends React.Component {
  render() {
    return (
      <div>
      <nav className='navbar navbar-expand-lg bg-warning'>
        <div  className='navbar-brand'>Routing Concept</div>
        <div className='ml-auto'>
          <ul  className="navbar-nav">
            <li className='nav-list'> <Link  className='nav-link' to="/home "> Home</Link>     </li>
            <li className='nav-list'> <Link  className='nav-link' to="/service "> Service</Link>     </li>
            <li className='nav-list'> <Link  className='nav-link' to="/contact "> details</Link>     </li>
          </ul>
        </div>
        </nav>        
      </div>
    )
  }
}

export default Router1
