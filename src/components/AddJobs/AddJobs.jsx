import React from 'react'
import jwt_decode from 'jwt-decode'
import FormJob from '../FormJob/FormJob'
import Post from '../../auth/Post'
import './AddJobs.css'
const AddJobs = ({ style }) => {
  const TOKEN = localStorage.getItem('ID_TOKEN_KEY')
  const decoded = jwt_decode(TOKEN)

  const urlPost = `https://jobster-fd2b4-default-rtdb.europe-west1.firebasedatabase.app/:${decoded.user_id}.json?auth=${TOKEN}`

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
