import React, { useContext } from 'react'
import ContactUsField from './contactus_field';
import { GlobalContext } from '../../../core/context/GlobalContext';
import { ReplicateOnInit } from "../../../core/context/CloneElement";
import { CustomizedSnackbars, SystemBackdrop } from "../../../components";

const ContactUs = () => {
  const {
    handleContactUsSubmit,
    handleChangeFullname,
    handleChangeContactUsEmail,
    handleChangeSubject,
    handleChangeMessage,
    setSelectedIndex,
    allFieldSelected,
    setAllFieldSelected,
    selectedIndex,
    open,
    snackbarSettings,
    handleClose
  } = useContext(GlobalContext);
  return (
    <>
    <ReplicateOnInit
    children={
      <ContactUsField
      handleContactUsSubmit={handleContactUsSubmit}
      handleChangeFullname={handleChangeFullname}
      handleChangeContactUsEmail={handleChangeContactUsEmail}
      handleChangeSubject={handleChangeSubject}
      handleChangeMessage={handleChangeMessage}
      setSelectedIndex={setSelectedIndex(3)}  
      allFieldSelected={allFieldSelected}
      setAllFieldSelected={setAllFieldSelected}
      selectedIndex={selectedIndex}
      />
      
    }/>
        <SystemBackdrop
      open={open}
    />
           <CustomizedSnackbars 
            open={snackbarSettings.settings.open.contactUs}
            message={snackbarSettings.settings.message}
            handleClose={handleClose}
            severity={snackbarSettings.settings.severity}
            autoHideDuration={snackbarSettings.settings.autoHideDuration}
            />
    </>
  )
}

export default ContactUs