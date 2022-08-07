import React, {useState, cloneElement} from 'react'
import SystemContainer from '../../components/Container/Container'
import ApplicationCard from '../../components/Card/Card'
import SystemStepper from '../../components/Stepper/Stepper'
import { customerStepper } from '../../core/utils/helper'
import SystemTypography from '../../components/Typography/Typography'
import SystemGrid from '../../components/Grid/Grid'

import { CardContent, CardMedia, Box , Grid, Card} from '@mui/material'


import MDRClient from '../../assets/mdrclient.png'
import MDRDev from '../../assets/mdrdev1.png'
import AppButton from '../../components/Buttons/Button'
import AppTextField from '../../components/TextField/TextField'
import NextPrevious from '../../components/NextPrevious/NextPrevious'
import SystemSelect from '../../components/Select/Select'
import SystemSlider from '../../components/Slider/Slider'

import { Peso } from '../../core/utils/Intl'

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

import { projectCategory, projectType, features, destinationArray, security_questions } from '../../core/utils/helper'

const SignupField = (props) => {
    const { activeSteps, signupCategory, setSignupCategory, setOpen, setActiveSteps, allFieldSelected, setAllFieldSelected, selectedIndex, setSelectedIndex, HandleChangeFirstname, HandleChangeLastname,
        HandleChangeAddress, HandleChangeContactNumber, handleNext, HandleProjectName, HandleSelectProjectCategory,
        HandleSelectProjectType, HandleSliderChange, handlePrevious, HandleChangeBOEmailSignup, HandleChangeBOPasswordSignup, HandleChangeBOConPassSignup, 
        HandleChangeBOSecAnswer, HandleSelectQuestion, HandleVerification} = props
    const { fieldSettings, priceSettings, verification, setVerification, } = allFieldSelected[0]
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
    
  
    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        const RSI = result.source.index
        const RDI = result.destination.index

        features.forEach(function(elem, index) {
            let deleted = features.splice(RSI, 1)
            destinationArray.push(deleted[0])
        })
    }

    return (
        <SystemContainer max={'xl'} style={{marginTop: '150px', marginBottom : '50px'}}>
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
                                            <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
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
                                            <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
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
                                                                handleChange={(e) => HandleProjectName(e)}
                                                                variant={'outlined'}
                                                                label={'Project Name'}
                                                                
                                                                texthelper={fieldSettings.error_provider_message.epm_projectname}
                                                                iserror={fieldSettings.errorProvider.error_projectname}
                                                            />
                                                            },
                                                            {
                                                                childrenId: 2,
                                                                children : <SystemSelect 
                                                                value={fieldSettings.projectDetailsObj.projectCategory}
                                                                selectionArray={projectCategory}
                                                                selectionLabel={'Select Project Category'}
                                                                selectionTitle={'Choose Project Category'}
                                                                placeholder={'Choose Project Category'}
                                                                style={{marginTop: '10px', marginBottom: '10px'}}
                                                                handleSelect={(e) => HandleSelectProjectCategory(e)}
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
                                                                children : <SystemSelect 
                                                                value={fieldSettings.projectDetailsObj.projectType}
                                                                selectionArray={projectType}
                                                                selectionLabel={'Select Project Type'}
                                                                selectionTitle={'Choose Project Type'}
                                                                placeholder={'Choose Project Type'}
                                                                style={{marginTop: '10px', marginBottom: '10px'}}
                                                                handleSelect={(e) => HandleSelectProjectType(e)}
                                                                />
                                                            },
                                                            {
                                                                childrenId: 2,
                                                                children : <SystemSlider 
                                                                defaultValue={
                                                                   fieldSettings.projectDetailsObj.projectPricing
                                                                }
                                                                title={'Project Pricing'}
                                                                max={priceSettings.max}
                                                                min={priceSettings.min}
                                                                sliderChange={HandleSliderChange}
                                                                value={
                                                                    fieldSettings.projectDetailsObj.projectPricing
                                                                }
                                                                intlPrice={
                                                                    Peso.format(
                                                                        fieldSettings.projectDetailsObj.projectPricing
                                                                    )
                                                                }
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
                                        : activeSteps === 2 ? 
                                        <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
                                        <SystemTypography 
                                            isgutter={true}
                                            text={'Project Features'}
                                            variant={'h5'}
                                        />
                                        <hr />
                                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                                    <Droppable droppableId='droppable'>
                                                        {(provided, snapshot) => (
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                            <Grid item xs={6}>
                                                                <Card
                                                                {...provided.droppableProps}
                                                                ref={provided.innerRef}
                                                                >
                                                                    <CardContent>
                                                                        <SystemTypography 
                                                                        isgutter={true}
                                                                        text={'Drop features here'}
                                                                        />
                                                                        <hr />
                                                                        <Grid direction="rows" container spacing={2}>
                                                                                
                                                                                    {
                                                                                destinationArray.map((item, index) => (
                                                                                    <Grid item xs={12} sm={4}>
                                                                                        <Card
                                                                                                    
                                                                                                    style={{
                                                                                                        marginTop: '10px', marginBottom: '10px'
                                                                                                    }}
                                                                                                    >
                                                                                                        <CardContent>
                                                                                                            {cloneElement(item.field)}
                                                                                                        </CardContent>
                                                                                                </Card>
                                                                                    </Grid>
                                                                                ))
                                                                        }
                                                                                
                                                                        </Grid>
                                                                         
                                                                        {provided.placeholder}
                                                                        
                                                                    </CardContent>
                                                                </Card>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                              <ApplicationCard 
                                                                children={
                                                                    <CardContent>
                                                                        <SystemTypography 
                                                                        isgutter={true}
                                                                        text={'Drag features here'}
                                                                        />
                                                                        <hr />
                                                                        <Grid direction="rows" container spacing={2}>
                                                                                {
                                                                                    features.map((item, index) => (
                                                                                        <Grid item xs={12} sm={4}>
                                                                                            <Draggable key={index} draggableId={item.field_id.toString()} index={index}>
                                                                                                {
                                                                                                    (provided, snapshot) => (
                                                                                                        <div
                                                                                                        ref={provided.innerRef}
                                                                                                                {...provided.draggableProps}
                                                                                                                {...provided.dragHandleProps}
                                                                                                        >
                                                                                                            <Card
                                                                                                                
                                                                                                                style={{
                                                                                                                    marginTop: '10px', marginBottom: '10px'
                                                                                                                }}
                                                                                                                >
                                                                                                                    <CardContent>
                                                                                                                        
                                                                                                                        {cloneElement(item.field)}
                                                                                                                    </CardContent>
                                                                                                            </Card>
                                                                                                        </div>
                                                                                                    )
                                                                                                }
                                                                                            </Draggable>
                                                                                        </Grid>
                                                                                    ))
                                                                                }
                                                                        </Grid>
                                                                    </CardContent>
                                                                }
                                                              />
                                                            </Grid>
                                                          </Grid>
                                                        )}
                                                    </Droppable>
                                            </DragDropContext>  
                                            <NextPrevious 
                                            activeSteps={activeSteps}
                                            stepperArray={customerStepper}
                                            handleBack={() => handlePrevious()}
                                            handleNext={() => handleNext()}
                                            />     
                                        </SystemContainer>
                                        : activeSteps === 3 ?
                                        <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
                                        <SystemTypography 
                                            isgutter={true}
                                            text={'Credentials'}
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
                                                                children : <ApplicationCard 
                                                                children = {
                                                                    <CardContent>
                                                                        <AppTextField 
                                                                            value={fieldSettings.credentialsObj.email}
                                                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                            placeholder='Enter email'
                                                                            handleChange={(e) => HandleChangeBOEmailSignup(e)}
                                                                            variant={'outlined'}
                                                                            label={'Email'}
                                                                            type={'email'}
                                                                            texthelper={fieldSettings.error_provider_message.epm_email}
                                                                            iserror={fieldSettings.errorProvider.error_email}
                                                                        />
                                                                        <AppTextField 
                                                                            value={fieldSettings.credentialsObj.password}
                                                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                            placeholder='Enter password'
                                                                            handleChange={(e) => HandleChangeBOPasswordSignup(e)}
                                                                            variant={'outlined'}
                                                                            label={'Password'}
                                                                            type={'password'}
                                                                            texthelper={fieldSettings.error_provider_message.epm_password}
                                                                            iserror={fieldSettings.errorProvider.error_password}
                                                                        />
                                                                        <AppTextField 
                                                                            value={fieldSettings.credentialsObj.conpass}
                                                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                            placeholder='Confirm your password'
                                                                            handleChange={(e) => HandleChangeBOConPassSignup(e)}
                                                                            variant={'outlined'}
                                                                            label={'Confirm Password'}
                                                                            type={'password'}
                                                                            texthelper={fieldSettings.error_provider_message.epm_conpass}
                                                                            iserror={fieldSettings.errorProvider.error_conpass}
                                                                        />
                                                                    </CardContent>
                                                                }
                                                                />
                                                            },
                                                            {
                                                                childrenId: 2,
                                                                children : <ApplicationCard 
                                                                children = {
                                                                    <CardContent>
                                                                        <SystemTypography 
                                            isgutter={true}
                                            text={'Security Area'}
                                            variant={'h6'}
                                        />
                                        <hr />
                                                                        <SystemGrid 
                                                                            rowSpacing={1}
                                                                            columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                                            GridItems={
                                                                                [
                                                                                    {
                                                                                        childrenId: 1,
                                                                                        children : <SystemSelect 
                                                                value={fieldSettings.credentialsObj.sec_question}
                                                                selectionArray={security_questions}
                                                                selectionLabel={'Select Question'}
                                                                selectionTitle={'Choose Question'}
                                                                placeholder={'Choose Question'}
                                                                style={{marginTop: '10px', marginBottom: '10px'}}
                                                                handleSelect={(e) => HandleSelectQuestion(e)}
                                                                />
                                                                                    },
                                                                                    {
                                                                                        childrenId: 1,
                                                                                        children :  <AppTextField 
                                                                                        value={fieldSettings.credentialsObj.sec_answer}
                                                                                        style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                                        placeholder='State your answer'
                                                                                        handleChange={(e) => HandleChangeBOSecAnswer(e)}
                                                                                        variant={'outlined'}
                                                                                        label={'Answer'}
                                                                                        texthelper={fieldSettings.error_provider_message.epm_sec_answer}
                                                                                        iserror={fieldSettings.errorProvider.error_sec_answer}
                                                                                    />
                                                                                    }
                                                                                ]
                                                                            }
                                                                        />
                                                                    </CardContent>
                                                                }
                                                                />
                                                            }
                                                        ]
                                                    }
                                         />
                                          <NextPrevious 
                                            activeSteps={activeSteps}
                                            stepperArray={customerStepper}
                                            handleBack={() => handlePrevious()}
                                            handleNext={() => handleNext()}
                                            />
                                        </SystemContainer>
                                        
                                        : activeSteps === 4 ? 
                                        <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
                                        <SystemTypography 
                                            isgutter={true}
                                            text={'Verification'}
                                            variant={'h5'}
                                        />
                                        <hr />
                                        <AppTextField 
                                            value={fieldSettings.verificationObj.verificationcode}
                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                            placeholder='Enter verification code'
                                            handleChange={(e) => HandleVerification(e)}
                                            variant={'outlined'}
                                            label={'Verification Code'}
                                            texthelper={fieldSettings.verificationObj.epm_verify}
                                            iserror={fieldSettings.verificationObj.error_verify}
                                        />   
                                        <NextPrevious 
                                            activeSteps={activeSteps}
                                            stepperArray={customerStepper}
                                            handleBack={() => handlePrevious()}
                                            handleNext={() => handleNext()}
                                            hasResend={true}
                                            />     
                                        </SystemContainer>
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