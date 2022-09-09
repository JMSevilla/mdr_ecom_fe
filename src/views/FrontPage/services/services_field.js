import React from 'react'
import {SystemTypography, ApplicationCard, AppButton, SystemContainer} from '../../../components'
import { CardContent, CardMedia } from '@mui/material'
import Box from '@mui/material/Box'
import ServiceOutlineText from '../../../assets/images/outline-text/service.svg'
import { ServicesData } from '../../../core/utils/helper'
import { Fade } from 'react-reveal'

const services_field = () => {
    return (
        <Box id="services" className='flex flex-col justify-center bg-primary md:h-[100vh] ' >
            <SystemContainer maxWidth={'lg'}>
            <Fade bottom>
            <Box className='flex flex-col items-center gap-5'>
            <img src={ServiceOutlineText} alt='service outline' className='hidden sm:block' />
            <SystemTypography variant={'h5'} text={'What We Do?'}/>
            <SystemTypography variant={'subtitle'} text={'We offer developed softwares and budget price services...'} isgutter={true} style={{fontStyle: 'italic', marginBottom: '50px'}}/>
            </Box>
            </Fade>
            <Box className='md:flex gap-5 '>
            {ServicesData.map((item, index) => {
                return (
                    <>
                        <ApplicationCard key={index} className='my-5 md:mx-0'
                    cardmedia={
                        <CardMedia 
                            component="img"
                            height="240"
                            image={item.img}
                            alt="client"
                            className='w-full '
                        />
                    }
                    children={
                        <CardContent>
                            <Box className='flex flex-col text-center items-center'>
                                <SystemTypography variant={'h5'} text={item.title} isgutter={true}/>
                                <SystemTypography variant={'body'} text={item.description} isgutter={true}/>
                                <AppButton buttonColor={'button-white'} buttonName={'More Details'} variant={'contained'} style={{fontWeight: 600, marginTop: '20px', 
                                 padding: '10px 20px', fontFamily: 'Georgia'}} size="small"/>
                            </Box>
                        </CardContent>
                    }
                />
                    </>
                )
            })}
            </Box>
            </SystemContainer>
        </Box>
      )
}

export default services_field