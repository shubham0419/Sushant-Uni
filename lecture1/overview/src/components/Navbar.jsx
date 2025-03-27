import React from 'react'
import "./Navbar.css"

const Navbar = ({user}) => {
  return (
    <nav>
        <ul className='nav-list'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          hello {user}
        </ul>
    </nav>
  )
}

export default Navbar