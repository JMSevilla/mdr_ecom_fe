import React, {useState} from 'react'
import ApplicationCard from '../../components/Card/Card'
import { CardContent, CardMedia } from '@mui/material'
import SystemContainer from '../../components/Container/Container'
import SystemStepper from '../../components/Stepper/Stepper'
import { customerStepper } from '../../core/utils/helper'
import SystemTypography from '../../components/Typography/Typography'
import SystemGrid from '../../components/Grid/Grid'
import MDRClient from '../../assets/mdrclient.png'

const SignupField = (props) => {
    const {activeSteps, setActiveSteps} = props
    const [signupCategory, setSignupCategory] = useState('pick')
    
    const CustomerSignup = () => {
        return (
            <ApplicationCard
                cardmedia={
                    <CardMedia 
                        component="img"
                        height="140"
                        image={MDRClient}
                        alt="client"
                        style={{width : '50%'}}
                    />
                }
                children={
                    <CardContent>
                        <SystemTypography 
                        isgutter={true}
                        text={'Create an account | Modern Resolve Client'}
                        />
                    </CardContent>
                }
            />
        )
    }
    const DeveloperSignup = () => {
        return (
            <ApplicationCard 
                children={
                    <CardContent>
                        developer registration
                    </CardContent>
                }
            />
        )
    }
    return (
        <>
            <SystemContainer style={{marginTop: '150px'}}>
                <ApplicationCard
                    children={
                        <CardContent>
                            {
                                signupCategory == 'pick' ? 
                                <>
                                    <SystemTypography 
                                    isgutter={true}
                                    text={'Select Registration Type'}
                                    variant={'h5'}
                                    />
                                    <hr/>
                                    <SystemGrid 
                                        rowSpacing={1}
                                        style={{marginTop: '50px'}}
                                        columnSpacing={{xs: 1, sm: 2, md: 3}}
                                        GridItems={
                                            [
                                                {
                                                    childrenId: 1,
                                                    children : <CustomerSignup />
                                                },
                                                {
                                                    childrenId: 2,
                                                    children : <DeveloperSignup />
                                                }
                                            ]
                                        }
                                    />
                                </>
                                : <></>
                            }
                        </CardContent>
                    }
                />
            </SystemContainer>
        </>
    )
}

export default SignupField