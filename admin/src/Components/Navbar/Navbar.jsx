import React from 'react'
import './Navbar.css';
import nav_logo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav-logo' src={nav_logo} alt="" />
      <img className='nav-profile' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar
