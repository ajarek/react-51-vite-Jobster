import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGoogle, FaFacebookSquare, FaTwitter, FaGithub } from 'react-icons/fa'
import './RegisterFooter.css'
const RegisterFooter = () => {
  return (
    <div className='register-footer'>
      <div className='info'>or continue with these social profile</div>
      <div className='social'>
        <a
          href=''
          className='social-wrapper'
        >
          <FaGoogle />
        </a>
        <a
          href=''
          className='social-wrapper'
        >
          <FaFacebookSquare />
        </a>
        <a
          href=''
          className='social-wrapper'
        >
          <FaTwitter />
        </a>
        <a
          href=''
          className='social-wrapper'
        >
          <FaGithub />
        </a>
      </div>
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
