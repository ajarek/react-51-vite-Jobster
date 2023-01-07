import React from 'react'
import useFetch from '../../auth/useFetch'
import CardJob from '../CardJob/CardJob'
import Loading from '../Loading/Loading'
import FullPageLayout from '../FullPageLayout/FullPageLayout'
import './AllJobs .css'
const AllJobs = ({ style }) => {
  const TOKEN = localStorage.getItem('ID_TOKEN_KEY')
  const urlGet = `https://jobster-fd2b4-default-rtdb.europe-west1.firebasedatabase.app/.json?auth=${TOKEN}`
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
        Object.values(data).map((el,index) => {
          return( <div key={index} >
            <CardJob
            position={el.position}
            company={el.company}
            location={el.location}
            date={el.date}
            status={el.status}
            type={el.type}
            />
          </div>)
        })}
    </div>
  )
}

export default AllJobs
