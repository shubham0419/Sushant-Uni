import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <img
        alt='logo'
        src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
      />
      <ul className='nav-items'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar