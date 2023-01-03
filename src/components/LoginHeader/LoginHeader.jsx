import React from 'react'
import './LoginHeader.css'

const LoginHeader = () => {
  return (
    <div className='login-header'>
      <div className='logo'>
        <img
          src='/favicon.ico'
          alt=''
        />
        <p>@jarek</p>
      </div>
      <div className='content'>Login</div>
    </div>
  )
}

export default LoginHeader
