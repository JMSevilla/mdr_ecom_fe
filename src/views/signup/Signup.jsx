import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../core/context/GlobalContext'
import ApplicationBar from '../../components/Appbar/Appbar'
import SystemBackdrop from '../../components/Backdrop/Backdrop'
import { ReplicateOnInit } from '../../core/context/CloneElement'
import SignupField from './signup_field'
import CustomizedSnackbars from '../../components/Snackbar/Snackbar'
import { PROJECT_CONTEXT } from '../../core/context/ProjectDetailsContext'

const Signup = () => {
    const {activeSteps, setActiveSteps,
        signupCategory, setSignupCategory,
        open, setOpen, allFieldSelected, setAllFieldSelected,
        selectedIndex, setSelectedIndex, HandleChangeFirstname,
        HandleChangeLastname,  HandleChangeAddress, HandleChangeContactNumber,
        handleNext, snackbarSettings, handleClose, handlePrevious,HandleChangeBOEmailSignup,
        HandleChangeBOPasswordSignup,HandleChangeBOConPassSignup, HandleChangeBOSecAnswer , HandleSelectQuestion,
        HandleVerification, verification, setVerification, HandleResentEmail,
        projectDetails, setProjectDetails, timer, resetTimer} = useContext(GlobalContext)
    
    const projectcontextvalues = useContext(PROJECT_CONTEXT)
    const {HandleProjectName, HandleSelectProjectCategory, HandleSelectProjectType, HandleSliderChange} = projectcontextvalues
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
                HandleProjectName={HandleProjectName}
                HandleSelectProjectCategory={HandleSelectProjectCategory}
                HandleSelectProjectType={HandleSelectProjectType}
                HandleSliderChange={HandleSliderChange}
                handlePrevious={handlePrevious}
                HandleChangeBOEmailSignup={HandleChangeBOEmailSignup}
                HandleChangeBOPasswordSignup={HandleChangeBOPasswordSignup}
                HandleChangeBOConPassSignup={HandleChangeBOConPassSignup}
                HandleChangeBOSecAnswer={HandleChangeBOSecAnswer}
                HandleSelectQuestion={HandleSelectQuestion}
                HandleVerification={HandleVerification}
                setVerification={setVerification}
                verification={verification}
                HandleResentEmail={HandleResentEmail}
                projectDetails={projectDetails}
                setProjectDetails={setProjectDetails}
                timer={timer}
                resetTimer={resetTimer}
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