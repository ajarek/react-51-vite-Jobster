import React from 'react'
import FormJob from '../FormJob/FormJob'
import Post from '../../auth/Post'
import './AddJobs.css'
const AddJobs = ({style}) => {
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
      <FormJob 
      label={'Submit'}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default AddJobs