import React from 'react'
import './LoginHeader.css'
import Logo from '../Logo/Logo'
const LoginHeader = () => {
  return (
    <div className='login-header'>
      <Logo/>
      <div className='content'>Login</div>
    </div>
  )
}

export default LoginHeader
