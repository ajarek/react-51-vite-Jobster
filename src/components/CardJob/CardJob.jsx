import React from 'react'
import { FaMapMarkerAlt,FaRegCalendarAlt,FaBriefcase } from 'react-icons/fa';

import './CardJob.css'
const CardJob = (props) => {
 const {position,company,location,date,status,type}=props
  return (
    <div className='card-job'>
      <div className="logo-name-wrapper">
      <div className="card-logo">{company.split('')[0].toUpperCase()}</div>
      <div className="name-wrapper">
        <div className="position">{position}</div>
        <div className="company">{company}</div>
      </div>
      </div>
      <div className="location-date-wrapper">
        <div className="location"><FaMapMarkerAlt/> {location}</div>
        <div className="date"><FaRegCalendarAlt/> {date.split('T')[0]}</div>
      </div>
      <div className="select-wrapper">
      <div className="type"><FaBriefcase/> {type}</div>
        <div className="status">{status}</div>
       
      </div>
      <div className="button-wrapper">
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default CardJob