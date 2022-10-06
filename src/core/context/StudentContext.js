import React, {createContext, useRef, useState, useCallback, useEffect} from 'react'
import { projectbreakdown } from '../utils/dumpfeatures'
import Spiels from '../Spiels/Spiels'
import FormService from '../service/apiservice'
import { validContactNumber, validName, validEmailAddress } from '../utils/helper'

import { useDispatch , useSelector} from 'react-redux'
import { STUDENT_CHECKEMAIL_PROCESS, STUDENT_VERIFICATIONEMAIL_PROCESS, STUDENT_VERIFICATION_UPDATE_COUNTS_PROCESS, STUDENT_VERIFICATION_ENTRY_PROCESS, STUDENT_VERIFICATION_SEND_EMAIL_PROCESS } from '../redux/reducers/Student/student'

const StudentContext = createContext()

const getSelectors = (state) => ({student_check_email_message : state.student,
    student_verification_email_message : state.student, student_verification_entry_message : state.student,
    student_verification_sent_email_message : state.student,
    student_verification_update_counts_message : state.student})
 const Student = ({children}) => {

    const dispatch = useDispatch()
    
    const { student_check_email_message, student_verification_update_counts_message, student_verification_sent_email_message, student_verification_email_message, student_verification_entry_message } = useSelector(getSelectors)
    const baseRef = {
        studentRef : useRef(student_check_email_message),
        studentVerificationRef : useRef(student_verification_email_message),
        studentVerificationEntryRef : useRef(student_verification_entry_message),
        studentVerificationSendEmailRef : useRef(student_verification_sent_email_message),
        studentVerificationUpdateCountsRef : useRef(student_verification_update_counts_message)
    }
    const [activeSteps, setActiveSteps] = useState(0)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [features, setFeatures] = useState([])
    const [featureData, setFeatureData] = useState([])
    const [projectDetails, setProjectDetails] = useState('')
    const [destinationArray, setDestinationArray] = useState([])

    const [open, setOpen] = useState(false)
    const [snackbarSettings, setSnackbarSettings] = useState({
        settings : {
            open : false,
            message: '',
            severity : 'success',
            autoHideDuration : 3000
        }
    })
    useEffect(() => {
        baseRef.studentRef.current = student_check_email_message
        baseRef.studentVerificationRef.current = student_verification_email_message
        baseRef.studentVerificationEntryRef.current = student_verification_entry_message
        baseRef.studentVerificationSendEmailRef.current = student_verification_sent_email_message
        baseRef.studentVerificationUpdateCountsRef.current = student_verification_update_counts_message
    }, [student_check_email_message, student_verification_email_message, student_verification_entry_message, student_verification_sent_email_message, student_verification_update_counts_message])
        // Timer for resend button
    const [timer, setTimer] = useState(15);    
    const [startTimer, setStartTimer] = useState(false);
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
    useEffect(() => {
        if(startTimer) {
            timer > 0 && setTimeout(timeOutCallback, 1000);
        }
    }, [startTimer, timer, timeOutCallback]);
    
    const resetTimer = () => {
        setStartTimer(true);
        setTimer(15);
    };

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
    const create_uuid = () =>{
        var dt = new Date().getTime()
         var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
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
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        const fieldVerified = {
            email : tempField.credentialsObjSt.email,
            code : create_uuid()
        }
        const filteredcompare = {
            email : tempField.credentialsObjSt.email,
            code : tempField.verificationObjSt.verificationcode
        }

        if(activeSteps === 0){
            if(tempField.personalInfoObjSt.firstname == '' || tempField.personalInfoObjSt.lastname == ''
            || tempField.personalInfoObjSt.contactnum == '' || tempField.personalInfoObjSt.address == '') {
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "There's an empty field, please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000,
                }))
            } else if(!validName.test(tempField.personalInfoObjSt.firstname) || !validName.test(tempField.personalInfoObjSt.lastname)
                || !validContactNumber.test(tempField.personalInfoObjSt.contactnum)) {
                    setSnackbarSettings(prevState => ({
                        ...prevState,
                        ...prevState.settings.open = true,
                        ...prevState.settings.message = "Kindly check your inputs before proceeding",
                        ...prevState.settings.severity = "error",
                        ...prevState.settings.autoHideDuration = 5000
                    }))
            } else {
                setActiveSteps((activeSteps) => activeSteps + 1)
            }
        }
        else if (activeSteps === 1) {
            if(tempField.projectDetailsObjSt.projectName == '' || 
                 tempField.projectDetailsObjSt.projectCategory == ''
                 || tempField.projectDetailsObjSt.projectType == '') {
                    setSnackbarSettings(prevState => ({
                 ...prevState,
                 ...prevState.settings.open = true,
                 ...prevState.settings.message = "There's an empty field, please try again",
                 ...prevState.settings.severity = "error",
                 ...prevState.settings.autoHideDuration = 5000
             }))
         } else { 
             const sys = [...projectbreakdown]
             const filtered = sys.filter((item) => item.field_type === tempField.projectDetailsObjSt.projectType)
             const field_filtered = filtered.filter((val) => {
                 return val.joinedSys.find(item => item == tempField.projectDetailsObjSt.projectCategory)
             })
             setFeatures(field_filtered)
             setActiveSteps((activeSteps) => activeSteps + 1)
         } 
         
     } else if(activeSteps === 2) {
        if(destinationArray.length > 0) {
            setActiveSteps((activeSteps) => activeSteps + 1)
        } else {
            setSnackbarSettings(prevState => ({
                ...prevState,
                ...prevState.settings.open = true,
                ...prevState.settings.message = "Kindly select system features",
                ...prevState.settings.severity = "error",
                ...prevState.settings.autoHideDuration = 5000
            }))
        }
    } else if(activeSteps === 3){
        if(!tempField.credentialsObjSt.email || !tempField.credentialsObjSt.password
            || !tempField.credentialsObjSt.conpass || !tempField.credentialsObjSt.sec_question
            || !tempField.credentialsObjSt.sec_answer){
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "There's an empty field, please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            } else if (tempField.credentialsObjSt.password !== tempField.credentialsObjSt.conpass) {
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "Password mismatch please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            } else if (!validEmailAddress.test(tempField.credentialsObjSt.email)) {
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "Invalid email please try again",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))

            } else { 
                //function verify existing sent code and email
                //else new entry of verification code
                setOpen(true)
                dispatch(STUDENT_CHECKEMAIL_PROCESS(tempField.credentialsObjSt.email))
                setTimeout(() => {
                    const repository = baseRef.studentRef.current.student_check_email_message
                    if(repository.message == 'not_exist') {
                        dispatch(STUDENT_VERIFICATIONEMAIL_PROCESS(tempField.credentialsObjSt.email))
                        setTimeout(() => {
                            const reps = baseRef.studentVerificationRef.current.student_verification_email_message
                            if(reps.message == 'exceed_limit') {
                                setSnackbarSettings(prevState => ({
                                    ...prevState,
                                    ...prevState.settings.open = true,
                                    ...prevState.settings.message = "You've already exceed the limit of resend email",
                                    ...prevState.settings.severity = "warning",
                                    ...prevState.settings.autoHideDuration = 5000
                                }))
                                setOpen(false)
                                setActiveSteps((activeSteps) => activeSteps + 1)
                            }
                            else if (reps.message == 'update_another_sent_count') {
                                dispatch(STUDENT_VERIFICATION_UPDATE_COUNTS_PROCESS(fieldVerified))
                                setTimeout(() => {
                                    setSnackbarSettings(prevState => ({
                                        ...prevState,
                                        ...prevState.settings.open = true,
                                        ...prevState.settings.message = "Verification Sent Successfully",
                                        ...prevState.settings.severity = "success",
                                        ...prevState.settings.autoHideDuration = 5000
                                    }))
                                    setOpen(false)
                                    setActiveSteps((activeSteps) => activeSteps + 1)
                                }, 1000)
                            }
                            else {
                                // insert in account verification
                                dispatch(STUDENT_VERIFICATION_ENTRY_PROCESS(fieldVerified))
                                setTimeout(() => {
                                    const res = baseRef.studentVerificationEntryRef.current.student_verification_entry_message
                                    if(res.message == 'success_vc_entry') {
                                        dispatch(STUDENT_VERIFICATION_SEND_EMAIL_PROCESS(fieldVerified))
                                        setTimeout(() => {
                                            setSnackbarSettings(prevState => ({
                                                ...prevState,
                                                ...prevState.settings.open = true,
                                                ...prevState.settings.message = "Successfully Sent Verification Code",
                                                ...prevState.settings.severity = "success",
                                                ...prevState.settings.autoHideDuration = 5000
                                            }))
                                            setOpen(false)
                                            setActiveSteps((activeSteps) => activeSteps + 1)
                                            resetTimer()
                                        },1000)
                                    }
                                }, 1000)
                            }
                        }, 1000)
                    } else {
                        setOpen(false)
                        setSnackbarSettings(prevState => ({
                                ...prevState,
                                ...prevState.settings.open = true,
                                ...prevState.settings.message = "This email is already taken.",
                                ...prevState.settings.severity = "error",
                                ...prevState.settings.autoHideDuration = 5000
                        }))
                    }
                }, 1000)
            }
        } else if(activeSteps == 4){
            if(!tempField.verificationObjSt.verificationcode){
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
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
                            firstname : tempField.personalInfoObjSt.firstname,
                            lastname : tempField.personalInfoObjSt.lastname,
                            contactnumber : tempField.personalInfoObjSt.contactnum,
                            address : tempField.personalInfoObjSt.address,
                            email : tempField.credentialsObjSt.email,
                            password : tempField.credentialsObjSt.password,
                            sec_question : tempField.credentialsObjSt.sec_question,
                            sec_answer: tempField.credentialsObjSt.sec_answer
                        }
                        FormService.STUDENT_account_registration(fieldPersonalWithCredentials)
                        .then(repo => {
                            if(repo.data.message == 'success_bo_registration'){
                                FormService.STUDENT_project_creation(
                                    tempFieldSelected.fieldSettings.projectDetailsObjSt.projectName,
                                    projectDetails,
                                    destinationArray,
                                    tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
                                    tempFieldSelected.fieldSettings.projectDetailsObjSt.projectPricing,
                                    tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
                                    tempFieldSelected.fieldSettings.credentialsObjSt.email
                                )
                                .then(projectrepo => {
                                    if(projectrepo.data.message == 'success_project_entry'){
                                        setSnackbarSettings(prevState => ({
                                            ...prevState,
                                            ...prevState.settings.open = true,
                                            ...prevState.settings.message = "Account Created Successfully",
                                            ...prevState.settings.severity = "success",
                                            ...prevState.settings.autoHideDuration = 5000
                                        }))
                                        FormService.STUDENT_findAllAccountsByEmail(
                                            tempFieldSelected.fieldSettings.credentialsObjSt.email
                                        ).then((res) => {
                                            allFieldSelected[selectedIndex].businessFieldArray = res.data
                                            if (allFieldSelected[selectedIndex].businessFieldArray.length > 0) {
                                                FormService.STUDENT_findAllProjectByEmail(
                                                    tempFieldSelected.fieldSettings.credentialsObjSt.email
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
                        setSnackbarSettings(prevState => ({
                            ...prevState,
                            ...prevState.settings.open = true,
                            ...prevState.settings.message = "Problem in verifying your code, please contact administrator",
                            ...prevState.settings.severity = "error",
                            ...prevState.settings.autoHideDuration = 5000
                        }))
                        setOpen(false)
                    } else if(repository.data.message == 'invalid_verified'){
                        setSnackbarSettings(prevState => ({
                            ...prevState,
                            ...prevState.settings.open = true,
                            ...prevState.settings.message = "Invalid Verification Code",
                            ...prevState.settings.severity = "error",
                            ...prevState.settings.autoHideDuration = 5000
                        }))
                        setOpen(false)
                    } else {
                        
                    }
                })
            }
        } else if(activeSteps == 5){
            setActiveSteps((activeSteps) => activeSteps + 1)
        }
    }

    const HandleChangeBOEmailSignup = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
            error_email : !value ? true : !validEmailAddress.test(value) ? true : false,
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
            email : value,
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
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
            epm_email : !value ? 'Kindly provide a valid email address' : !validEmailAddress.test(value) ? 'This is not a valid email address' : '',
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

    const HandleChangeBOPasswordSignup = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
            error_password : !value ? true : false,
            error_conpass : value !== tempFieldSelected.fieldSettings.credentialsObjSt.conpass ? true : false,
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
            password : value,
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
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_password : !value ? "Please provide your password" : '',
            epm_conpass :  value !== tempFieldSelected.fieldSettings.credentialsObjSt.conpass ? 'Password does not match' : '',
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

    const HandleChangeBOConPassSignup = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
            error_lastname : tempFieldSelected.fieldSettings.errorProviderSt.error_lastname,
            error_contactnum : tempFieldSelected.fieldSettings.errorProviderSt.error_contactnum,
            error_address : tempFieldSelected.fieldSettings.errorProviderSt.error_address,
            error_projectname : tempFieldSelected.fieldSettings.errorProviderSt.error_projectname,
            error_projectCategory : tempFieldSelected.fieldSettings.errorProviderSt.error_projectCategory,
            error_projectType : tempFieldSelected.fieldSettings.errorProviderSt.error_projectType,
            error_email : tempFieldSelected.fieldSettings.errorProviderSt.error_email,
            error_password : tempFieldSelected.fieldSettings.errorProviderSt.error_password,
            error_conpass : !value ? true : value !== tempFieldSelected.fieldSettings.credentialsObjSt.password ? true : false,
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
            conpass : value,
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
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
            epm_conpass : !value ? 'Kindly confirm your password' : value !== tempFieldSelected.fieldSettings.credentialsObjSt.password ? 'Password does not match' : '',
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

    const HandleSelectQuestion = (event) => {
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
            projectCategory : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectCategory,
            projectType : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectType,
            projectPricing : tempFieldSelected.fieldSettings.projectDetailsObjSt.projectPricing
        }
        const credentialsObjSt = {
            email : tempFieldSelected.fieldSettings.credentialsObjSt.email,
            password : tempFieldSelected.fieldSettings.credentialsObjSt.password,
            conpass : tempFieldSelected.fieldSettings.credentialsObjSt.conpass,
            sec_question : value,
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
            error_sec_question : !value ? true : false,
            error_sec_answer : tempFieldSelected.fieldSettings.errorProviderSt.error_sec_answer,
            error_verify : tempFieldSelected.fieldSettings.errorProviderSt.error_verify
        }
        const error_provider_messageSt = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_contactnum,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory :  tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_conpass,
            epm_sec_question : !value ? 'Kindly provide your security question' : '',
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

    const HandleChangeBOSecAnswer = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
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
            error_sec_answer : !value ? true : false,
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
            sec_answer : value
        }
        const verificationObjSt = {
            verificationcode : tempFieldSelected.fieldSettings.verificationObjSt.verificationcode,
            vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
        }
        const error_provider_messageSt = {
            epm_firstname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_firstname,
            epm_lastname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_lastname,
            epm_contactnum : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_address : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_address,
            epm_projectname : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectname,
            epm_projectcategory : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projectcategory,
            epm_projecttype: tempFieldSelected.fieldSettings.error_provider_messageSt.epm_projecttype,
            epm_email : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_email,
            epm_password : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_password,
            epm_conpass : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_conpass,
            epm_sec_question : tempFieldSelected.fieldSettings.error_provider_messageSt.epm_sec_question,
            epm_sec_answer : !value ? 'Please provide a security answer' : '',
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

    const HandleVerification = (event) => {
            let value = event.currentTarget.value
            const tempAllFieldSelected = [...allFieldSelected]
            const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
            const personalInfoObjSt = {
                firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
                lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
                contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
                address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
            }
            const errorProviderSt = { 
                error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
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
                error_verify : !value ? true : false
            }
            const verificationObjSt = {
                verificationcode : value,
                vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
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
                epm_verify : !value ? 'Kindly provide your verification code' : ''
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

    const handleResetField = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const personalInfoObjSt = {
            firstname : tempFieldSelected.fieldSettings.personalInfoObjSt.firstname,
            lastname : tempFieldSelected.fieldSettings.personalInfoObjSt.lastname,
            contactnum : tempFieldSelected.fieldSettings.personalInfoObjSt.contactnum,
            address : tempFieldSelected.fieldSettings.personalInfoObjSt.address
        }
        const errorProviderSt = { 
            error_firstname : tempFieldSelected.fieldSettings.errorProviderSt.error_firstname,
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
        const verificationObjSt = {
            verificationcode : '',
            vrfycounts : tempFieldSelected.fieldSettings.verificationObjSt.vrfycounts
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

    const HandleResentEmail = () => {
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        setOpen(true)
        FormService.BUSINESS_resend_email(
            tempFieldSelected.fieldSettings.credentialsObjSt.email,
            create_uuid()
        ).then(res => {
            if(res.data.message == 'success'){
                setOpen(false)
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "Verification Code Sent Successfully",
                    ...prevState.settings.severity = "success",
                    ...prevState.settings.autoHideDuration = 5000
                })) 
                resetTimer();
                handleResetField();
            }else{
                setOpen(false)
                setSnackbarSettings(prevState => ({
                    ...prevState,
                    ...prevState.settings.open = true,
                    ...prevState.settings.message = "You've exceed the limit of sending verification email",
                    ...prevState.settings.severity = "error",
                    ...prevState.settings.autoHideDuration = 5000
                }))
            }
        })
    }

    const handleClose = (event, reason) => {
        if(reason === 'clickAway') {
            return;
        }
        setSnackbarSettings(prevState => ({
            ...prevState,
            ...prevState.settings.open = false,
        }))
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

  return (
    <>
        <StudentContext.Provider
        value={{
            activeSteps, setActiveSteps, handleNext, handleClose, HandleChangeFirstname,
            selectedIndex, setSelectedIndex,  open, setOpen, allFieldSelected, 
            setAllFieldSelected, HandleChangeLastname, HandleChangeContactNumber,
            HandleChangeAddress, snackbarSettings, setSnackbarSettings, features, featureData, projectDetails, 
            setProjectDetails, destinationArray, handleOnDragEnd, deleteField, HandleChangeBOEmailSignup, HandleChangeBOPasswordSignup, HandleChangeBOConPassSignup,
            HandleSelectQuestion, HandleChangeBOSecAnswer, HandleVerification, timer, HandleResentEmail, handlePrevious
        }}
        >{children}</StudentContext.Provider>
    </>
  )
}
export {Student, StudentContext}