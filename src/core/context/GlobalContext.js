import React, {createContext, cloneElement, useState} from 'react'

const GlobalContext = createContext()

const Global = ({children}) => {
    const [activeSteps, setActiveSteps] = useState(0)
    const ReplicateOnInit = ({children}) => {
        return cloneElement(children)
    }
    return (
        <GlobalContext.Provider
        value={{
            ReplicateOnInit, activeSteps, setActiveSteps
        }}
        >{children}</GlobalContext.Provider>
    )
}

export {Global, GlobalContext}