import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../App'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      
        <div className='left-panel'>
          <div className='logo'>
            <div className='logo-symbol'>J</div>
            <div className='logo-title'>Jobster</div>
          </div>
          <div className="title">
            <h1>Job Tracking App</h1>
            <div className="info">Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</div>
          </div>
          <NavLink className='link' to='/login'>Login/Register</NavLink>
        </div>
        <div className="right-panel">
          <div className="img"><img src="/jobster.png" alt="" /></div>
        </div>
      
    </div>
  )
}

export default Home
