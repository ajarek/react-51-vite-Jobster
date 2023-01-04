import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'

import Navigation from '../../components/Navigation/Navigation'
import './Dashboard.css'
const Dashboard = () => {
  const { pending, setPending } = useContext(AppContext)
  console.log(pending);
  return <div>
    {pending ?<h1>Loading...</h1>  : null}
    <Navigation />
    </div>
}

export default Dashboard
