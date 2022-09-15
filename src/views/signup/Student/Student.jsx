import React from 'react'
import { useContext } from 'react'
import  CustomizedSnackbars  from '../../../components/Snackbar/Snackbar'
import  SystemBackdrop  from '../../../components/Backdrop/Backdrop'
import { ReplicateOnInit } from '../../../core/context/CloneElement'
import { StudentContext } from '../../../core/context/StudentContext'
import Studentfield from './student_field'
import { PROJECT_CONTEXT } from '../../../core/context/ProjectDetailsContext'

const Student = () => {
    const {activeSteps, setActiveSteps, handleNext, HandleChangeFirstname,
            selectedIndex, setSelectedIndex, open, setOpen , allFieldSelected, 
            setAllFieldSelected, HandleChangeLastname, HandleChangeContactNumber, HandleChangeAddress,
            snackbarSettings, handleClose, projectDetails, setProjectDetails  } = useContext(StudentContext)
    const projectcontextvalues = useContext(PROJECT_CONTEXT)
    const {HandleProjectName, HandleSelectProjectCategory, HandleSelectProjectType, HandleSliderChange } = projectcontextvalues
  return (
    <>
    <ReplicateOnInit 
     children={
     <Studentfield 
        activeSteps={activeSteps}
        setActiveSteps={setActiveSteps}
        allFieldSelected={allFieldSelected}
        setAllFieldSelected={setAllFieldSelected}
        handleNext={handleNext}
        // setOpen={setOpen}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex(4)}
        HandleChangeFirstname={HandleChangeFirstname}
        HandleChangeLastname={HandleChangeLastname}
        HandleChangeContactNumber={HandleChangeContactNumber}
        HandleChangeAddress={HandleChangeAddress}
        snackbarSettings={snackbarSettings}
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
        HandleProjectName={HandleProjectName}
        HandleSelectProjectCategory={HandleSelectProjectCategory}
        HandleSelectProjectType={HandleSelectProjectType}
        HandleSliderChange={HandleSliderChange}
     />
    } />
      {/* <SystemBackdrop
      open={open}
      />
      <CustomizedSnackbars
        open={snackbarSettings.settings.open}
        message={snackbarSettings.settings.message}
        handleClose={handleClose}
        severity={snackbarSettings.settings.severity}
        autoHideDuration={snackbarSettings.settings.autoHideDuration}
      /> */}
    </>
  )
}

export default Student