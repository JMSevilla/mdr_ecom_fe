import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../core/context/GlobalContext'
import ApplicationBar from '../../components/Appbar/Appbar'
import SystemBackdrop from '../../components/Backdrop/Backdrop'
import { ReplicateOnInit } from '../../core/context/CloneElement'
import SignupField from './signup_field'

const Signup = () => {
    const {activeSteps, setActiveSteps,
        signupCategory, setSignupCategory,
        open, setOpen, allFieldSelected, setAllFieldSelected,
        selectedIndex, setSelectedIndex, HandleChangeFirstname,
        HandleChangeLastname,  HandleChangeAddress, HandleChangeContactNumber,
        handleNext} = useContext(GlobalContext)
        
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
                />
           } />
           <SystemBackdrop 
                open={open}
            />
        </>
    )
}

export default Signup