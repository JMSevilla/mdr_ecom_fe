import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Spiels from '../Spiels/Spiels'
import { validContactNumber, validName } from '../utils/helper'


const StudentContext = createContext()


 const Student = ({children}) => {

    const [activeSteps, setActiveSteps] = useState(0)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [open, setOpen] = useState(false)
    const [snackbarSettings, setSnackbarSettings] = useState({
        settings : {
            open : false,
            message: '',
            severity : 'success',
            autoHideDuration : 3000
        }
    })

    const HandleChangeFirstname = (event) => {
      let value = event.currentTarget.value
      const tempAllFieldSelected = [...allFieldSelected]
      const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
      const personalInfoObjSt = {
          firstname : value,
          lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
          contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
          address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
      }
      const errorProviderSt = { 
          error_firstname : !value ? true : !validName.test(value) ? true : false,
          error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
          error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
          error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
          error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
          error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
          error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
          error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
          error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
          error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
          error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
          error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
          error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
      }
      const projectDetailsObjSt = { 
          projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
          projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
          projectType : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
          projectPricing : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectPricing
      }
      const credentialsObjSt = {
          email : tempFieldSelected.fieldSettings.credentialsObjSt.email,
          password : tempFieldSelected.fieldSettings.credentialsObjSt.password,
          conpass : tempFieldSelected.fieldSettings.credentialsObjSt.conpass,
          sec_question : tempFieldSelected.fieldSettings.credentialsObjSt.sec_question,
          sec_answer : tempFieldSelected.fieldSettings.credentialsObjSt.sec_answer
      }
      const verificationObjSt = {
          verificationcode : tempFieldSelected.fieldSettings.verificationObjSt.verificationcode,
          vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
      }
      const error_provider_messageSt = {
          epm_firstname : !value ? 'Kindly provide your firstname' : !validName.test(value) ? 'Name must not contain any special characters' : '',
          epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
          epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
          epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
          epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
          epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
          epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
          epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
          epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
          epm_conpass : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_conpass,
          epm_sec_question : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_question,
          epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_answer,
          epm_verify : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_verify
      }
       const fieldSettings = {
          personalInfoObjSt : personalInfoObjSt,
          projectDetailsObjSt: projectDetailsObjSt,
          credentialsObjSt: credentialsObjSt,
          verificationObjSt : verificationObjSt,
          errorProviderSt : errorProviderSt,
          error_provider_messageSt: error_provider_messageSt
      }
      tempFieldSelected.fieldSettings = fieldSettings
      tempAllFieldSelected[selectedIndex] = tempFieldSelected
      setAllFieldSelected(tempAllFieldSelected)

    }
    const HandleChangeLastname = (event) => {
      let value = event.currentTarget.value
      const tempAllFieldSelected = [...allFieldSelected]
      const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
      const personalInfoObjSt = {
          firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
          lastname : value,
          contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
          address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
      }
      const errorProviderSt = { 
          error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
          error_lastname : !value ? true : !validName.test(value) ? true : false,
          error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
          error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
          error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
          error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
          error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
          error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
          error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
          error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
          error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
          error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
          error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
      }
      const projectDetailsObjSt = { 
          projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
          projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
          projectType : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
          projectPricing : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectPricing
      }
      const credentialsObjSt = {
          email : tempFieldSelected.fieldSettings.credentialsObjSt.email,
          password : tempFieldSelected.fieldSettings.credentialsObjSt.password,
          conpass : tempFieldSelected.fieldSettings.credentialsObjSt.conpass,
          sec_question : tempFieldSelected.fieldSettings.credentialsObjSt.sec_question,
          sec_answer : tempFieldSelected.fieldSettings.credentialsObjSt.sec_answer
      }
      const verificationObjSt = {
          verificationcode : tempFieldSelected.fieldSettings.verificationObjSt.verificationcode,
          vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
      }
      const error_provider_messageSt = {
          epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
          epm_lastname : !value ? 'Kindly provide your lastname' : !validName.test(value) ? 'Name must not contain any special characters' : '',
          epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
          epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
          epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
          epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
          epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
          epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
          epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
          epm_conpass : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_conpass,
          epm_sec_question : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_question,
          epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_answer,
          epm_verify : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_verify
      }
       const fieldSettings = {
          personalInfoObjSt : personalInfoObjSt,
          projectDetailsObjSt: projectDetailsObjSt,
          credentialsObjSt: credentialsObjSt,
          verificationObjSt : verificationObjSt,
          errorProviderSt : errorProviderSt,
          error_provider_messageSt: error_provider_messageSt
      }
      tempFieldSelected.fieldSettings = fieldSettings
      tempAllFieldSelected[selectedIndex] = tempFieldSelected
      setAllFieldSelected(tempAllFieldSelected)

    }

    const HandleChangeContactNumber = (event) => {
      let value = event.currentTarget.value
      const tempAllFieldSelected = [...allFieldSelected]
      const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
      const personalInfoObjSt = {
          firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
          lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
          contactnum : value,
          address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
      }
      const errorProviderSt = { 
          error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
          error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
          error_contactnum : !value ? true : !validContactNumber.test(value) ? true : false,
          error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
          error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
          error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
          error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
          error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
          error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
          error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
          error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
          error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
          error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
      }
      const projectDetailsObjSt = { 
          projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
          projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
          projectType : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
          projectPricing : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectPricing
      }
      const credentialsObjSt = {
          email : tempFieldSelected.fieldSettings.credentialsObjSt.email,
          password : tempFieldSelected.fieldSettings.credentialsObjSt.password,
          conpass : tempFieldSelected.fieldSettings.credentialsObjSt.conpass,
          sec_question : tempFieldSelected.fieldSettings.credentialsObjSt.sec_question,
          sec_answer : tempFieldSelected.fieldSettings.credentialsObjSt.sec_answer
      }
      const verificationObjSt = {
          verificationcode : tempFieldSelected.fieldSettings.verificationObjSt.verificationcode,
          vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
      }
      const error_provider_messageSt = {
          epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
          epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
          epm_contactnum : !value ? 'Kindly provide your Contact Number' : !validContactNumber.test(value) ? 'This is not a valid contact number' : '',
          epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
          epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
          epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
          epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
          epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
          epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
          epm_conpass : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_conpass,
          epm_sec_question : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_question,
          epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_answer,
          epm_verify : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_verify
      }
       const fieldSettings = {
          personalInfoObjSt : personalInfoObjSt,
          projectDetailsObjSt: projectDetailsObjSt,
          credentialsObjSt: credentialsObjSt,
          verificationObjSt : verificationObjSt,
          errorProviderSt : errorProviderSt,
          error_provider_messageSt: error_provider_messageSt
      }
      tempFieldSelected.fieldSettings = fieldSettings
      tempAllFieldSelected[selectedIndex] = tempFieldSelected
      setAllFieldSelected(tempAllFieldSelected)

    }

    const HandleChangeAddress = (event) => {
      let value = event.currentTarget.value
      const tempAllFieldSelected = [...allFieldSelected]
      const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
      const personalInfoObjSt = {
          firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
          lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
          contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
          address : value
      }
      const errorProviderSt = { 
          error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
          error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
          error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
          error_address : !value ? true : false,
          error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
          error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
          error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
          error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
          error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
          error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
          error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
          error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
          error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
      }
      const projectDetailsObjSt = { 
          projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
          projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
          projectType : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
          projectPricing : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectPricing
      }
      const credentialsObjSt = {
          email : tempFieldSelected.fieldSettings.credentialsObjSt.email,
          password : tempFieldSelected.fieldSettings.credentialsObjSt.password,
          conpass : tempFieldSelected.fieldSettings.credentialsObjSt.conpass,
          sec_question : tempFieldSelected.fieldSettings.credentialsObjSt.sec_question,
          sec_answer : tempFieldSelected.fieldSettings.credentialsObjSt.sec_answer
      }
      const verificationObjSt = {
          verificationcode : tempFieldSelected.fieldSettings.verificationObjSt.verificationcode,
          vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
      }
      const error_provider_messageSt = {
          epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
          epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
          epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
          epm_address : !value ? 'Kindly provide your address' : '',
          epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
          epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
          epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
          epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
          epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
          epm_conpass : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_conpass,
          epm_sec_question : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_question,
          epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_answer,
          epm_verify : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_verify
      }
       const fieldSettings = {
          personalInfoObjSt : personalInfoObjSt,
          projectDetailsObjSt: projectDetailsObjSt,
          credentialsObjSt: credentialsObjSt,
          verificationObjSt : verificationObjSt,
          errorProviderSt : errorProviderSt,
          error_provider_messageSt: error_provider_messageSt
      }
      tempFieldSelected.fieldSettings = fieldSettings
      tempAllFieldSelected[selectedIndex] = tempFieldSelected
      setAllFieldSelected(tempAllFieldSelected)

    }

    const handleNext = () => {
        // const tempAllFieldSelected = [...allFieldSelected]
        // const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        // const tempField = {...tempFieldSelected.fieldSettings}

        // if(activeSteps === 0){
        //     if(tempField.personalInfoObjSt.firstname == '' || tempField.personalInfoObjSt.lastname == ''
        //     || tempField.personalInfoObjSt.contactnum == '' || tempField.personalInfoObjSt.address == '') {
        //         setSnackbarSettings(prevState => ({
        //             ...prevState.settings.open = true,
        //             ...prevState.settings.message = "There's an empty field, please try again",
        //             ...prevState.settings.severity = "error",
        //             ...prevState.settings.autoHideDuration = 5000,
        //         }))
        //         setOpen(false)
        //     } else if(!validName.test(tempField.personalInfoObjSt.firstname) || !validName.test(tempField.personalInfoObjSt.lastname)
        //         || !validContactNumber.test(tempField.personalInfoObjSt.contactnum)) {
        //             setSnackbarSettings(prevState => ({
        //                 ...prevState.settings.open = true,
        //                 ...prevState.settings.message = "Kindly check your inputs before proceeding",
        //                 ...prevState.settings.severity = "error",
        //                 ...prevState.settings.autoHideDuration = 5000
        //             }))
        //             setOpen(false)
        //     } else {
                setActiveSteps((activeSteps) => activeSteps + 1)
            }
        // }
    // }

    // const handleClose = (event, reason) => {
    //     if(reason === 'clickAway') {
    //         return;
    //     }
    //     setSnackbarSettings(prevState => ({
    //         ...prevState,
    //         ...prevState.settings.open = false,
    //     }))
    // }

  return (
    <>
        <StudentContext.Provider
        value={{
            activeSteps, setActiveSteps, handleNext, HandleChangeFirstname,
            selectedIndex, setSelectedIndex,  open, setOpen, allFieldSelected, 
            setAllFieldSelected, HandleChangeLastname, HandleChangeContactNumber,
            HandleChangeAddress, snackbarSettings, setSnackbarSettings,
        }}
        >{children}</StudentContext.Provider>
    </>
  )
}
export {Student, StudentContext}