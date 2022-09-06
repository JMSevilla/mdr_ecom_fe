import React, {useContext} from 'react'
import { Grid, Typography } from '@mui/material'
import {AppButton} from '../index'
import { destinationArray, features } from '../../core/utils/helper'
import { GlobalContext } from '../../core/context/GlobalContext'

const SSP_Feature1 = (props) => {
    const { indexProps } = props
    const contextValues = useContext(GlobalContext)
    const { deleteField, destinationArray } = contextValues
    

    return (
        <div>
            {/* <Typography variant="h5" gutterBottom>Scale (SSP) : Feature 1</Typography> */}
            <center>
            <img 
                src='https://cdn2.iconfinder.com/data/icons/business-and-commercial-mixed-hexagone/128/35-256.png'
                style={{width: '50%', height : 'auto'}}
                alt="Login"
                />
                <Typography variant="h6">Login</Typography>
                 {
                    typeof destinationArray[0]  !== 'undefined' && <AppButton 
                        buttonName={'REMOVE'}
                        style={{
                            width: '100%'
                        }}
                        variant={'contained'}
                        color={'error'}
                        size={'small'}
                        handleClick={(e) => {
                            deleteField(indexProps.key)
                        }}
                        /> 
                 }
                {/* <Typography >A login generally requires the user to enter two pieces of information, first a user name and then a password. This information is entered into a login window on a GUI</Typography> */}
            </center>
        </div>
    )
}

const SSP_Feature2 = (props) => {
    const { indexProps } = props
    const contextValues = useContext(GlobalContext)
    const { deleteField, destinationArray } = contextValues
    return (
        <div>
            {/* <Typography variant="h5" gutterBottom>Scale (SSP) : Feature 2</Typography> */}
        <center>
           <img 
                src='https://cdn4.iconfinder.com/data/icons/company-structure-14/62/reception-customer-registration-information-service-256.png'
                style={{width: '50%', height : 'auto'}}
                alt="Login"
                />
                <Typography variant="h6">Admin Dashboard</Typography>
                {console.log(destinationArray)}
                {console.log(indexProps)}
                 {
                  typeof destinationArray[1] !== 'undefined' && <AppButton 
                        buttonName={'REMOVE'}
                        style={{
                            width: '100%'
                        }}
                        variant={'contained'}
                        color={'error'}
                        size={'small'}
                        handleClick={(e) => {
                            deleteField(indexProps.key)
                        }}
                        /> 
                 }
                {/* <Typography >A login generally requires the user to enter two pieces of information, first a user name and then a password. This information is entered into a login window on a GUI</Typography> */}
            </center>
        </div>
    )
}

export { SSP_Feature1, SSP_Feature2 }