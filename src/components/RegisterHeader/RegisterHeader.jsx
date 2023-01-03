import React from 'react'
import './RegisterHeader.css'

const RegisterHeader = () => {
  return (
    <div className='login-header'>
      <div className='logo'>
        <img
          src='/favicon.ico'
          alt=''
        />
        <p>@jarek</p>
      </div>
      <div className='content'>
        Join thousands of learners from <br /> around the world{' '}
      </div>
      <div className='desc'>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </div>
    </div>
  )
}

export default RegisterHeader
