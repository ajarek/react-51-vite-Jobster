import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'

import Navigation from '../../components/Navigation/Navigation'
import Loading from '../../components/Loading/Loading'
import FullPageLayout from '../../components/FullPageLayout/FullPageLayout'
import './Dashboard.css'
const Dashboard = () => {
  const { pending, setPending } = useContext(AppContext)
  console.log(pending)
  return (
    <div>
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
      <Navigation />
      <JobsList />
    </div>
  )
}

export default Dashboard
