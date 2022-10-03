import React from 'react'
import {Box} from '@mui/material';
import {AppTextField, AppButton} from '../../../components';
import contactOutlineText from '../../../assets/images/outline-text/contact.svg';
import { contactUsData } from '../../../core/utils/helper';
import { Fade } from 'react-reveal'

const ContactUs_Field = (props) => {
  const {allFieldSelected, setAllFieldSelected, selectedIndex, setSelectedIndex, handleContactUsSubmit, handleChangeFullname, handleChangeContactUsEmail, handleChangeSubject, handleChangeMessage} = props;
  const { fieldSettings } = allFieldSelected[3]
  return (
    <Box id="contactus" className='bg-none section h-[50%] md:h-[90%] sm:bg-contactUsBackground sm:bg-cover sm:bg-no-repeat'>
    <Box className="container mx-auto">
      {/* section title */}
      <Fade bottom>
        <Box className="flex flex-col items-center text-center">
        <img src={contactOutlineText} alt='about us outline text' className='hidden sm:block'/>
        <h5 className='text-3xl font-semibold sm:text-2xl'>Do You Have Any Questions?</h5>
          <p className="subtitle text-black">
            You can directly connect us from here, Just fill up the
            information below, We are very responsive to messages...
          </p>
        </Box>
      </Fade>
      <Box className="flex flex-col items-center lg:items-start lg:gap-x-8 lg:flex-row">
        {/* INFO */}
        <Box className="flex flex-1 flex-col space-y-8 mb-12 lg:items-left lg:justify-start lg:mb-0 lg:pt-2 lg:text-left lg:items-start">
          {contactUsData.map((item, index) => {
            const { icon, title, subtitle, description } = item;
            return (
              <Box className="flex lg:flex-row gap-x-4" key={index}>
                <Box className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                  {icon}
                </Box>
                <Box>
                  <h4 className="font-body font-semibold text-xl mb-1 text-black">
                    {title}
                  </h4>
                  <p className="mb-1 text-black">
                    {subtitle}
                  </p>
                  <p className="text-accent font-normal">{description}</p>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className='space-y-4 w-full max-w-[780px]'>
        <Box className="flex flex-col gap-6 lg:flex-row w-full lg:gap-8">
          <Box className="w-full">
            <AppTextField
              className="input"
              name="fullname"
              type="text"
              value={fieldSettings.contactUsFormObj.fullname}
              placeholder="Your Full Name"
              handleChange={(e) => handleChangeFullname(e)}
              texthelper={fieldSettings.error_provider_message.epm_fullname}
              iserror={fieldSettings.errorProvider.error_fullname}
            />
          </Box>
          <Box className="w-full">
            <AppTextField
              className="input"
              name="email"
              type="email"
               value={fieldSettings.contactUsFormObj.email}
              placeholder="Your Email"
              handleChange={(e) => handleChangeContactUsEmail(e)}
              texthelper={fieldSettings.error_provider_message.epm_email}
              iserror={fieldSettings.errorProvider.error_email}
            />
          </Box>
        </Box>
        <AppTextField
          type="text"
           value={fieldSettings.contactUsFormObj.subject}
          name="subject"
          className="input"
          placeholder="Subject"
          handleChange={(e) => handleChangeSubject(e)}
          texthelper={fieldSettings.error_provider_message.epm_subject}
          iserror={fieldSettings.errorProvider.error_subject}
        />
        <AppTextField
          className="textarea"
          name="message"
           value={fieldSettings.contactUsFormObj.message}
          placeholder="Your message"
          handleChange={(e) => handleChangeMessage(e)}
          ismultiLine={true}
          rows={6}
          texthelper={fieldSettings.error_provider_message.epm_message}
          iserror={fieldSettings.errorProvider.error_message}
        />
        <Box className='w-[160px]'>
        <AppButton variant='contained' handleClick={handleContactUsSubmit} buttonName={'Send Message'} 
         buttonColor='button-black' 
         style={{fontWeight: 600, marginBottom:'10px', padding: '12px 20px'}}/>
         </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default ContactUs_Field