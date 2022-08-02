import React, {createContext, cloneElement, useState} from 'react'
import Spiels from '../Spiels/Spiels'

const GlobalContext = createContext()

const Global = ({children}) => {
    const [activeSteps, setActiveSteps] = useState(0)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [signupCategory, setSignupCategory] = useState('pick')
    const [open, setOpen] = useState(false)
    
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
        const fieldSettings = {
            personalInformationObj : personalInformationObj
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
        const fieldSettings = {
            personalInformationObj : personalInformationObj
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
        const fieldSettings = {
            userLoginObj : userLoginObj
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
        const fieldSettings = {
            userLoginObj : userLoginObj
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
    }
    return (
        <GlobalContext.Provider
        value={{
            activeSteps, setActiveSteps,
            signupCategory, setSignupCategory, open, setOpen,
            allFieldSelected, setAllFieldSelected,
            selectedIndex, setSelectedIndex, HandleChangeFirstname,
            HandleChangeLastname, HandleChangeEmailLogin, HandleChangePasswordLogin
        }}
        >{children}</GlobalContext.Provider>
    )
}

export {Global, GlobalContext}