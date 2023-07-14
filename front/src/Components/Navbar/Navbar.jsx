import React from 'react'
import './nav.scss'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="navContainer">
            <span className='logo'>Booker</span>
            <div className="navItems">
                <button className='navButton'>Login</button>
                <button className='navButton'>Register</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
