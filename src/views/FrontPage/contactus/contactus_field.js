import React from 'react'
import {Box} from '@mui/material';
import {SystemContainer, SystemTypography, AppTextField, SystemGrid, AppButton} from '../../../components';
import contactOutlineText from '../../../assets/images/outline-text/contact.svg';
import { contactUsData } from '../../../core/utils/helper';
import contactUsBg from '../../../assets/images/contactus/contactUsBg.jpg';

const ContactUs_Field = () => {
  return (
    <Box id='contactus' style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', 
    backgroundImage: `url(${contactUsBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <SystemContainer maxWidth={'lg'}>
            {/* contact us content */}
            <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {/* title and subtitle */}
                <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem'}}>
                  <img src={contactOutlineText} alt='contact us outline text'/>
                  <SystemTypography variant='h5' text='Do You Have Any Questions?'/>
                  <SystemTypography variant={'subtitle'} 
                  text={'You can directly connect us from here, Just fill up the information below. We are very responsive to messages...'} 
                  isgutter={true} style={{textAlign:'center', maxWidth: '520px',fontStyle: 'italic', marginBottom: '60px'}}/>
                </Box>
                {/* end of title and subtitle */}
                {/* contact details and contact fields */}
                <Box style={{display: 'flex', gap: '5rem', width: '100%'}}>
                    {/* contact details data */}
                    <Box style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                            {contactUsData.map((item, index) => {
                                return (
                                    <>
                                    <Box style={{display: 'flex', gap: '1rem'}}>
                                        <Box style={{marginTop: '5px'}}>
                                        {item.icon}
                                        </Box>
                                        <Box style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}} key={index}>
                                            <SystemTypography text={item.title} variant='h6' style={{fontWeight: 600}}/>
                                            <SystemTypography text={item.subtitle} variant='subtitle1' style={{fontSize: '18px'}}/>
                                            <SystemTypography text={item.description} variant='subtitle1' style={{fontWeight: 600,color: 'red'}}/>
                                        </Box>
                                    </Box>
                                    </>
                                )
                            })}
                    </Box>
                    {/* end of contact details data */}
                    {/* contact fields data */}
                    <Box style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <SystemGrid rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}
                        GridItems={[
                            {
                                childrenId: 1,
                                children : <AppTextField
                                style={{width: '350px'}}
                                placeholder='Your Full Name'
                                variant={'outlined'}
                                />
                            },                                    
                            {
                                childrenId: 2,
                                children : <AppTextField
                                style={{width: '350px'}}
                                placeholder='Email Address'
                                variant={'outlined'}
                                />
                            }                                    
                            ]
                            }
                        />
                        <AppTextField
                        style={{width: '725px'}}
                        placeholder='Subject'
                        variant={'outlined'}
                        />
                        <AppTextField
                        style={{width: '725px'}}
                        placeholder='Message'
                        variant={'outlined'}
                        ismultiLine={true}
                        rows={6}
                        />
                        <Box style={{width: '160px'}}>
                        <AppButton variant='contained' buttonName={'Send Message'} 
                        buttonColor='button-black' 
                        style={{fontWeight: 600, marginTop: '20px', padding: '12px 20px'}}/>
                        </Box>
                    </Box>
                    {/* end of contact fields data */}
                </Box>
                {/* end of contact details and contact fields */}
            </Box>
            {/* end of contact us content */}
        </SystemContainer>
    </Box>
  )
}

export default ContactUs_Field