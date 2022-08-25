import React, {useState, cloneElement, useEffect} from 'react'
import {SystemContainer, ApplicationCard, SystemStepper, SystemTypography, SystemGrid, AppButton, AppTextField, NextPrevious, SystemSelect, SystemSlider, SystemUserGuide} from '../../components'
import { customerStepper } from '../../core/utils/helper'
import { CardContent, CardMedia, Box , Grid, Card, Paper} from '@mui/material'
import { styled } from '@mui/material/styles'
import MDRClient from '../../assets/mdrclient.png'
import MDRDev from '../../assets/mdrdev1.png'
import FormService from '../../core/service/apiservice'
import {motion} from 'framer-motion';
import { Peso } from '../../core/utils/Intl'

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

import { projectCategory, projectType, features, destinationArray, security_questions } from '../../core/utils/helper'

import { projectbreakdown } from '../../core/utils/dumpfeatures'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TbBoxMultiple } from 'react-icons/tb'

const SignupField = (props) => {
    const { activeSteps, signupCategory, setSignupCategory, setOpen, setActiveSteps, allFieldSelected, setAllFieldSelected, selectedIndex, setSelectedIndex, HandleChangeFirstname, HandleChangeLastname,
        HandleChangeAddress, HandleChangeContactNumber, handleNext, HandleProjectName, HandleSelectProjectCategory,
        HandleSelectProjectType, HandleSliderChange, handlePrevious, HandleChangeBOEmailSignup, HandleChangeBOPasswordSignup, HandleChangeBOConPassSignup, 
        HandleChangeBOSecAnswer, HandleSelectQuestion, HandleVerification, HandleResentEmail, projectDetails, setProjectDetails, timer} = props
    const { fieldSettings, priceSettings } = allFieldSelected[0]

    const selectedCustomer = () => {
            setSignupCategory('survey')
    }
    const selectedIAmBusinessOwner = () => {
        setOpen(true)
        setTimeout(() => {
            setSignupCategory('business_owner')
            setOpen(false)
        }, 2000)
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    
    const CustomerSignup = () => {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
            </motion.div>
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
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
            </motion.div>
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
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <SystemContainer max={'xl'} style={{marginTop: '150px', marginBottom : '50px'}}>
            <ApplicationCard
                style={{padding: '20px'}}
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
                                            <hr style={{marginBottom: '20px'}}/>
                                            <SystemGrid 
                                                    rowSpacing={1}
                                                    columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                    GridItems={
                                                        [
                                                            {
                                                                childrenId: 1,
                                                                children : <AppTextField
                                                                value={fieldSettings.personalInformationObj.firstname}
                                                                style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
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
                                                                style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
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
                                            <hr style={{marginBottom: '20px'}}/>
                                            <SystemGrid 
                                                    rowSpacing={1}
                                                    columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                    GridItems={
                                                        [
                                                            {
                                                                childrenId: 1,
                                                                children : <AppTextField 
                                                                value={fieldSettings.projectDetailsObj.projectName}
                                                                style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
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
                                                                style={{marginTop: '10px', marginBottom: '20px'}}
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
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data={projectDetails}
                                                onReady={ editor => {
                                                } }
                                                onChange={ ( event, editor ) => {
                                                    const data = editor.getData();
                                                    setProjectDetails(data)
                                                } }
                                                onBlur={ ( event, editor ) => {
                                                } }
                                                onFocus={ ( event, editor ) => {
                                                } }
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
                                        <hr style={{marginBottom: '20px'}}/>

                                        <SystemUserGuide targetOne={<SystemTypography text={`Your Budget Price: ${Peso.format(fieldSettings.projectDetailsObj.projectPricing)}`} variant={'h6'} style={{fontWeight: 600, marginBottom: '20px'}}/> } 
                                        targetTwo={<SystemTypography text={`Project Type: ${fieldSettings.projectDetailsObj.projectType === 'SSP' ? 'Small Scale' 
                                        : fieldSettings.projectDetailsObj.projectType === 'MSP' ? 'Medium Scale' : 
                                        fieldSettings.projectDetailsObj.projectType === 'LSP' ? 'Large Scale' : ''}`} 
                                        variant={'h6'} style={{marginBottom: '20px', fontWeight: 600}}/>}>

                                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                            <Droppable droppableId='droppable'>
                                                {(provided, snapshot) => (
                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                        <Grid item xs={6}>
                                                        <Card className='unique-classnameFour'
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        >
                                                            <CardContent>
                                                                <SystemTypography 
                                                                isgutter={true}
                                                                text={'Your Project Features Here'}
                                                                style={{textAlign: 'center', fontFamily: 'Georgia'}}
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
                                                            className='unique-classnameThree'
                                                            children={
                                                                <CardContent>
                                                                    <SystemTypography 
                                                                    isgutter={true}
                                                                    text={'Drag Features From Here'}
                                                                    style={{textAlign: 'center', fontFamily: 'Georgia'}}
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
                                    </SystemUserGuide>    

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
                                        <hr style={{marginBottom: '20px'}}/>
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
                                                                                <SystemSelect 
                                                                                value={fieldSettings.credentialsObj.sec_question}
                                                                                selectionArray={security_questions}
                                                                                selectionLabel={'Select Question'}
                                                                                selectionTitle={'Choose Question'}
                                                                                placeholder={'Choose Question'}
                                                                                style={{marginTop: '10px', marginBottom: '10px'}}
                                                                                handleSelect={(e) => HandleSelectQuestion(e)}
                                                                                />
                                                                                <AppTextField 
                                                                                value={fieldSettings.credentialsObj.sec_answer}
                                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                                placeholder='State your answer'
                                                                                handleChange={(e) => HandleChangeBOSecAnswer(e)}
                                                                                variant={'outlined'}
                                                                                label={'Answer'}
                                                                                texthelper={fieldSettings.error_provider_message.epm_sec_answer}
                                                                                iserror={fieldSettings.errorProvider.error_sec_answer}
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
                                            text={'Account Verification'}
                                            variant={'h5'}
                                        />
                                        <hr />
                                        <AppTextField 
                                            value={fieldSettings.verificationObj.verificationcode}
                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                            placeholder='Enter verification code'
                                            handleChange={(e) => HandleVerification(e)}
                                            variant={'outlined'}
                                            label={'Please enter the verification code sent to your email..'}
                                            texthelper={fieldSettings.verificationObj.epm_verify}
                                            iserror={fieldSettings.verificationObj.error_verify}
                                        />   
                                        <NextPrevious
                                            disabled={timer === 0 ? false : true}
                                            buttonName={timer === 0 ? 'Resend' : `Resend in: ${timer} ${timer > 1 ? 'secs' : 'sec'}`}
                                            activeSteps={activeSteps}
                                            stepperArray={customerStepper}
                                            handleBack={() => handlePrevious()}
                                            handleNext={() => handleNext()}
                                            hasResend={true}
                                            handleResend={() => HandleResentEmail()}
                                            />     
                                        </SystemContainer>
                                        : activeSteps == 5 ?
                                        <>
                                        <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
                                        <SystemTypography 
                                            isgutter={true}
                                            text={'Account Preview'}
                                            variant={'h5'}
                                        />
                                        <hr />
                                        <SystemGrid 
                                                                            rowSpacing={1}
                                                                            columnSpacing={{xs: 1, sm: 2, md: 3}}
                                                                            style={{marginBottom: '15px'}}
                                                                            GridItems={
                                                                                [
                                                                                    {
                                                                                        childrenId: 1,
                                                                                        children : <ApplicationCard 
                                                                                            children={
                                                                                                <CardContent>
                                                                                                    <SystemTypography 
                                                                                                        isgutter={true}
                                                                                                        text={'Personal Information'}
                                                                                                        variant={'h6'}
                                                                                                        style={{textAlign: 'center'}}
                                                                                                    />
                                                                                                    <hr />
                                                                                                    {
                                                                                                        allFieldSelected[selectedIndex].businessFieldArray && allFieldSelected[selectedIndex].businessFieldArray.map((item) => {
                                                                                                           return (
                                                                                                            <Box style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                                                                                                                <Box style={{display: 'flex', gap: '0.5rem'}}>
                                                                                                                <Item style={{width: '50%'}}>
                                                                                                                    <SystemTypography 
                                                                                                                            isgutter={true}
                                                                                                                            text={'Firstname :' + ' ' + item.firstname}
                                                                                                                            style={{color: 'black', textAlign: 'left'}}
                                                                                                                        /> 
                                                                                                                        
                                                                                                                </Item>
                                                                                                                <Item style={{width: '50%'}}>
                                                                                                                <SystemTypography 
                                                                                                                            isgutter={true}
                                                                                                                            text={'Lastname :' + ' ' + item.lastname}
                                                                                                                            style={{color: 'black', textAlign: 'left'}}
                                                                                                                        /> 
                                                                                                                </Item>
                                                                                                                </Box>
                                                                                                                <Item>
                                                                                                                <SystemTypography 
                                                                                                                            isgutter={true}
                                                                                                                            text={'Contact No : ' + 0 + item.contactnumber}
                                                                                                                            style={{color: 'black', textAlign: 'left'}}
                                                                                                                        /> 
                                                                                                                </Item>
                                                                                                                <Item>
                                                                                                                <SystemTypography 
                                                                                                                            isgutter={true}
                                                                                                                            text={'Address :' + ' ' + item.address}
                                                                                                                            style={{color: 'black', textAlign: 'left'}}
                                                                                                                        /> 
                                                                                                                </Item>
                                                                                                            </Box>
                                                                                                           )
                                                                                                        })
                                                                                                    }
                                                                                                </CardContent>
                                                                                            }
                                                                                        />
                                                                                    },
                                                                                    {
                                                                                        childrenId: 2,
                                                                                        children :  <ApplicationCard 
                                                                                        children={
                                                                                            <CardContent>
                                                                                                <SystemTypography 
                                                                                                    isgutter={true}
                                                                                                    text={'User Credentials'}
                                                                                                    variant={'h6'}
                                                                                                    style={{textAlign: 'center'}}
                                                                                                />
                                                                                                <hr />
                                                                                                {
                                                                                                    allFieldSelected[selectedIndex].businessFieldArray && allFieldSelected[selectedIndex].businessFieldArray.map((item) => {
                                                                                                       return (
                                                                                                        <Box style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                                                                                                            <Item>
                                                                                                                <SystemTypography 
                                                                                                                        isgutter={true}
                                                                                                                        text={'Email Address:' + ' ' + item.email}
                                                                                                                        style={{color: 'black', textAlign: 'left'}}
                                                                                                                    /> 
                                                                                                                    
                                                                                                            </Item>
                                                                                                            <Item>
                                                                                                            <SystemTypography 
                                                                                                                        isgutter={true}
                                                                                                                        text={'Security question : ' + item.sec_question}
                                                                                                                        style={{color: 'black', textAlign: 'left'}}
                                                                                                                    /> 
                                                                                                            </Item>
                                                                                                            <Item>
                                                                                                            <SystemTypography 
                                                                                                                        isgutter={true}
                                                                                                                        text={'Security Answer :' + ' ' + item.sec_answer}
                                                                                                                        style={{color: 'black', textAlign: 'left'}}
                                                                                                                    /> 
                                                                                                            </Item>
                                                                                                            <SystemTypography 
                                                                                                                        isgutter={true}
                                                                                                                        text={'Some of the information from credentials is prohibited to preview'}
                                                                                                                        style={{color: 'black', fontSize: '13px', fontStyle: 'italic', textAlign: 'center'}}
                                                                                                                    /> 
                                                                                                        </Box>
                                                                                                       )
                                                                                                    })
                                                                                                }
                                                                                            </CardContent>
                                                                                        }
                                                                                    />
                                                                                    }
                                                                                ]
                                                                            }
                                                                        /> 

                                                                            <ApplicationCard 
                                                                                        children={
                                                                                            <CardContent>
                                                                                                <SystemTypography 
                                                                                                    isgutter={true}
                                                                                                    text={'Project Preview'}
                                                                                                    variant={'h6'}
                                                                                                    style={{textAlign: 'center'}}
                                                                                                />
                                                                                                <hr />
                                                                                                    {
                                                                                                        allFieldSelected[selectedIndex].projectFieldArray && allFieldSelected[selectedIndex].projectFieldArray.map((item) => {
                                                                                                            let newFeatures = JSON.parse(item.projectfeatures)
                                                                                                            return (
                                                                                                                <>
                                                                                                                <Item style={{marginBottom: '10px'}}>
                                                                                                                    <SystemTypography 
                                                                                                                            isgutter={true}
                                                                                                                            text={'Project Name :' + ' ' + item.projectname}
                                                                                                                            style={{color: 'black'}}
                                                                                                                        /> 
                                                                                                    </Item>
                                                                                                    <Item style={{marginBottom: '10px'}}>
                                                                                                                    <SystemTypography 
                                                                                                                            isgutter={true}
                                                                                                                            text={'Project Features :'}
                                                                                                                            style={{color: 'black'}}
                                                                                                                        /> 
                                                                                                                        <Grid direction="rows" container spacing={2}>
                                                                                                                    {
                                                                                                                        newFeatures.map((component) => {
                                                                                                                            let filteredFeatures = projectbreakdown.filter((o) => o.field_id === component.field_id)
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    {
                                                                                                                                        filteredFeatures.map((field) => {
                                                                                                                                            return (
                                                                                                                                                <Grid item xs={12} sm={4}>
                                                                                                                                                     {cloneElement(field.field)}
                                                                                                                                                </Grid>
                                                                                                                                            )
                                                                                                                                        })
                                                                                                                                    }
                                                                                                                                </>
                                                                                                                            )
                                                                                                                        })
                                                                                                                    }
                                                                                                                    </Grid>
                                                                                                    </Item>
                                                                                                                </>
                                                                                                            )
                                                                                                        })
                                                                                                    }
                                                                                            </CardContent>
                                                                                        }
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
        </motion.div>
    )
}

export default SignupField