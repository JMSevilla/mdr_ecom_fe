import React from 'react'
import { CardContent } from '@mui/material'
import {SystemTypography, SystemContainer, ApplicationCard, AppTextField, SystemGrid, AppButton} from '../../../components'

const RegistrationField = (props) => {
    const { fieldSettings, handleAdminFirstname, handleAdminLastname, 
    handleAdminEmail, handleAdminPassword, handleAdminConPassword, save_admin_account_creation } = props

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
                                        value={fieldSettings.adminreg.firstname}
                                        style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                        placeholder='Enter firstname'
                                        handleChange={handleAdminFirstname}
                                        variant={'outlined'}
                                        label={'Firstname'}
                                        texthelper={fieldSettings.error_provider_message.epm_firstname}
                                        iserror={fieldSettings.errorProvider.error_firstname}
                                    />
                                },
                                {
                                    childrenId: 2,
                                    children : <AppTextField 
                                    value={fieldSettings.adminreg.lastname}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Enter lastname'
                                    handleChange={handleAdminLastname}
                                    variant={'outlined'}
                                    label={'Lastname'}
                                    texthelper={fieldSettings.error_provider_message.epm_lastname}
                                    iserror={fieldSettings.errorProvider.error_lastname}
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
                                        value={fieldSettings.adminreg.email}
                                        style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                        placeholder='Enter email'
                                        handleChange={handleAdminEmail}
                                        variant={'outlined'}
                                        label={'Email'}
                                        type={'email'}
                                        texthelper={fieldSettings.error_provider_message.epm_email}
                                        iserror={fieldSettings.errorProvider.error_email}
                                    />
                                },
                                {
                                    childrenId: 2,
                                    children : <AppTextField 
                                    value={fieldSettings.adminreg.password}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Enter password'
                                    handleChange={handleAdminPassword}
                                    variant={'outlined'}
                                    label={'Password'}
                                    type={'password'}
                                    texthelper={fieldSettings.error_provider_message.epm_password}
                                    iserror={fieldSettings.errorProvider.error_password}
                                />
                                },
                                {
                                    childrenId: 3,
                                    children : <AppTextField 
                                    value={fieldSettings.adminreg.conpass}
                                    style={{marginTop: '10px', marginBottom: '20px', width: '100%'}}
                                    placeholder='Confirm password'
                                    handleChange={handleAdminConPassword}
                                    variant={'outlined'}
                                    label={'Confirm Password'}
                                    type={'password'}
                                    texthelper={fieldSettings.error_provider_message.epm_conpass}
                                    iserror={fieldSettings.errorProvider.error_conpass}
                                />
                                }
                            ]
                        }
                    />
                    <AppButton 
                        buttonName={'Save'}
                        variant={'contained'}
                        size={'sm'}
                        handleClick={() => save_admin_account_creation()}
                        style={{float : 'right', marginTop: '10px', marginBottom: '10px'}}
                    />
                </CardContent>
            </ApplicationCard>
        </SystemContainer>
    )
}

export default RegistrationField