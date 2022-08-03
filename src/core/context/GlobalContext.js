import React, {createContext, cloneElement, useState, useCallback} from 'react'
import Spiels from '../Spiels/Spiels'

const GlobalContext = createContext()

const Global = ({children}) => {
    const [activeSteps, setActiveSteps] = useState(1)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [signupCategory, setSignupCategory] = useState('pick')
    const [open, setOpen] = useState(false)
    const [snackbarSettings, setSnacbarSettings] = useState({
        settings : {
            open : false,
            message : '',
            severity : 'success',
            autoHideDuration : 3000
        }
    })

    
    const HandleChangeFirstname = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : value,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : !value ? true : false,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const error_provider_message = {
            epm_firstname : !value ? 'Kindly provide your firstname' : '',
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
    }
    const HandleChangeLastname = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : value,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : !value ? true : false,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : !value ? 'Kindly provide your lastname' : '',
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
    }
    const HandleChangeContactNumber = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : value,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : !value ? true : false,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : !value ? 'Kindly provide your contact number' : '',
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype
        }
        const fieldSettings = {
             personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
    }
    const HandleChangeAddress = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : value
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : !value ? true : false,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : !value ? 'Kindly provide your address' : '',
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
    }
    const HandleChangeEmailLogin = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const userLoginObj = {
            email : value,
            password : tempFieldSelected.fieldSettings.userLoginObj.password,
        }
        const errorProvider = { 
            error_email : !value ? true : false,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
        }
        const error_provider_message = {
            epm_email : !value ? '*Please enter your email' : '',
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
        }
        const fieldSettings = {
            userLoginObj : userLoginObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
    }
    const HandleChangePasswordLogin = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const userLoginObj = {
            email : tempFieldSelected.fieldSettings.userLoginObj.email,
            password : value,
        }
        const errorProvider = { 
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : !value ? true : false,
        }
        const error_provider_message = {
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_password : !value ? '*Please enter your password' : '',
        }
        const fieldSettings = {
            userLoginObj : userLoginObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
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
    const handleNext = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}

        const checkErrors = Object.values(
            tempFieldSelected.fieldSettings.errorProvider
        ).some(val => val === true)

        const personalCheckInfo = Object.values(
            tempFieldSelected.fieldSettings.personalInformationObj
        ).some(val => val === '')
        
        if(checkErrors || personalCheckInfo){
            
            setSnacbarSettings(prevState => ({
                ...prevState,
                ...prevState.settings.open = true,
                ...prevState.settings.message = "There's an empty field, please try again",
                ...prevState.settings.severity = "error",
                ...prevState.settings.autoHideDuration = 5000
            }))
            return;
        } else {
            setActiveSteps((activeSteps) => activeSteps + 1)
        }
    }
    return (
        <GlobalContext.Provider
        value={{
            activeSteps, setActiveSteps,
            signupCategory, setSignupCategory, open, setOpen,
            allFieldSelected, setAllFieldSelected,
            selectedIndex, setSelectedIndex, HandleChangeFirstname,
            HandleChangeLastname,HandleChangeAddress, HandleChangeContactNumber,
            HandleChangeEmailLogin, HandleChangePasswordLogin, handleNext,
            snackbarSettings, handleClose
        }}
        >{children}</GlobalContext.Provider>
    )
}

export {Global, GlobalContext}