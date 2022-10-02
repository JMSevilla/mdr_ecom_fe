import React from 'react'
import { ReplicateOnInit } from '../../../../core/context/CloneElement';
import BODashboard from './home_field';

const BOHomeDashboard = () => {
  return (
    <div>
        <ReplicateOnInit children={
            <BODashboard/>
        }
        />
    </div>
  )
}

export default BOHomeDashboard