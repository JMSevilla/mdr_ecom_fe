import React from 'react'
import { SystemTypography, SystemStepper, SystemContainer, SystemGrid, AppTextField, NextPrevious, SystemSlider, SystemSelect, SystemUserGuide, ApplicationCard } from '../../../components'
import { studentStepper, projectCategory, projectType, security_questions } from '../../../core/utils/helper'
import { Peso } from '../../../core/utils/Intl';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { CardContent } from '@mui/material';

const student_field = (props) => {
    const {activeSteps, handleNext, handleBack, setActiveSteps, 
            allFieldSelected, setAllfieldSelected, HandleChangeFirstname,
            HandleChangeLastname, HandleChangeContactNumber, HandleChangeAddress, setOpen, HandleSliderChange,
            projectDetails, setProjectDetails, handleOnDragEnd} = props
    const {fieldSettings, priceSettings} = allFieldSelected[4]

  return (
    <>
    <SystemTypography 
        isgutter={true}
        text={'Student Registration'}
        variant={'h5'}
        />
        <hr/>
    <SystemStepper 
        activeSteps={activeSteps}
        propArray={studentStepper}
    />
    {
        activeSteps == 0 ?
        <>
        <SystemContainer>
            <SystemTypography
                isgutter={true}
                text="Personal Information"
                variant={"h5"}
            />
            <hr style={{marginBottom: '20px'}}/>
            <SystemGrid
                rowSpacing={1}
                columnSpacing={{xs:1, sm:2, md:3}}
                GridItems={
                    [
                        {
                            
                            children: 1,
                            children : <AppTextField
                            value={fieldSettings.personalInfoObjSt.firstname}
                            style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                            placeholder='Enter firstname'
                            handleChange={(e) => HandleChangeFirstname(e)}
                            variant={'outlined'}
                            label={'Firstname'}

                            texthelper={fieldSettings.error_provider_messageSt.epm_firstname}
                            iserror={fieldSettings.errorProviderSt.error_firstname}
                            />
                        },
                        {
                            children: 2,
                            children : <AppTextField
                            value={fieldSettings.personalInfoObjSt.lastname}
                            style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                            placeholder='Enter lastname'
                            handleChange={(e) => HandleChangeLastname(e)}
                            variant={'outlined'}
                            label={'Lastname'}

                            texthelper={fieldSettings.error_provider_messageSt.epm_lastname}
                            iserror={fieldSettings.errorProviderSt.error_lastname}           
                             />
                        }
                    ]
                }
            />
                        <SystemGrid
                rowSpacing={1}
                columnSpacing={{xs:1, sm:2, md:3}}
                GridItems={
                    [
                        {
                            children: 1,
                            children : <AppTextField
                            value={fieldSettings.personalInfoObjSt.contactnum}
                            style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                            placeholder='Enter Contact Number'
                            handleChange={(e) => HandleChangeContactNumber(e)}
                            variant={'outlined'}
                            label={'Contact Number'}
                            
                            texthelper={fieldSettings.error_provider_messageSt.epm_contactnum}
                            iserror={fieldSettings.errorProviderSt.error_contactnum}  
                            />
                        },
                        {
                            children: 2,
                            children : <AppTextField
                            value={fieldSettings.personalInfoObjSt.address}
                            style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                            placeholder='Enter Address'
                            handleChange={(e) => HandleChangeAddress(e)}
                            variant={'outlined'}
                            label={'Address'}

                            texthelper={fieldSettings.error_provider_messageSt.epm_address}
                            iserror={fieldSettings.errorProviderSt.error_address}
                            />
                        }
                    ]
                }
            />
            <NextPrevious
                activeSteps={activeSteps}
                stepperArray={studentStepper}
                handleBack={() => setActiveSteps((activeSteps) => activeSteps - 1)}
                handleNext={() => handleNext()}
            />
        </SystemContainer>
        </> 
        : activeSteps == 1 ?
        <> 
            <SystemContainer>
                <SystemTypography 
                    isgutter={true}
                    text={"Project Detail"}
                    variant={"h5"}
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
                                    // value={fieldSettings.projectDetailsObj.projectName}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Enter Project Name'
                                    // handleChange={(e) => HandleProjectName(e)}
                                    variant={'outlined'}
                                    label={'Project Name'}
                                                                
                                    // texthelper={fieldSettings.error_provider_message.epm_projectname}
                                    // iserror={fieldSettings.errorProvider.error_projectname}
                                    />
                                },
                                {
                                    childrenId: 2,
                                    children : <SystemSelect 
                                    // value={fieldSettings.projectDetailsObj.projectCategory}
                                    selectionArray={projectCategory}
                                    selectionLabel={'Select Project Category'}
                                    selectionTitle={'Choose Project Category'}
                                    placeholder={'Choose Project Category'}
                                    style={{marginTop: '10px', marginBottom: '20px'}}
                                    // handleSelect={(e) => HandleSelectProjectCategory(e)}
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
                                    // value={fieldSettings.projectDetailsObj.projectType}
                                    selectionArray={projectType}
                                    selectionLabel={'Select Project Type'}
                                    selectionTitle={'Choose Project Type'}
                                    placeholder={'Choose Project Type'}
                                    style={{marginTop: '10px', marginBottom: '10px'}}
                                    // handleSelect={(e) => HandleSelectProjectType(e)}
                                    />
                                },
                                {
                                    childrenId: 2,
                                    children : <SystemSlider 
                                    defaultValue={
                                    fieldSettings.projectDetailsObjSt.projectPricing
                                    }
                                    title={'Project Pricing'}
                                    max={priceSettings.max}
                                    min={priceSettings.min}
                                    sliderChange={HandleSliderChange}
                                    value={
                                        fieldSettings.projectDetailsObjSt.projectPricing
                                            }
                                    intlPrice={
                                        Peso.format(
                                            fieldSettings.projectDetailsObjSt.projectPricing
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
                                                config={{removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed']}}
                                                onBlur={ ( event, editor ) => {
                                                } }
                                                onFocus={ ( event, editor ) => {
                                                } }
                                            />
            <NextPrevious
                activeSteps={activeSteps}
                stepperArray={studentStepper}
                handleBack={() => setActiveSteps((activeSteps) => activeSteps - 1)}
                handleNext={() => setActiveSteps((activeSteps) => activeSteps + 1)}
            />
            </SystemContainer>
        </> 
        : activeSteps == 2 ? 
        <>
         <SystemContainer max={'xl'} style={{marginTop: '20px'}}>
            <SystemTypography 
                isgutter={true}
                text={'Project Features'}
                variant={'h5'}
            />
        <hr style={{marginBottom: '20px'}}/>
                                
            <SystemUserGuide
                targetOne={<SystemTypography text={`Your Budget Price: ${Peso.format(fieldSettings.projectDetailsObjSt.projectPricing)} `} variant={'h6'} style={{fonstWeight:600, marginBottom: '20px'}} /> }
                targetTwo={''}
            > 
        
            </SystemUserGuide>

            <NextPrevious
                activeSteps={activeSteps}
                stepperArray={studentStepper}
                handleBack={() => setActiveSteps((activeSteps) => activeSteps - 1)}
                handleNext={() => setActiveSteps((activeSteps) => activeSteps + 1)}
            />
            </SystemContainer>
         </> 
        : activeSteps == 3 ?
        <>
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
                                                                            // value={fieldSettings.credentialsObj.email}
                                                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                            placeholder='Enter email'
                                                                            // handleChange={(e) => HandleChangeBOEmailSignup(e)}
                                                                            variant={'outlined'}
                                                                            label={'Email'}
                                                                            type={'email'}
                                                                            // texthelper={fieldSettings.error_provider_message.epm_email}
                                                                            // iserror={fieldSettings.errorProvider.error_email}
                                                                        />
                                                                        <AppTextField 
                                                                            // value={fieldSettings.credentialsObj.password}
                                                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                            placeholder='Enter password'
                                                                            // handleChange={(e) => HandleChangeBOPasswordSignup(e)}
                                                                            variant={'outlined'}
                                                                            label={'Password'}
                                                                            type={'password'}
                                                                            // texthelper={fieldSettings.error_provider_message.epm_password}
                                                                            // iserror={fieldSettings.errorProvider.error_password}
                                                                        />
                                                                        <AppTextField 
                                                                            // value={fieldSettings.credentialsObj.conpass}
                                                                            style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                            placeholder='Confirm your password'
                                                                            // handleChange={(e) => HandleChangeBOConPassSignup(e)}
                                                                            variant={'outlined'}
                                                                            label={'Confirm Password'}
                                                                            type={'password'}
                                                                            // texthelper={fieldSettings.error_provider_message.epm_conpass}
                                                                            // iserror={fieldSettings.errorProvider.error_conpass}
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
                                                                                // value={fieldSettings.credentialsObj.sec_question}
                                                                                selectionArray={security_questions}
                                                                                selectionLabel={'Select Question'}
                                                                                selectionTitle={'Choose Question'}
                                                                                placeholder={'Choose Question'}
                                                                                style={{marginTop: '10px', marginBottom: '10px'}}
                                                                                // handleSelect={(e) => HandleSelectQuestion(e)}
                                                                                />
                                                                                <AppTextField 
                                                                                // value={fieldSettings.credentialsObj.sec_answer}
                                                                                style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
                                                                                placeholder='State your answer'
                                                                                // handleChange={(e) => HandleChangeBOSecAnswer(e)}
                                                                                variant={'outlined'}
                                                                                label={'Answer'}
                                                                                // texthelper={fieldSettings.error_provider_message.epm_sec_answer}
                                                                                // iserror={fieldSettings.errorProvider.error_sec_answer}
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
                                            stepperArray={studentStepper}
                                            handleBack={() => setActiveSteps((activeSteps) => activeSteps - 1)}
                                            handleNext={() => setActiveSteps((activeSteps) => activeSteps + 1)}
                                            />
                                        </SystemContainer>
        </> 
        : <></>
    } 
    </>
  )
}

export default student_field