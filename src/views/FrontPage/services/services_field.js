import React from 'react'
import SystemTypography from '../../../components/Typography/Typography'
import ApplicationCard from '../../../components/Card/Card'
import { CardContent, CardMedia } from '@mui/material'
import AppButton from '../../../components/Buttons/Button'
import Box from '@mui/material/Box'
import ServiceOutlineText from '../../../assets/images/outline-text/service.svg'
import { ServicesData } from '../../../core/utils/helper'
import SystemContainer from '../../../components/Container/Container'

const services_field = () => {
    return (
        <Box id="services" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', backgroundColor: 'rgb(255,255,255)'}}>
            <SystemContainer maxWidth={'lg'}>
            <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem'}}>
            <img src={ServiceOutlineText} alt='service outline'/>
            <SystemTypography variant={'h5'} text={'What We Do?'}/>
            <SystemTypography variant={'subtitle'} text={'We offer developed softwares and budget price services...'} isgutter={true} style={{fontStyle: 'italic', marginBottom: '50px'}}/>
            </Box>
            <Box style={{display: 'flex', gap: '2rem'}}>
            {ServicesData.map((item, index) => {
                return (
                    <>
                        <ApplicationCard key={index} className='card'
                    cardmedia={
                        <CardMedia 
                            component="img"
                            height="240"
                            image={item.img}
                            alt="client"
                            style={{width : '100%'}}
                        />
                    }
                    children={
                        <CardContent>
                            <Box style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
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