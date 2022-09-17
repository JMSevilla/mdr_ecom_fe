import React, {createContext, useState, useContext} from 'react'
import Spiels from '../Spiels/Spiels'
import { StudentContext } from './StudentContext'

const PROJECT_CONTEXT = createContext()

const StudentProjectContext = ({children}) => {
    const contextValues = useContext(StudentContext)
    const { selectedIndex, allFieldSelected, setAllFieldSelected } = contextValues
    const HandleProjectName = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const projectDetailsObjSt = { 
            projectName : value,
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
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname : !value ? true : false,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
        }
        const error_provider_messageSt = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : !value ? 'Kindly provide your project name' : '',
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
    const HandleSelectProjectCategory = (event) => {
       let value = event.target.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const projectDetailsObjSt = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
            projectCategory : value,
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
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
            error_projectCategory : !value ? true : false,
            error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
        }
        const error_provider_messageSt = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory :  !value ? 'Kindly provide your project category' : '',
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
    const HandleSelectProjectType = (event) => {
        let value = event.target.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        let projectDetailsObjSt
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
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
         if(value === 'SSP'){
            projectDetailsObjSt = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
                projectType : value,
                projectPricing : 60000
            }
         } else if(value === 'MSP') {
            projectDetailsObjSt = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
                projectType : value,
                projectPricing : 130000
            }
         } else if (value === 'LSP'){
            projectDetailsObjSt = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
                projectType : value,
                projectPricing : 200000
            }
         }
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
            error_projectType : !value ? true : false,
            error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
        }
        const error_provider_messageSt = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
            epm_projecttype: !value ? 'Kindly provide your project type' : '',
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
    const HandleSliderChange = (val) => {
        let value = val
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        let projectDetailsObjSt
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        projectDetailsObjSt = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
                projectType : value <= 60000 ? "SSP" : value >= 90000 && value <= 100000 ? "MSP" : value > 130000 ? "LSP" : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
                projectPricing : value
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
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProviderSt.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_verify
        }
        const error_provider_messageSt = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
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
  return (
    <PROJECT_CONTEXT.Provider
    value={{
        HandleProjectName, HandleSelectProjectCategory, HandleSelectProjectType, HandleSliderChange
    }}
    >{children}</PROJECT_CONTEXT.Provider>
  )
}

export {StudentProjectContext, PROJECT_CONTEXT}