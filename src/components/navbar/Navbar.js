import React from 'react'
import logo from '../../assets/images/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
   <>
   <div className='nav'>
    <img src={logo} className='logo' alt='logo'/>
    <button className='ref'>🔃</button>
   </div>
   </>
  )
}

export default Navbar
