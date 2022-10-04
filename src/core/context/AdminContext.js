import React, {createContext, useState, useRef, useEffect} from 'react'
import Spiels from '../Spiels/Spiels'
import FormService from '../service/apiservice'
import { useHistory } from 'react-router-dom'
import { appRouter } from '../../routes/router'
import { ADMIN_REGISTER } from '../redux/reducers/Admin/admin'
import { useSelector, useDispatch } from 'react-redux'

const AdminContext = createContext()

const getSelector = (state) => ({admin_registration_onsuccess : state.admin})
const AdministratorContext = ({children}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(2)
    const [open, setOpen] = useState(false)
    const { admin_registration_onsuccess } = useSelector(getSelector)
    const baseRef = { 
        adminregRef : useRef(admin_registration_onsuccess)
    }
    const [snackbarSettings, setSnacbarSettings] = useState({
        settings : {
            open : false,
            message : '',
            severity : 'success',
            autoHideDuration : 3000
        }
    })

    useEffect(() => {
        baseRef.adminregRef.current = admin_registration_onsuccess
    }, [admin_registration_onsuccess])

    const handleAdminFirstname = event => {
        const value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        
        const adminreg = { 
            firstname : value,
            lastname : tempField.adminreg.lastname,
            email : tempField.adminreg.email,
            password : tempField.adminreg.password,
            conpass : tempField.adminreg.conpass
        }
        const errorProvider = { 
            error_firstname : !value ? true : false,
            error_lastname : tempField.errorProvider.error_lastname,
            error_email : tempField.errorProvider.error_email,
            error_password : tempField.errorProvider.error_password,
            error_conpass : tempField.errorProvider.error_conpass,
        }
        const error_provider_message = { 
            epm_firstname : !value ? 'Please provide your firstname' : '',
            epm_lastname : tempField.error_provider_message.epm_lastname,
            epm_email : tempField.error_provider_message.epm_email,
            epm_password : tempField.error_provider_message.epm_password,
            epm_conpass : tempField.error_provider_message.epm_conpass,
        }

        const fieldSettings = { 
            adminreg : adminreg,
            errorProvider : errorProvider,
            error_provider_message : error_provider_message
        }

        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const handleAdminLastname = event => {
         const value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        
        const adminreg = { 
            firstname : tempField.adminreg.firstname,
            lastname : value,
            email : tempField.adminreg.email,
            password : tempField.adminreg.password,
            conpass : tempField.adminreg.conpass
        }
        const errorProvider = { 
            error_firstname : tempField.errorProvider.error_firstname,
            error_lastname : !value ? true : false,
            error_email : tempField.errorProvider.error_email,
            error_password : tempField.errorProvider.error_password,
            error_conpass : tempField.errorProvider.error_conpass,
        }
        const error_provider_message = { 
            epm_firstname : tempField.error_provider_message.epm_firstname,
            epm_lastname : !value ? 'Please provide your lastname' : '',
            epm_email : tempField.error_provider_message.epm_email,
            epm_password : tempField.error_provider_message.epm_password,
            epm_conpass : tempField.error_provider_message.epm_conpass,
        }

        const fieldSettings = { 
            adminreg : adminreg,
            errorProvider : errorProvider,
            error_provider_message : error_provider_message
        }

        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const handleAdminEmail = event => {
        const value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        
        const adminreg = { 
            firstname : tempField.adminreg.firstname,
            lastname : tempField.adminreg.lastname,
            email : value,
            password : tempField.adminreg.password,
            conpass : tempField.adminreg.conpass
        }
        const errorProvider = { 
            error_firstname : tempField.errorProvider.error_firstname,
            error_lastname : tempField.errorProvider.error_lastname,
            error_email : !value ? true : false,
            error_password : tempField.errorProvider.error_password,
            error_conpass : tempField.errorProvider.error_conpass,
        }
        const error_provider_message = { 
            epm_firstname : tempField.error_provider_message.epm_firstname,
            epm_lastname : tempField.error_provider_message.epm_lastname,
            epm_email : !value ? 'Please provide your email' : '',
            epm_password : tempField.error_provider_message.epm_password,
            epm_conpass : tempField.error_provider_message.epm_conpass,
        }

        const fieldSettings = { 
            adminreg : adminreg,
            errorProvider : errorProvider,
            error_provider_message : error_provider_message
        }

        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const handleAdminPassword = event => {
        const value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        
        const adminreg = { 
            firstname : tempField.adminreg.firstname,
            lastname : tempField.adminreg.lastname,
            email : tempField.adminreg.email,
            password : value,
            conpass : tempField.adminreg.conpass
        }
        const errorProvider = { 
            error_firstname : tempField.errorProvider.error_firstname,
            error_lastname : tempField.errorProvider.error_lastname,
            error_email : tempField.errorProvider.error_email,
            error_password : !value ? true : false,
            error_conpass : value !== tempField.errorProvider.error_conpass ? true : false,
        }
        const error_provider_message = { 
            epm_firstname : tempField.error_provider_message.epm_firstname,
            epm_lastname : tempField.error_provider_message.epm_lastname,
            epm_email : tempField.error_provider_message.epm_email,
            epm_password : !value ? "Please provide your password" : '',
            epm_conpass : value !== tempField.error_provider_message.epm_conpass ? 'Password does not match' : '',
        }

        const fieldSettings = { 
            adminreg : adminreg,
            errorProvider : errorProvider,
            error_provider_message : error_provider_message
        }

        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const handleAdminConPassword = event => {
        const value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        
        const adminreg = { 
            firstname : tempField.adminreg.firstname,
            lastname : tempField.adminreg.lastname,
            email : tempField.adminreg.email,
            password : tempField.adminreg.password,
            conpass : value
        }
        const errorProvider = { 
            error_firstname : tempField.errorProvider.error_firstname,
            error_lastname : tempField.errorProvider.error_lastname,
            error_email : tempField.errorProvider.error_email,
            error_password :tempField.errorProvider.error_password ,
            error_conpass :!value ? true : value !== tempField.adminreg.password ? true : false,
        }
        const error_provider_message = { 
            epm_firstname : tempField.error_provider_message.epm_firstname,
            epm_lastname : tempField.error_provider_message.epm_lastname,
            epm_email : tempField.error_provider_message.epm_email,
            epm_password : tempField.error_provider_message.epm_password,
            epm_conpass : !value ? 'Kindly confirm your password' : value !== tempField.adminreg.password ? 'Password does not match' : '',
        }

        const fieldSettings = { 
            adminreg : adminreg,
            errorProvider : errorProvider,
            error_provider_message : error_provider_message
        }

        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const save_admin_account_creation = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}

        if(!tempField.adminreg.firstname || !tempField.adminreg.lastname
            || !tempField.adminreg.email || !tempField.adminreg.password
            || !tempField.adminreg.conpass){
                 setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "Empty fields. Please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            }
        else if(tempField.adminreg.password != tempField.adminreg.conpass){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "Password does not match",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
        } else {
            setOpen(!open)
            dispatch(ADMIN_REGISTER(tempField.adminreg))
            setTimeout(() => {
                const res = baseRef.adminregRef.current.admin_registration_onsuccess.message
                if(res === 'success_registration_admin'){
                    setOpen(false)
                    history.push(appRouter.Homepage.path)
                }
            },1000)
        }
    }
    const handleClose = (event, reason) => {
        if(reason === 'clickAway') {
            return;
        }
        setSnacbarSettings(prevState => ({
            ...prevState,
            ...prevState.settings.open = false
        }))
    }
    return (
        <AdminContext.Provider
        value={{
            allFieldSelected, setAllFieldSelected, selectedIndex, setSelectedIndex,
            handleAdminFirstname, handleAdminLastname, handleAdminEmail,
            handleAdminPassword, handleAdminConPassword, save_admin_account_creation,
            snackbarSettings, handleClose, open
        }}
        >{children}</AdminContext.Provider>
    )
}

export {
    AdminContext, AdministratorContext
}