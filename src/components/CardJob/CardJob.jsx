import React from 'react'
import './CardJob.css'
const CardJob = (props) => {
 const {position,company,location,date,status,type}=props
  return (
    <div className='card-job'>
      <div className="card-logo">{company.split('')[0].toUpperCase()}</div>
      <div className="name-wrapper">
        <div className="position">{position}</div>
        <div className="company">{company}</div>
      </div>
      <div className="location-date-wrapper">
        <div className="location">{location}</div>
        <div className="date">{date}</div>
      </div>
      <div className="select-wrapper">
        <div className="status">{status}</div>
        <div className="type">{type}</div>
      </div>
      <div className="button-wrapper">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default CardJob