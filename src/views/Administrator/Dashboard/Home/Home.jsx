import React from 'react'
import { ReplicateOnInit } from '../../../../core/context/CloneElement'
import HomeFieldDDashboard from './home_fields'

const HomeDashboard = () => {
  return (
    <>
       <ReplicateOnInit
       children={
        <HomeFieldDDashboard/>
       }
       />
    </>
  )
}

export default HomeDashboard