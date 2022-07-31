import React, {useContext} from 'react'
import SignupField from './signup_field'
import { GlobalContext } from '../../core/context/GlobalContext'
import ApplicationBar from '../../components/Appbar/Appbar'

const Signup = () => {
    const {ReplicateOnInit, activeSteps, setActiveSteps} = useContext(GlobalContext)
    return (
        <>
            <ApplicationBar title={'MDR Ecom'} />
           <ReplicateOnInit>
            <SignupField 
            activeSteps={activeSteps}
            setActiveSteps={setActiveSteps}
            />
           </ReplicateOnInit>
        </>
    )
}

export default Signup