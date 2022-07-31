import React, {useState} from 'react'
import ApplicationCard from '../../components/Card/Card'
import { CardContent, CardMedia } from '@mui/material'
import SystemContainer from '../../components/Container/Container'
import SystemStepper from '../../components/Stepper/Stepper'
import { customerStepper } from '../../core/utils/helper'
import SystemTypography from '../../components/Typography/Typography'
import SystemGrid from '../../components/Grid/Grid'
import MDRClient from '../../assets/mdrclient.png'
import MDRDev from '../../assets/mdrdev1.png'
import AppButton from '../../components/Buttons/Button'


const SignupField = (props) => {
    const {activeSteps, setActiveSteps, signupCategory, setSignupCategory, setOpen} = props
  
    const selectedCustomer = () => {
        setOpen(true)
        setTimeout(() => {
            setSignupCategory('survey')
            setOpen(false)
        }, 2000)
    }
    
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
                        <AppButton 
                        buttonName={'SELECT'}
                        style={{
                            width: '100%'
                        }}
                        variant={'contained'}
                        size={'small'}
                        handleClick={() => selectedCustomer()}
                        />
                    </CardContent>
                }
            />
        )
    }
    const DeveloperSignup = () => {
        return (
            <ApplicationCard
                cardmedia={
                    <CardMedia 
                        component="img"
                        height="140"
                        image={MDRDev}
                        alt="developers"
                        style={{width : '50%'}}
                    />
                }
                children={
                    <CardContent>
                        <AppButton 
                        buttonName={'SELECT'}
                        style={{
                            width: '100%'
                        }}
                        variant={'contained'}
                        size={'small'}
                        />
                    </CardContent>
                }
            />
        )
    }
    const BusinessOwner = () => {
        return (
            <ApplicationCard
                cardmedia={
                    <CardMedia 
                        component="img"
                        height="140"
                        image={
                            'https://thumbs.dreamstime.com/b/real-estate-developer-entrepreneur-concept-business-man-owner-skyscraper-buildings-property-standing-leaning-to-them-modern-82275521.jpg'
                        }
                        alt="business_owner"
                        style={{width : '50%'}}
                    />
                }
                children={
                    <CardContent>
                        <AppButton 
                        buttonName={'I am a business owner'}
                        style={{
                            width: '100%'
                        }}
                        variant={'contained'}
                        size={'small'}
                        />
                    </CardContent>
                }
            />
        )
    }
    const Student = () => {
        return (
            <ApplicationCard
                cardmedia={
                    <CardMedia 
                        component="img"
                        height="140"
                        image={
                            'https://aeccglobal.ng/images/2021/05/18/best-courses-to-study-in-uk.webp'
                        }
                        alt="student"
                        style={{width : '50%'}}
                    />
                }
                children={
                    <CardContent>
                        <AppButton 
                        buttonName={'I am a student'}
                        style={{
                            width: '100%'
                        }}
                        variant={'contained'}
                        size={'small'}
                        />
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
                                : signupCategory == 'survey' ?
                                    <>
                                        <SystemTypography 
                                            isgutter={true}
                                            text={'Project Details'}
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
                                                    children : <BusinessOwner />
                                                },
                                                {
                                                    childrenId: 2,
                                                    children : <Student />
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