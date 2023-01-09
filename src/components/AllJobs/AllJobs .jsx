import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import useFetch from '../../auth/useFetch'
import CardJob from '../CardJob/CardJob'
import Loading from '../Loading/Loading'
import FullPageLayout from '../FullPageLayout/FullPageLayout'
import Delete from '../../auth/Delete'
import './AllJobs .css'



const AllJobs = ({ style }) => {
  const TOKEN = localStorage.getItem('ID_TOKEN_KEY')
  const decoded = jwt_decode(TOKEN);
  const urlGet = `https://jobster-fd2b4-default-rtdb.europe-west1.firebasedatabase.app/:${decoded.user_id
}.json?auth=${TOKEN}`
  const { data, pending, error } = useFetch(urlGet)
 
  return (
    <div
      className='job-all-list'
      style={style}
    >
      {error ? (
        <FullPageLayout>
          <h1 style={{color:'red'}}>{error}!</h1>
        </FullPageLayout>
      ) : null}
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
      {data &&
        Object.entries(data).map((entry) => {
          const key = entry[0]
          const value = entry[1]
          return( <div key={key} >
            <CardJob
            onClick={()=>{Delete(key)}}
            position={value.position}
            company={value.company}
            location={value.location}
            date={value.date}
            status={value.status}
            type={value.type}
            />
          </div>)
        })}
    </div>
  )
}

export default AllJobs
