import React, {createContext, useState, useContext} from 'react'
import Spiels from '../Spiels/Spiels'
import { GlobalContext } from './GlobalContext'

const PROJECT_CONTEXT = createContext()

const ProjectDetailsContext = ({children}) => {
    const contextValues = useContext(GlobalContext)
    const { selectedIndex, allFieldSelected, setAllFieldSelected } = contextValues
    const HandleProjectName = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const projectDetailsObj = { 
            projectName : value,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : !value ? true : false,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : !value ? 'Kindly provide your project name' : '',
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
    }   
    const HandleSelectProjectCategory = (event) => {
       let value = event.target.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : value,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : !value ? true : false,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory :  !value ? 'Kindly provide your project category' : '',
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
    } 
    const HandleSelectProjectType = (event) => {
        let value = event.target.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        let projectDetailsObj
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
         if(value === 'SSP'){
            projectDetailsObj = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
                projectType : value,
                projectPricing : 60000
            }
         } else if(value === 'MSP') {
            projectDetailsObj = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
                projectType : value,
                projectPricing : 130000
            }
         } else if (value === 'LSP'){
            projectDetailsObj = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
                projectType : value,
                projectPricing : 200000
            }
         }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : !value ? true : false
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: !value ? 'Kindly provide your project type' : ''
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
    }
    const HandleSliderChange = (val) => {
        let value = val
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        let scale = {
            sm : 'SSP',
            md : 'MSP',
            lg : 'LSP'
        }
        let projectDetailsObj
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        projectDetailsObj = { 
                projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
                projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
                projectType : value <= 60000 ? "SSP" : value <= 130000 ? "MSP" : value >= 130000 ? "LSP" : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
                projectPricing : value
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
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
    }
    return (
        <PROJECT_CONTEXT.Provider
        value={{
            HandleProjectName, HandleSelectProjectCategory, HandleSelectProjectType, HandleSliderChange
        }}
        >{children}</PROJECT_CONTEXT.Provider>
    )
}

export {ProjectDetailsContext, PROJECT_CONTEXT}