import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../core/context/GlobalContext'
import ApplicationBar from '../../components/Appbar/Appbar'
import SystemBackdrop from '../../components/Backdrop/Backdrop'
import { ReplicateOnInit } from '../../core/context/CloneElement'
import SignupField from './signup_field'
import CustomizedSnackbars from '../../components/Snackbar/Snackbar'

const Signup = () => {
    const {activeSteps, setActiveSteps,
        signupCategory, setSignupCategory,
        open, setOpen, allFieldSelected, setAllFieldSelected,
        selectedIndex, setSelectedIndex, HandleChangeFirstname,
        HandleChangeLastname,  HandleChangeAddress, HandleChangeContactNumber,
        handleNext, snackbarSettings, handleClose} = useContext(GlobalContext)
        
    return (
        <>
            <ApplicationBar title={'Ecommerce'} simplified/>
           <ReplicateOnInit children={ 
                <SignupField 
                activeSteps={activeSteps}
                setActiveSteps={setActiveSteps}
                allFieldSelected={allFieldSelected}
                setAllFieldSelected={setAllFieldSelected}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex(0)}
                HandleChangeFirstname={HandleChangeFirstname}
                signupCategory={signupCategory}
                setSignupCategory={setSignupCategory}
                setOpen={setOpen}
                HandleChangeLastname={HandleChangeLastname}
                HandleChangeAddress={HandleChangeAddress}
                HandleChangeContactNumber={HandleChangeContactNumber}
                handleNext={handleNext}
                snackbarSettings={snackbarSettings}
                />
           } />
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

export default Signup