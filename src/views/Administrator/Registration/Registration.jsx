import React from 'react'
import { AppbarAdministrator } from '../../../components'
import RegistrationField from './registration_field'

const AdminRegistration = () => {
    return (
        <>
            <AppbarAdministrator title={'Administrator Registration'} />
            <RegistrationField />
        </>
    )
}

export default AdminRegistration