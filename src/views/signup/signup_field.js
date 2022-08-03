import React, {useState} from 'react'
import SystemContainer from '../../components/Container/Container'
import ApplicationCard from '../../components/Card/Card'
import SystemStepper from '../../components/Stepper/Stepper'
import { customerStepper } from '../../core/utils/helper'
import SystemTypography from '../../components/Typography/Typography'
import SystemGrid from '../../components/Grid/Grid'

import { CardContent, CardMedia, Box } from '@mui/material'


import MDRClient from '../../assets/mdrclient.png'
import MDRDev from '../../assets/mdrdev1.png'
import AppButton from '../../components/Buttons/Button'
import AppTextField from '../../components/TextField/TextField'
import NextPrevious from '../../components/NextPrevious/NextPrevious'

const SignupField = (props) => {
    const { activeSteps, signupCategory, setSignupCategory, setOpen, setActiveSteps, allFieldSelected, setAllFieldSelected, selectedIndex, setSelectedIndex, HandleChangeFirstname, HandleChangeLastname,
        HandleChangeAddress, HandleChangeContactNumber, handleNext } = props
    const { fieldSettings } = allFieldSelected[0]
    const selectedCustomer = () => {
        setOpen(true)
        setTimeout(() => {
            setSignupCategory('survey')
            setOpen(false)
        }, 2000)
    }
    const selectedIAmBusinessOwner = () => {
        setOpen(true)
        setTimeout(() => {
            setSignupCategory('business_owner')
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
                        handleClick={() => selectedIAmBusinessOwner()}
                        testid={'NavigateBusinessOwner'}
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
        <SystemContainer style={{marginTop: '150px', marginBottom : '50px'}}>
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
                            : signupCategory == 'business_owner' ?
                                <>
                                    <SystemTypography 
                                        isgutter={true}
                                        text={'Business Owner Registration'}
                                        variant={'h5'}
                                    />
                                    <hr/>
                                    <SystemStepper 
                                    activeSteps={activeSteps}
                                    propArray={customerStepper}
                                    />
                                    {
                                        activeSteps == 0 ? 
                                        <>
                                            <SystemContainer style={{marginTop: '20px'}}>
                                            <SystemTypography 
                                                isgutter={true}
                                                text={'Personal Information'}
                                                variant={'h5'}
                                            />
                                            <hr />
                                            <SystemGrid 
                                                    rowSpacing={1}
                                                    columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                    GridItems={
                                                        [
                                                            {
                                                                childrenId: 1,
                                                                children : <AppTextField
                                                                value={fieldSettings.personalInformationObj.firstname}
                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                placeholder='Enter firstname'
                                                                handleChange={(e) => HandleChangeFirstname(e)}
                                                                variant={'outlined'}
                                                                label={'Firstname'}
                                                                
                                                                texthelper={fieldSettings.error_provider_message.epm_firstname}
                                                                iserror={fieldSettings.errorProvider.error_firstname}
                                                                />
                                                            },
                                                            {
                                                                childrenId: 2,
                                                                children : <AppTextField
                                                                value={fieldSettings.personalInformationObj.lastname}
                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                placeholder='Enter Lastname'
                                                                handleChange={(e) => HandleChangeLastname(e)}
                                                                variant={'outlined'}
                                                                label={'Lastname'}
                                                                
                                                                texthelper={fieldSettings.error_provider_message.epm_lastname}
                                                                iserror={fieldSettings.errorProvider.error_lastname}
                                                                />
                                                            }
                                                        ]
                                                    }
                                            />
                                            <SystemGrid 
                                                    rowSpacing={1}
                                                    columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                    GridItems={
                                                        [
                                                            {
                                                                childrenId: 1,
                                                                children :<AppTextField 
                                                                value={fieldSettings.personalInformationObj.contactnum}
                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                placeholder='Enter Contact Number'
                                                                handleChange={(e) => HandleChangeContactNumber(e)}
                                                                variant={'outlined'}
                                                                label={'Contact Number'}
                                                                
                                                                texthelper={fieldSettings.error_provider_message.epm_contactnum}
                                                                iserror={fieldSettings.errorProvider.error_contactnum}
                                                            />
                                                            },
                                                            {
                                                                childrenId: 2,
                                                                children : <AppTextField 
                                                                value={fieldSettings.personalInformationObj.address}
                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                placeholder='Enter Address'
                                                                handleChange={(e) => HandleChangeAddress(e)}
                                                                variant={'outlined'}
                                                                label={'Address'}
                                                                
                                                                texthelper={fieldSettings.error_provider_message.epm_address}
                                                                iserror={fieldSettings.errorProvider.error_address}
                                                                ismultiLine={true}
                                                                rows={4}
                                                            />
                                                            }
                                                        ]
                                                    }
                                            />
                                            <NextPrevious 
                                            activeSteps={activeSteps}
                                            stepperArray={customerStepper}
                                            handleBack={() => setActiveSteps((activeSteps) => activeSteps - 1)}
                                            handleNext={() => handleNext()}
                                            />
                                            </SystemContainer>
                                        </>
                                        : activeSteps == 1 ? 
                                        <>
                                            <SystemContainer style={{marginTop: '20px'}}>
                                            <SystemTypography 
                                                isgutter={true}
                                                text={'Project Details'}
                                                variant={'h5'}
                                            />
                                            <hr />

                                            <SystemGrid 
                                                    rowSpacing={1}
                                                    columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                    GridItems={
                                                        [
                                                            {
                                                                childrenId: 1,
                                                                children : <AppTextField 
                                                                value={fieldSettings.projectDetailsObj.projectName}
                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                placeholder='Enter Project Name'
                                                                // handleChange={(e) => HandleChangeContactNumber(e)}
                                                                variant={'outlined'}
                                                                label={'Project Name'}
                                                                
                                                                texthelper={fieldSettings.error_provider_message.epm_contactnum}
                                                                iserror={fieldSettings.errorProvider.error_contactnum}
                                                            />
                                                            },
                                                            {
                                                                childrenId: 2,
                                                                children : <p>test 2</p>
                                                            }
                                                        ]
                                                    }
                                            />

                                            <NextPrevious 
                                            activeSteps={activeSteps}
                                            stepperArray={customerStepper}
                                            handleBack={() => setActiveSteps((activeSteps) => activeSteps - 1)}
                                            handleNext={() => handleNext()}
                                            />
                                            </SystemContainer>
                                        </>
                                        : <></>
                                    }
                                </>
                            : <></>
                        }
                    </CardContent>
                }
            />
        </SystemContainer>
    )
}

export default SignupField