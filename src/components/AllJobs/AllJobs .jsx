import React from 'react'
import FormJob from '../FormJob/FormJob'
import Post from '../../auth/Post'
import './AllJobs .css'
const AllJobs  = ({style}) => {
  const TOKEN =localStorage.getItem('ID_TOKEN_KEY')
  const urlPost =
  `https://jobster-fd2b4-default-rtdb.europe-west1.firebasedatabase.app/.json?auth=${TOKEN}`
  const onSubmit = (data) => {  
    Post(urlPost, data)
  }
  return (
    <div 
    className='job-list'
    style={style}
    >
      <h1>All jobs</h1>
    </div>
  )
}

export default AllJobs 