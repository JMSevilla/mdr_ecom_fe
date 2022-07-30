import React from 'react'
import { Stepper, Step, StepLabel, Box } from '@mui/material'

const SystemStepper = (props) => {
    const { activeSteps, propArray } = props
    return (
        <>
            <Box sx={{ width: '100%', marginTop : '20px', marginBottom: '20px' }}>
                <Stepper
                activeStep={activeSteps}
                >
                    {
                        propArray.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}
                            return(
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            )
                        })
                    }
                </Stepper>
            </Box>
        </>
    )
}

export default SystemStepper