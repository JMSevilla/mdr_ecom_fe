import React from 'react'
import { Box } from '@mui/material'
import AppButton from '../Buttons/Button'

const NextPrevious = (props) => {
    const {activeSteps, stepperArray, handleNext, handleBack, hasResend, handleResend, disabled, buttonName} = props

    return (
        <Box sx={{display : 'flex', flexDirection : 'row', pt: 2}}>
            <AppButton 
                buttonName={'Back'}
                disabled={activeSteps === 0}
                color={'inherit'}
                size={'sm'}
                sx={{mr : 1}}
                handleClick={handleBack}
            />
            <Box sx={{flex : '1 1 auto'}}>
                {
                    hasResend ? 
                    <>
                    <AppButton 
                    buttonName={activeSteps === stepperArray.length - 1 ? 'Finish' : 'Next'}
                    color={'inherit'}
                    size={'sm'}
                    style={{float : 'right'}}
                    handleClick={handleNext}
                />
                    <AppButton 
                        disabled={disabled}
                        buttonName={buttonName}
                        color={'inherit'}
                        size={'sm'}
                        style={{float : 'right'}}
                        handleClick={handleResend}
                    />
                    </>
                    :
                    <>
                    <AppButton 
                    buttonName={activeSteps === stepperArray.length - 1 ? 'Finish' : 'Next'}
                    color={'inherit'}
                    size={'sm'}
                    style={{float : 'right'}}
                    handleClick={handleNext}
                />
                    </>
                }
                
            </Box>
        </Box>
    )
}

export default NextPrevious