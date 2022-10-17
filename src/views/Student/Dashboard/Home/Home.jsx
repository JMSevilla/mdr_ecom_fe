import React from 'react'
import { ReplicateOnInit } from '../../../../core/context/CloneElement'
import HomeFieldDashboard from './home_fields'
const HomeDashboard = () => {

  return (
    <>
        <ReplicateOnInit
        children={
            <HomeFieldDashboard/>
        }
        />
    </>
  )
}

export default HomeDashboard