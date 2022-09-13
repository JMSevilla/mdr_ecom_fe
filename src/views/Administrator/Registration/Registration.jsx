import React, {useContext} from 'react'
import { AppbarAdministrator, CustomizedSnackbars, SystemBackdrop } from '../../../components'
import RegistrationField from './registration_field'
import { AdminContext } from '../../../core/context/AdminContext'
const AdminRegistration = () => {
    const adminContextValues = useContext(AdminContext)
    const {
        selectedIndex, allFieldSelected, handleAdminFirstname,
        handleAdminLastname, handleAdminEmail, handleAdminPassword, handleAdminConPassword,
        save_admin_account_creation, snackbarSettings, handleClose, open
    } = adminContextValues
    return (
        <>
            <AppbarAdministrator title={'Administrator Registration'} />
            <RegistrationField 
            fieldSettings={allFieldSelected[selectedIndex].fieldSettings}
            handleAdminFirstname={handleAdminFirstname}
            handleAdminLastname={handleAdminLastname}
            handleAdminEmail={handleAdminEmail}
            handleAdminPassword={handleAdminPassword}
            handleAdminConPassword={handleAdminConPassword}
            save_admin_account_creation={save_admin_account_creation}
            />
            <SystemBackdrop 
                open={open}
            />
            <CustomizedSnackbars 
            open={snackbarSettings.settings.open}
            message={snackbarSettings.settings.message}
            handleClose={handleClose}
            severity={snackbarSettings.settings.severity}
            autoHideDuration={snackbarSettings.settings.autoHideDuration}
            />
        </>
    )
}

export default AdminRegistration