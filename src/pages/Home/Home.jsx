import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='left-panel'>
        <Logo />
        <div className='title'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
        </div>
        <div className='info'>
          Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
          fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
          crucifix heirloom meggings bicycle rights.
        </div>
        <div className='btn'>
          <NavLink
            className='link'
            to='/login'
          >
            Login/Register
          </NavLink>
        </div>
      </div>
      <div className='right-panel'>
        <div className='img'>
          <img
            src='/jobster.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Home
