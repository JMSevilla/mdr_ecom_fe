import React, {createContext, useState, useCallback, useEffect, useRef} from 'react'
import Spiels from '../Spiels/Spiels'
import { projectbreakdown } from '../utils/dumpfeatures'
import { validName, validContactNumber, validEmailAddress } from '../utils/helper'
import FormService from '../service/apiservice'
import { MdOutlineAutoFixNormal } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { appRouter } from '../../routes/router'
import routerSpiels from '../Spiels/routerSpiels'
import { localstoragehelper } from '../utils/storage'


//initialize dispatch


import { useSelector, useDispatch } from 'react-redux'
import { ScannedToken, loginProcess, scanProcess } from '../redux/slice'

const GlobalContext = createContext()
const getSelectors = (state) => ({token_message : state.token, logon_message: state.login, check_admin_message: state.admin})
const Global = ({children}) => {
    const [settings, setSettings] = useState(routerSpiels.router)
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch()
    const {token_message, logon_message, check_admin_message} = useSelector(getSelectors)
    const baseRef = {
        tokenRef : useRef(token_message), loginRef : useRef(logon_message),
        adminScanRef : useRef(check_admin_message)
    }
    // Timer for resend button
    const [timer, setTimer] = useState(15);    
    const [startTimer, setStartTimer] = useState(false);
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
    useEffect(() => {
        if(startTimer) {
            timer > 0 && setTimeout(timeOutCallback, 1000);
        }
        
    }, [startTimer, timer, timeOutCallback]);

    useEffect(() => {
        baseRef.tokenRef.current = token_message
        baseRef.loginRef.current = logon_message
        baseRef.adminScanRef.current = check_admin_message
    }, [token_message, logon_message, check_admin_message])

    const resetTimer = () => {
        setStartTimer(true);
        setTimer(15);
    };
    const history = useHistory();
    const navigateBusinessPlatform = () => {
        history.push(appRouter.Shop.path);
    }

    const [activeSteps, setActiveSteps] = useState(0)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [signupCategory, setSignupCategory] = useState('pick')
    const [projectDetails, setProjectDetails] = useState('')
    const [destinationArray, setDestinationArray] = useState([])
    const [features, setFeatures] = useState([])
    const [featureData, setFeatureData] = useState([])
    const [verification, setVerification] = useState({
        vrfyObj : {
            code_write : '',
            error_vrfy : false,
            erro_msg : ''
        }
    })
    const [open, setOpen] = useState(false)
    const [snackbarSettings, setSnacbarSettings] = useState({
        settings : {
            open : {
                homepage : false,
                signup : false,
                contactUs: false,
            },
            message : '',
            severity : 'success',
            autoHideDuration : 3000
        }
    })
    useEffect(() => {loadFormFeature()},[destinationArray])
    const loadFormFeature = () => {
        const finalData = destinationArray.map(item => {
            return {
                id: item.field_id,
                featureName: item.field_name,
                featureType: item.field_type
            }
        })
        setFeatureData(finalData)
    }
    const HandleVerification = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : !value ? true : false
        }
        const verificationObj = {
            verificationcode : value,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : !value ? 'Kindly provide your verification code' : ''
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const handlePrevious = () => {
        if(activeSteps === 2) {
            if(destinationArray.length > 0) {
                const confirmation = window.confirm("Changes has been made, are you sure you want to back ?")
                if(confirmation) {
                        setFeatures([])
                        setDestinationArray([])
                        setActiveSteps((activeSteps) => activeSteps - 1)
                }
            } else {
                setFeatures([])
                setActiveSteps((activeSteps) => activeSteps - 1)
            }
        } else {
            setActiveSteps((activeSteps) => activeSteps - 1)
        }
    }

    
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
            error_firstname : !value ? true : !validName.test(value) ? true : false,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const error_provider_message = {
            epm_firstname : !value ? 'Kindly provide your firstname' : !validName.test(value) ? 'Name must not contain any special characters' : '',
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
         const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
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
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : !value ? true :!validName.test(value) ? true : false,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : !value ? 'Kindly provide your lastname' : !validName.test(value) ? 'Name must not contain any special characters' :  '',
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
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
            error_contactnum : !value ? true : !validContactNumber.test(value) ? true : false,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : !value ? 'Kindly provide your contact number' : !validContactNumber.test(value) ? 'This is not a valid contact number' : '',
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
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
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : !value ? true : false,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : !value ? 'Kindly provide your address' : '',
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    
    const HandleChangeEmailLogin = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const userLoginObj = {
            email : value,
            password : tempFieldSelected.fieldSettings.userLoginObj.password,
            loginAs : tempFieldSelected.fieldSettings.userLoginObj.loginAs,
        }
        const errorProvider = { 
            error_email : !value ? true : !validEmailAddress.test(value) ? true : false,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_loginAs : tempFieldSelected.fieldSettings.errorProvider.error_loginAs,
        }
        const error_provider_message = {
            epm_email : !value ? '*Please enter your email' : !validEmailAddress.test(value) ? 'This is not a valid email address' : '',
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_loginAs : tempFieldSelected.fieldSettings.error_provider_message.epm_loginAs,
        }
        const fieldSettings = {
            userLoginObj : userLoginObj,
            errorProvider: errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    } 

    const HandleChangePasswordLogin = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const userLoginObj = {
            email : tempFieldSelected.fieldSettings.userLoginObj.email,
            password : value,
            loginAs : tempFieldSelected.fieldSettings.userLoginObj.loginAs,
        }
        const errorProvider = { 
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : !value ? true : false,
            error_loginAs : tempFieldSelected.fieldSettings.errorProvider.error_loginAs,
        }
        const error_provider_message = {
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : !value ? '*Please enter your password' : '',
            epm_loginAs : tempFieldSelected.fieldSettings.error_provider_message.epm_loginAs,
        }
        const fieldSettings = {
            userLoginObj : userLoginObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    const HandleSelectLoginAs = (event) => {
        let value = event.target.value
         const tempAllFieldSelected = [...allFieldSelected]
         const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
         const userLoginObj = {
            email : tempFieldSelected.fieldSettings.userLoginObj.email,
            password : tempFieldSelected.fieldSettings.userLoginObj.password,
            loginAs : value,
         }
         const errorProvider = { 
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_loginAs : tempFieldSelected.fieldSettings.errorProvider.error_loginAs,
         }
         const error_provider_message = {
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_loginAs : !value ? '*Please select user type' : '',
         }
         const fieldSettings = {
            userLoginObj : userLoginObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
     } 
    const handleSignIn = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        if(!tempField.userLoginObj.email || !tempField.userLoginObj.password){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.homepage = true,
                    ...prevState.settings.message = "Empty fields. Please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            } else if(!validEmailAddress.test(tempField.userLoginObj.email)){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.homepage = true,
                    ...prevState.settings.message = "Please check your inputs. ",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            } else {
                setOpen(true)
                dispatch(loginProcess(tempField.userLoginObj))
                setTimeout(() => {
                    const reps = baseRef.loginRef.current.logon_message
                    if(reps.message === 'success_login') {
                        const fetchedTokenId = reps.response_data[5];
                            const finalData = reps.response_data.map((item) => {
                                return {
                                    data: item
                                }
                        })
                        if(reps.response_data[3] === 'success_admin_platform') { // new code to identify the user type
                            setSnacbarSettings(prevState => ({
                                ...prevState,
                                ...prevState.settings.open.homepage = true,
                                ...prevState.settings.message = "Login as Administrator Success",
                                ...prevState.settings.severity = "success",
                                ...prevState.settings.autoHideDuration = 5000
                            }))
                                setTimeout(() => {
                                    setOpen(false);
                                    //history push to admin dashboard
                                    alert("Navigate to admin dashboard") // change this to history push
                                }, 2000)
                        } else if(reps.response_data[3] === 'success_business_platform') {
                            setSnacbarSettings(prevState => ({
                                ...prevState,
                                ...prevState.settings.open.homepage = true,
                                ...prevState.settings.message = "Login Success",
                                ...prevState.settings.severity = "success",
                                ...prevState.settings.autoHideDuration = 5000
                            }))
                            setTimeout(() => {
                                    setOpen(false);
                                    navigateBusinessPlatform()
                                }, 2000)
                        }
                        setUserData(finalData)
                        localstoragehelper.store('key_identifier', fetchedTokenId)
                    } else if (reps.message === 'invalid') {
                             setOpen(false);
                            setSnacbarSettings(prevState => ({
                                ...prevState,
                                ...prevState.settings.open.homepage = true,
                                ...prevState.settings.message = "Invalid",
                                ...prevState.settings.severity = "error",
                                ...prevState.settings.autoHideDuration = 5000
                            }))
                    } else {
                          setOpen(false);
                            setSnacbarSettings(prevState => ({
                                ...prevState,
                                ...prevState.settings.open.homepage = true,
                                ...prevState.settings.message = "Email or Password does not exist",
                                ...prevState.settings.severity = "error",
                                ...prevState.settings.autoHideDuration = 5000
                            }))
                    }
                    
                }, 1000)
            }
    }

    // CONTACT US FORM //
    const handleContactUsSubmit = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        if(tempField.contactUsFormObj.fullname == ''
             || tempField.contactUsFormObj.email == '' ||
             tempField.contactUsFormObj.subject == ''
             || tempField.contactUsFormObj.message == ''){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.contactUs = true,
                    ...prevState.settings.message = "There's an empty field, please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
                return;
            } else if (!validName.test(tempField.contactUsFormObj.fullname)){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.contactUs = true,
                    ...prevState.settings.message = "Name must not contain any special characters",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
                return;
            } else if (!validEmailAddress.test(tempField.contactUsFormObj.email)){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.contactUs = true,
                    ...prevState.settings.message = "Please provide a valid email address",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
                return;
            } else {
                setOpen(true)
                FormService.SEND_EMAIL_contactUs(tempField.contactUsFormObj)
                .then(reps => {
                    const { data } = reps
                    if(data.message == "success_sent_message"){
                        FormService.SEND_MESSAGE_ContactUs(tempField.contactUsFormObj)
                        .then(reps => {
                            if(reps.data.message == ''){
                                setTimeout(() => {
                                    setSnacbarSettings(prevState => ({
                                        ...prevState,
                                        ...prevState.settings.open.contactUs = true,
                                        ...prevState.settings.message = "Email sent successfully",
                                        ...prevState.settings.severity = "success",
                                        ...prevState.settings.autoHideDuration = 5000
                                    }))
                                    handleResetContactUsFields();
                                    setOpen(false)
                                }, 2000)
                            }
                        })
                        
                    } else {
                        setTimeout(() => {
                            setSnacbarSettings(prevState => ({
                                ...prevState,
                                ...prevState.settings.open.contactUs = true,
                                ...prevState.settings.message = "Error sending email. pls try again later",
                                ...prevState.settings.severity = "error",
                                ...prevState.settings.autoHideDuration = 5000
                            }))
                            setOpen(false)
                        }, 2000)
                    }
                })
                
            }
    }

    const handleChangeFullname = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const contactUsFormObj = {
            fullname : value,
            email : tempFieldSelected.fieldSettings.contactUsFormObj.email,
            subject : tempFieldSelected.fieldSettings.contactUsFormObj.subject,
            message : tempFieldSelected.fieldSettings.contactUsFormObj.message,
        }
        const errorProvider = { 
            error_fullname : !value ? true : !validName.test(value) ? true : false,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_subject : tempFieldSelected.fieldSettings.errorProvider.error_subject,
            error_message : tempFieldSelected.fieldSettings.errorProvider.error_message,
        }
        const error_provider_message = {
            epm_fullname : !value ? 'Kindly provide your fullname' : !validName.test(value) ? 'Name must not contain any special characters' : '',
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_subject : tempFieldSelected.fieldSettings.error_provider_message.epm_subject,
            epm_message : tempFieldSelected.fieldSettings.error_provider_message.epm_message,
        }
        const fieldSettings = {
            contactUsFormObj : contactUsFormObj,
            errorProvider: errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    } 

    const handleChangeContactUsEmail = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const contactUsFormObj = {
            fullname : tempFieldSelected.fieldSettings.contactUsFormObj.fullname,
            email : value,
            subject : tempFieldSelected.fieldSettings.contactUsFormObj.subject,
            message : tempFieldSelected.fieldSettings.contactUsFormObj.message,
        }
        const errorProvider = { 
            error_fullname : tempFieldSelected.fieldSettings.errorProvider.error_fullname,
            error_email : !value ? true : !validEmailAddress.test(value) ? true : false,
            error_subject : tempFieldSelected.fieldSettings.errorProvider.error_subject,
            error_message : tempFieldSelected.fieldSettings.errorProvider.error_message,
        }
        const error_provider_message = {
            epm_fullname : tempFieldSelected.fieldSettings.error_provider_message.epm_fullname,
            epm_email : !value ? '*Kindly provide your email address' : !validEmailAddress.test(value) ? 'This is not a valid email address' : '',
            epm_subject : tempFieldSelected.fieldSettings.error_provider_message.epm_subject,
            epm_message : tempFieldSelected.fieldSettings.error_provider_message.epm_message,
        }
        const fieldSettings = {
            contactUsFormObj : contactUsFormObj,
            errorProvider: errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }

    const handleChangeSubject = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const contactUsFormObj = {
            fullname : tempFieldSelected.fieldSettings.contactUsFormObj.fullname,
            email : tempFieldSelected.fieldSettings.contactUsFormObj.email,
            subject : value,
            message : tempFieldSelected.fieldSettings.contactUsFormObj.message,
        }
        const errorProvider = { 
            error_fullname : tempFieldSelected.fieldSettings.errorProvider.error_fullname,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_subject : !value ? true : false,
            error_message : tempFieldSelected.fieldSettings.errorProvider.error_message,
        }
        const error_provider_message = {
            epm_fullname : tempFieldSelected.fieldSettings.error_provider_message.epm_fullname,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_subject : !value ? 'Please provide your subject' : '',
            epm_message : tempFieldSelected.fieldSettings.error_provider_message.epm_message,
        }
        const fieldSettings = {
            contactUsFormObj : contactUsFormObj,
            errorProvider: errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }

    const handleChangeMessage = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const contactUsFormObj = {
            fullname : tempFieldSelected.fieldSettings.contactUsFormObj.fullname,
            email : tempFieldSelected.fieldSettings.contactUsFormObj.email,
            subject : tempFieldSelected.fieldSettings.contactUsFormObj.subject,
            message : value,
        }
        const errorProvider = { 
            error_fullname : tempFieldSelected.fieldSettings.errorProvider.error_fullname,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_subject : tempFieldSelected.fieldSettings.errorProvider.error_subject,
            error_message : !value ? true : false,
        }
        const error_provider_message = {
            epm_fullname : tempFieldSelected.fieldSettings.error_provider_message.epm_fullname,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_subject : tempFieldSelected.fieldSettings.error_provider_message.epm_subject,
            epm_message : !value ? 'Kindly provide your message' : '',
        }
        const fieldSettings = {
            contactUsFormObj : contactUsFormObj,
            errorProvider: errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }

    const handleClose = (event, reason) => {
        if(reason === 'clickAway') {
            return;
        }
        setSnacbarSettings(prevState => ({
            ...prevState,
            ...prevState.settings.open.signup = false,
            ...prevState.settings.open.homepage = false,
            ...prevState.settings.open.contactUs = false
        }))
    }
    const create_uuid = () =>{
        var dt = new Date().getTime()
         var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
    const handleNext = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        const fieldVerified = {
            email : tempField.credentialsObj.email,
            code : create_uuid()
        }
        const filteredcompare = {
            email : tempField.credentialsObj.email,
            code : tempField.verificationObj.verificationcode
        }
        if(activeSteps === 0) {
             if(tempField.personalInformationObj.firstname == ''
             || tempField.personalInformationObj.lastname == '' ||
             tempField.personalInformationObj.contactnum == ''
             || tempField.personalInformationObj.address == ''){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "There's an empty field, please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
                return;
            } else if (!validName.test(tempField.personalInformationObj.firstname) || 
            !validName.test(tempField.personalInformationObj.lastname) || !validContactNumber.test(tempField.personalInformationObj.contactnum)){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "Kindly check your inputs before proceeding",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
                return;
            }else {
setActiveSteps((activeSteps) => activeSteps + 1)
            }
        } 
        else if (activeSteps === 1) {
               if(tempField.projectDetailsObj.projectName == '' || 
                    tempField.projectDetailsObj.projectCategory == ''
                    || tempField.projectDetailsObj.projectType == '') {
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "There's an empty field, please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            } else { 
                const sys = [...projectbreakdown]
                const filtered = sys.filter((item) => item.field_type === tempField.projectDetailsObj.projectType)
                const field_filtered = filtered.filter((val) => {
                    return val.joinedSys.find(item => item == tempField.projectDetailsObj.projectCategory)
                })
                setFeatures(field_filtered)
                setActiveSteps((activeSteps) => activeSteps + 1)
            } 
            
        } 
        else if(activeSteps === 2) {
            if(destinationArray.length > 0) {
                setActiveSteps((activeSteps) => activeSteps + 1)
            } else {
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "Kindly select system features",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            }
        } else if(activeSteps === 3){
            if(!tempField.credentialsObj.email || !tempField.credentialsObj.password
                || !tempField.credentialsObj.conpass || !tempField.credentialsObj.sec_question
                || !tempField.credentialsObj.sec_answer){
                    setSnacbarSettings(prevState => ({
                        ...prevState,
                        ...prevState.settings.open.signup = true,
                        ...prevState.settings.message = "There's an empty field, please try again",
                        ...prevState.settings.severity = "error",
                        ...prevState.settings.autoHideDuration = 5000
                    }))
                } else if (tempField.credentialsObj.password !== tempField.credentialsObj.conpass) {
                    setSnacbarSettings(prevState => ({
                        ...prevState,
                        ...prevState.settings.open.signup = true,
                        ...prevState.settings.message = "Password mismatch please try again",
                        ...prevState.settings.severity = "error",
                        ...prevState.settings.autoHideDuration = 5000
                    }))
                } else if (!validEmailAddress.test(tempField.credentialsObj.email)) {
                    setSnacbarSettings(prevState => ({
                        ...prevState,
                        ...prevState.settings.open.signup = true,
                        ...prevState.settings.message = "Invalid email please try again",
                        ...prevState.settings.severity = "error",
                        ...prevState.settings.autoHideDuration = 5000
                    }))
                } else { 
                    //function verify existing sent code and email
                    //else new entry of verification code
                    setOpen(true)
                    FormService.BUSINESS_CONFIG_checkEmail(tempField.credentialsObj.email)
                    .then(repository => {
                        if(repository.data.message === 'not_exist'){
                            FormService.BUSINESS_check_email_verification(tempField.credentialsObj.email)
                        .then(reps => {
                            if(reps.data.message == 'exceed_limit'){
                                setSnacbarSettings(prevState => ({
                                    ...prevState,
                                    ...prevState.settings.open.signup = true,
                                    ...prevState.settings.message = "You've already exceed the limit of resend email",
                                    ...prevState.settings.severity = "warning",
                                    ...prevState.settings.autoHideDuration = 5000
                                }))
                                setOpen(false)
                                setActiveSteps((activeSteps) => activeSteps + 1)
                            } else if (reps.data.message == 'update_another_sent_count'){
                                FormService.BUSINESS_update_with_send(fieldVerified)
                                    .then(repo => {
                                        if(repo.data.message == 'success'){
                                            setSnacbarSettings(prevState => ({
                                                ...prevState,
                                                ...prevState.settings.open.signup = true,
                                                ...prevState.settings.message = "Verification Sent Successfully",
                                                ...prevState.settings.severity = "success",
                                                ...prevState.settings.autoHideDuration = 5000
                                            }))
                                            setOpen(false)
                                            setActiveSteps((activeSteps) => activeSteps + 1)
                                        }
                                        resetTimer()
                                    })
                            } else {
                                FormService.BUSINESS_verification_entry(fieldVerified)
                                    .then(res => {
                                        if(res.data.message == 'success_vc_entry'){
                                            //call api send email
                                            FormService.BUSINESS_send_email(fieldVerified)
                                                .then(resp => {
                                                    if(resp.data.message == 'success_sent'){
                                                        setSnacbarSettings(prevState => ({
                                                            ...prevState,
                                                            ...prevState.settings.open.signup = true,
                                                            ...prevState.settings.message = "Successfully Sent Verification Code",
                                                            ...prevState.settings.severity = "success",
                                                            ...prevState.settings.autoHideDuration = 5000
                                                        }))
                                                        setOpen(false)
                                                        setActiveSteps((activeSteps) => activeSteps + 1)
                                                        resetTimer()
                                                    }
                                                })
                                        }
                                    })
                            }
                        })
                        } else {
                            setOpen(false)
                            setSnacbarSettings(prevState => ({
                                    ...prevState,
                                    ...prevState.settings.open.signup = true,
                                    ...prevState.settings.message = "This email is already taken.",
                                    ...prevState.settings.severity = "error",
                                    ...prevState.settings.autoHideDuration = 5000
                            }))
                        }
                    })
                }
        } else if(activeSteps == 4){
            if(!tempField.verificationObj.verificationcode){
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "There's an empty field, please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            } else {
                setOpen(true)
                FormService.BUSINESS_compare_verification(filteredcompare)
                .then((repository) => {
                    if(repository.data.message == 'verified_success'){
                        //insertion
                        const fieldPersonalWithCredentials = {
                            firstname : tempField.personalInformationObj.firstname,
                            lastname : tempField.personalInformationObj.lastname,
                            contactnumber : tempField.personalInformationObj.contactnum,
                            address : tempField.personalInformationObj.address,
                            email : tempField.credentialsObj.email,
                            password : tempField.credentialsObj.password,
                            sec_question : tempField.credentialsObj.sec_question,
                            sec_answer: tempField.credentialsObj.sec_answer
                        }
                        FormService.BUSINESS_account_registration(fieldPersonalWithCredentials)
                        .then(repo => {
                            if(repo.data.message == 'success_bo_registration'){
                                FormService.BUSINESS_project_creation(
                                    tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
                                    projectDetails,
                                    destinationArray,
                                    tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
                                    tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing,
                                    tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
                                    tempFieldSelected.fieldSettings.credentialsObj.email
                                )
                                .then(projectrepo => {
                                    if(projectrepo.data.message == 'success_project_entry'){
                                        setSnacbarSettings(prevState => ({
                                            ...prevState,
                                            ...prevState.settings.open.signup = true,
                                            ...prevState.settings.message = "Account Created Successfully",
                                            ...prevState.settings.severity = "success",
                                            ...prevState.settings.autoHideDuration = 5000
                                        }))
                                        FormService.BUSINESS_findAllAccountsByEmail(
                                            tempFieldSelected.fieldSettings.credentialsObj.email
                                        ).then((res) => {
                                            allFieldSelected[selectedIndex].businessFieldArray = res.data
                                            if (allFieldSelected[selectedIndex].businessFieldArray.length > 0) {
                                                FormService.BUSINESS_findAllProjectByEmail(
                                                    tempFieldSelected.fieldSettings.credentialsObj.email
                                                ).then(resp => {
                                                    allFieldSelected[selectedIndex].projectFieldArray = resp.data.data
                                                    if(allFieldSelected[selectedIndex].projectFieldArray.length > 0) {
                                                        setOpen(false)
                                                        setActiveSteps((activeSteps) => activeSteps + 1)
                                                    }
                                                })
                                            } else {
                                                return;
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else if(repository.data.message == 'verification_problem'){
                        setSnacbarSettings(prevState => ({
                            ...prevState,
                            ...prevState.settings.open.signup = true,
                            ...prevState.settings.message = "Problem in verifying your code, please contact administrator",
                            ...prevState.settings.severity = "error",
                            ...prevState.settings.autoHideDuration = 5000
                        }))
                        setOpen(false)
                    } else if(repository.data.message == 'invalid_verified'){
                        setSnacbarSettings(prevState => ({
                            ...prevState,
                            ...prevState.settings.open.signup = true,
                            ...prevState.settings.message = "Invalid Verification Code",
                            ...prevState.settings.severity = "error",
                            ...prevState.settings.autoHideDuration = 5000
                        }))
                        setOpen(false)
                    } else {
                        
                    }
                })
            }
        }
    }
    const HandleSelectQuestion = (event) => {
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
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : value,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname :tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : !value ? true : false,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory :  tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : !value ? 'Kindly provide your security question' : '',
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        
    }
    const HandleChangeBOEmailSignup = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : !value ? true : !validEmailAddress.test(value) ? true : false,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : value,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : !value ? 'Kindly provide a valid email address' : !validEmailAddress.test(value) ? 'This is not a valid email address' : '',
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        
    }
    const HandleChangeBOPasswordSignup = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : !value ? true : false,
            error_conpass : value !== tempFieldSelected.fieldSettings.credentialsObj.conpass ? true : false,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : value,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : !value ? "Please provide your password" : '',
            epm_conpass :  value !== tempFieldSelected.fieldSettings.credentialsObj.conpass ? 'Password does not match' : '',
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        
    }
    const HandleChangeBOConPassSignup = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : !value ? true : value !== tempFieldSelected.fieldSettings.credentialsObj.password ? true : false,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : value,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : !value ? 'Kindly confirm your password' : value !== tempFieldSelected.fieldSettings.credentialsObj.password ? 'Password does not match' : '',
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        
    }
    const HandleChangeBOSecAnswer = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : !value ? true : false,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : value
        }
        const verificationObj = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObj.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : !value ? 'Please provide a security answer' : '',
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        
    }
    const handleResetField = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInformationObj = {
            firstname : tempFieldSelected.fieldSettings.personalInformationObj.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInformationObj.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInformationObj.contactnum,
            address : tempFieldSelected.fieldSettings.personalInformationObj.address
        }
        const errorProvider = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProvider.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProvider.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProvider.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProvider.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProvider.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProvider.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProvider.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProvider.error_password,
            error_conpass : tempFieldSelected.fieldSettings.errorProvider.error_conpass,
            error_sec_question : tempFieldSelected.fieldSettings.errorProvider.error_sec_question,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProvider.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProvider.error_verify
        }
        const verificationObj = {
            verificationcode : '',
            vrfycounts : tempFieldSelected.fieldSettings.verificationObj.vrfycounts
        }
        const projectDetailsObj = { 
            projectName : tempFieldSelected.fieldSettings.projectDetailsObj.projectName,
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObj.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObj.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObj.projectPricing
        }
        const credentialsObj = {
            email : tempFieldSelected.fieldSettings.credentialsObj.email,
            password : tempFieldSelected.fieldSettings.credentialsObj.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObj.conpass,
            sec_question : tempFieldSelected.fieldSettings.credentialsObj.sec_question,
            sec_answer : tempFieldSelected.fieldSettings.credentialsObj.sec_answer
        }
        const error_provider_message = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_message.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_message.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_message.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_message.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_message.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_message.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_message.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_message.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_message.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_question,
            epm_sec_answer : tempFieldSelected.fieldSettings.error_provider_message.epm_sec_answer,
            epm_verify : tempFieldSelected.fieldSettings.error_provider_message.epm_verify
        }
        const fieldSettings = {
            personalInformationObj : personalInformationObj,
            projectDetailsObj: projectDetailsObj,
            credentialsObj: credentialsObj,
            verificationObj : verificationObj,
            errorProvider : errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }
    
    const handleResetContactUsFields = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const contactUsFormObj = {
            fullname : '',
            email : '',
            subject : '',
            message : '',
        }
        const errorProvider = { 
            error_fullname : tempFieldSelected.fieldSettings.errorProvider.error_fullname,
            error_email : tempFieldSelected.fieldSettings.errorProvider.error_email,
            error_subject : tempFieldSelected.fieldSettings.errorProvider.error_subject,
            error_message : tempFieldSelected.fieldSettings.errorProvider.error_message,
        }
        const error_provider_message = {
            epm_fullname : tempFieldSelected.fieldSettings.error_provider_message.epm_fullname,
            epm_email : tempFieldSelected.fieldSettings.error_provider_message.epm_email,
            epm_subject : tempFieldSelected.fieldSettings.error_provider_message.epm_subject,
            epm_message : tempFieldSelected.fieldSettings.error_provider_message.epm_message,
        }
        const fieldSettings = {
            contactUsFormObj : contactUsFormObj,
            errorProvider: errorProvider,
            error_provider_message: error_provider_message
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] = tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
    }

    const HandleResentEmail = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        setOpen(true)
        FormService.BUSINESS_resend_email(
            tempFieldSelected.fieldSettings.credentialsObj.email,
            create_uuid()
        ).then(res => {
            if(res.data.message == 'success'){
                setOpen(false)
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "Verification Code Sent Successfully",
                    ...prevState.settings.severity = "success",
                    ...prevState.settings.autoHideDuration = 5000
                })) 
                resetTimer();
                handleResetField();
            }else{
                setOpen(false)
                setSnacbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open.signup = true,
                    ...prevState.settings.message = "You've exceed the limit of sending verification email",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            }
        })
    }
    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        const RSI = result.source.index
        let deleted = features.splice(RSI, 1)
        setDestinationArray(destinationArray => [...destinationArray, ...deleted])
    }
    const deleteField = (params) => {
        let index = destinationArray.findIndex(item => item.field_id == params.row.id)
        let deleted = destinationArray.splice(index, 1)
        setFeatures(features => [...features, ...deleted])
        loadFormFeature()
    }
    const tokenScanned = (index) => {
        const tempAllFieldSelected = [...settings]
        const tempFieldSelected = {...tempAllFieldSelected[index]}
        const __key__ = localstoragehelper.load('key_identifier')
        if(__key__ == 'unknown'){}
        else{
            dispatch(ScannedToken(__key__))
            setTimeout(() => {
                const res = baseRef.tokenRef.current.token_message
                if(__key__ == 'unknown'){
                    history.push(tempFieldSelected.router_obj.home)
                } else if(res.message[5] === 'business_platform'){
                    alert('redirect to bo-dashboard')
                } else {
                    history.push(tempFieldSelected.router_obj.home)
                }
            }, 1000)
        }
    }
    const adminScanned = (index) => {
        dispatch(scanProcess())
        setTimeout(() => {
            const res = baseRef.adminScanRef.current.check_admin_message.message
            console.log(res)
            if(res === 'not_exist') {
                history.push(appRouter.AdminRegistration.path)
            } else{}
        }, 1000)
    }
    return (
        <GlobalContext.Provider
        value={{
            activeSteps, setActiveSteps,
            signupCategory, setSignupCategory, open, setOpen,
            allFieldSelected, setAllFieldSelected,
            selectedIndex, setSelectedIndex, HandleChangeFirstname,
            HandleChangeLastname,HandleChangeAddress, HandleChangeContactNumber,
            HandleChangeEmailLogin, HandleChangePasswordLogin, HandleSelectLoginAs, handleSignIn, handleNext,
            snackbarSettings, handleClose, handlePrevious, HandleChangeBOEmailSignup, 
            HandleChangeBOPasswordSignup, HandleChangeBOConPassSignup, HandleChangeBOSecAnswer,
            HandleSelectQuestion, verification, setVerification, HandleVerification, HandleResentEmail,
            projectDetails, setProjectDetails, timer, resetTimer, destinationArray, handleOnDragEnd,
            deleteField, features, featureData, handleContactUsSubmit, handleChangeFullname, handleChangeContactUsEmail,
            handleChangeSubject, handleChangeMessage, tokenScanned, adminScanned
        }}
        >{children}</GlobalContext.Provider>
    )
}

export {Global, GlobalContext}