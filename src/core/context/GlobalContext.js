import React, {createContext, cloneElement, useState} from 'react'
import Spiels from '../Spiels/Spiels'

const GlobalContext = createContext()

const Global = ({children}) => {
    const [activeSteps, setActiveSteps] = useState(0)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [signupCategory, setSignupCategory] = useState('pick')
    const [open, setOpen] = useState(false)
    
    const HandleChangeOnInit = (event, type, params, field, fieldIndex) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const fieldSelected = {...tempAllFieldSelected[fieldIndex]}
        const tempFieldSelected = {...field}
        let personalInformationObj
        switch(type) {
            case 'Business' : {
                for(var key in tempFieldSelected){
                    if(params == key) {
                        personalInformationObj = {
                            [key] : value
                        }
                        return personalInformationObj[key]
                    }
                }
                const fieldSettings = {
                    personalInformationObj : personalInformationObj
                }
                // fieldSelected.fieldSettings = fieldSettings
                // tempAllFieldSelected[fieldIndex] = fieldSelected
                // setAllFieldSelected(tempAllFieldSelected)
                console.log(fieldSettings)
            }
        }
    }
    return (
        <GlobalContext.Provider
        value={{
            activeSteps, setActiveSteps,
            signupCategory, setSignupCategory, open, setOpen,
            allFieldSelected, setAllFieldSelected,
            selectedIndex, setSelectedIndex, HandleChangeOnInit
        }}
        >{children}</GlobalContext.Provider>
    )
}

export {Global, GlobalContext}