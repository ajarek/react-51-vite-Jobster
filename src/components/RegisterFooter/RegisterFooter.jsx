import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGoogle, FaFacebookSquare, FaTwitter, FaGithub } from 'react-icons/fa'
import './RegisterFooter.css'
const RegisterFooter = () => {
  return (
    <div className='register-footer'>
      
      <div className='link-register'>
        Adready a member?{' '}
        <NavLink
          className='link'
          to='/login'
        >
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default RegisterFooter
