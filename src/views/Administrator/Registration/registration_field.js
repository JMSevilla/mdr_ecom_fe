import React from 'react'
import { CardContent } from '@mui/material'
import {SystemTypography, SystemContainer, ApplicationCard, AppTextField, SystemGrid} from '../../../components'

const RegistrationField = (props) => {
    const { } = props

    return (
        <SystemContainer style={{marginTop: '100px'}}>
            <ApplicationCard style={{
                marginBottom: '20px'
            }}>
                <CardContent>
                    <SystemTypography 
                    text={'Administrator Automatic Scanner | Account Creation'}
                    isgutter={false}
                    variant={'h6'}
                    />
                    <SystemGrid 
                        rowSpacing={1}
                        style={{marginTop: '50px'}}
                        columnSpacing={{xs: 1, sm: 2, md: 3}}
                        GridItems={
                            [
                                {
                                    childrenId: 1,
                                    children : <AppTextField 
                                        // value={fieldSettings.personalInformationObj.firstname}
                                        style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                        placeholder='Enter firstname'
                                        // handleChange={(e) => HandleChangeFirstname(e)}
                                        variant={'outlined'}
                                        label={'Firstname'}
                                        
                                        // texthelper={fieldSettings.error_provider_message.epm_firstname}
                                        // iserror={fieldSettings.errorProvider.error_firstname}
                                    />
                                },
                                {
                                    childrenId: 2,
                                    children : <AppTextField 
                                    // value={fieldSettings.personalInformationObj.firstname}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Enter lastname'
                                    // handleChange={(e) => HandleChangeFirstname(e)}
                                    variant={'outlined'}
                                    label={'Lastname'}
                                    
                                    // texthelper={fieldSettings.error_provider_message.epm_firstname}
                                    // iserror={fieldSettings.errorProvider.error_firstname}
                                />
                                }
                            ]
                        }
                    />
                    <SystemTypography 
                    text={'Credentials Information'}
                    isgutter={false}
                    variant={'h6'}
                    />
                    <hr />
                    <SystemGrid 
                        rowSpacing={1}
                        style={{marginTop: '50px'}}
                        columnSpacing={{xs: 1, sm: 2, md: 3}}
                        GridItems={
                            [
                                {
                                    childrenId: 1,
                                    children : <AppTextField 
                                        // value={fieldSettings.personalInformationObj.firstname}
                                        style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                        placeholder='Enter email'
                                        // handleChange={(e) => HandleChangeFirstname(e)}
                                        variant={'outlined'}
                                        label={'Email'}
                                        type={'email'}
                                        // texthelper={fieldSettings.error_provider_message.epm_firstname}
                                        // iserror={fieldSettings.errorProvider.error_firstname}
                                    />
                                },
                                {
                                    childrenId: 2,
                                    children : <AppTextField 
                                    // value={fieldSettings.personalInformationObj.firstname}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Enter password'
                                    // handleChange={(e) => HandleChangeFirstname(e)}
                                    variant={'outlined'}
                                    label={'Password'}
                                    type={'password'}
                                    // texthelper={fieldSettings.error_provider_message.epm_firstname}
                                    // iserror={fieldSettings.errorProvider.error_firstname}
                                />
                                },
                                {
                                    childrenId: 3,
                                    children : <AppTextField 
                                    // value={fieldSettings.personalInformationObj.firstname}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Confirm password'
                                    // handleChange={(e) => HandleChangeFirstname(e)}
                                    variant={'outlined'}
                                    label={'Confirm Password'}
                                    type={'password'}
                                    // texthelper={fieldSettings.error_provider_message.epm_firstname}
                                    // iserror={fieldSettings.errorProvider.error_firstname}
                                />
                                }
                            ]
                        }
                    />
                </CardContent>
            </ApplicationCard>
        </SystemContainer>
    )
}

export default RegistrationField