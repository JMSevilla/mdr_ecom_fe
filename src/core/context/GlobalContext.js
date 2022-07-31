import React, {createContext, cloneElement, useState} from 'react'

const GlobalContext = createContext()

const Global = ({children}) => {
    const [activeSteps, setActiveSteps] = useState(0)
    const [signupCategory, setSignupCategory] = useState('pick')
    const [open, setOpen] = useState(false)
    const ReplicateOnInit = ({children}) => {
        return cloneElement(children)
    }
    return (
        <GlobalContext.Provider
        value={{
            ReplicateOnInit, activeSteps, setActiveSteps,
            signupCategory, setSignupCategory, open, setOpen
        }}
        >{children}</GlobalContext.Provider>
    )
}

export {Global, GlobalContext}