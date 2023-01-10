import React from 'react'
import { NavLink } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <NavLink
      className={'logo'}
      to='/'
    >
      <div className='logo-symbol'>J</div>
      <div className='logo-title'>Jobster</div>
    </NavLink>
  )
}

export default Logo
