import React from 'react'
import SystemTypography from '../../../components/Typography/Typography'
import ApplicationCard from '../../../components/Card/Card'
import { CardContent, CardMedia } from '@mui/material'
import AppButton from '../../../components/Buttons/Button'
import Box from '@mui/material/Box'
import ServiceOutlineText from '../../../assets/images/outline-text/service.svg'
import { ServicesData } from '../../../constants/Services/ServicesData'

const Services = () => {

  return (
    <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4.5rem'}}>
        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem'}}>
        <img src={ServiceOutlineText} alt='service outline'/>
        <SystemTypography variant={'h5'} text={'What We Do?'}/>
        <SystemTypography variant={'subtitle'} text={'We offer developed softwares and budget price services...'} isgutter={true} style={{fontStyle: 'italic'}}/>
        </Box>
        <Box style={{display: 'flex', gap: '2rem'}}>
        {ServicesData.map((item, index) => {
            return (
                <>
                    <ApplicationCard key={index}
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
                        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <SystemTypography variant={'h5'} text={item.title} isgutter={true}/>
                            <SystemTypography variant={'body'} text={item.description} isgutter={true}/>
                            <AppButton buttonName={'Learn More'} style={{marginTop: '20px'}} size="small"/>
                        </Box>
                    </CardContent>
                }
            />
                </>
            )
        })}
        </Box>
    </Box>
  )
}

export default Services