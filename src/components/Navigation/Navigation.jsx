import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo/'
import { FaChartBar, FaRegEdit,FaRegUser,FaRegUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import {AiOutlineMenuFold } from "react-icons/ai";
import {TiArrowSortedDown } from "react-icons/ti";
import './Navigation.css'
const Navigation = () => {
  const { pending, setPending } = useContext(AppContext)
  const navigate = useNavigate()
  const [toggle,setToggle]=useState(true)
  const [toggleLogout,setToggleLogout]=useState(false)
  const onClickLogOut = () => {
    localStorage.removeItem('REFRESH_TOKEN_KEY')
    localStorage.removeItem('ID_TOKEN_KEY')
    navigate('/login')
     setPending(true)
  }
  return (
    <div className='navigation'>
      <aside 
      className='aside' 
      style={toggle?{display:'block'}:{display:'none'}}
      >
        <Logo/>
        <div className="aside-icon">
        <p><FaChartBar/> <span>  Stats</span></p>
        <p><TbReportSearch/><span>  All Jobs</span> </p>
        <p><FaRegEdit/><span>  Add Job</span> </p>
        <p><FaRegUser/><span>  Profile</span> </p>
        </div>
      </aside>
      <nav className='nav'>
        <div className="toggle-btn">
          <button
           onClick={()=>setToggle(!toggle)}
           style={toggle?{transform:'rotate(720deg)',transition:'0.3s ease-in-out'}:{transform:'rotate(900deg)',transition:'0.3s ease-in-out'}}
           >
            <AiOutlineMenuFold/>
            </button>
          <style></style>
        </div>
        <div className="nav-title">
          <h1>Dashboard</h1>
        </div>
        <div
         className="nav-logout"
         
        >
          <button
           className='btn-user'
           onClick={()=>setToggleLogout(!toggleLogout)}
          >
            <FaRegUserCircle/> Ajarek <TiArrowSortedDown/></button>
          <button 
          className='btn-logout'
          onClick={onClickLogOut}
          style={toggleLogout?{display:'block'}:{display:'none'}}
          >Logout</button>


        </div>
      </nav>
    </div>
  )
}

export default Navigation