import React, {useContext} from 'react'
import SignupField from './signup_field'
import { GlobalContext } from '../../core/context/GlobalContext'
import ApplicationBar from '../../components/Appbar/Appbar'
import SystemBackdrop from '../../components/Backdrop/Backdrop'

const Signup = () => {
    const {ReplicateOnInit, activeSteps, setActiveSteps,
        signupCategory, setSignupCategory,
        open, setOpen} = useContext(GlobalContext)
    return (
        <>
            <ApplicationBar title={'MDR Ecom'} />
           <ReplicateOnInit>
            <SignupField 
            activeSteps={activeSteps}
            setActiveSteps={setActiveSteps}
            signupCategory={signupCategory}
            setSignupCategory={setSignupCategory}
            setOpen={setOpen}
            />
            
           </ReplicateOnInit>
           <SystemBackdrop 
                open={open}
            />
        </>
    )
}

export default Signup