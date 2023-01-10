import React from 'react'
import { NavLink } from 'react-router-dom'
import './LoginFooter.css'
const LoginFooter = () => {
  return (
    <div className='login-footer'>
      <div className='link-register'>
        Not a member yet?{' '}
        <NavLink
          className='link'
          to='/register'
        >
          Register
        </NavLink>
      </div>
    </div>
  )
}

export default LoginFooter
