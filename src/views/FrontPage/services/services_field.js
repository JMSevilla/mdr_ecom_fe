import React from 'react'
import {SystemTypography, ApplicationCard, AppButton, SystemContainer} from '../../../components'
import { CardContent, CardMedia } from '@mui/material'
import Box from '@mui/material/Box'
import ServiceOutlineText from '../../../assets/images/outline-text/service.svg'
import { ServicesData } from '../../../core/utils/helper'
import { Fade } from 'react-reveal'

const services_field = () => {
    return (
    <>
        <Box id="services" className='flex flex-col justify-center bg-primary h-auto py-10 lg:h-[100vh] lg:py-0'>
             <div className="blur hidden lg:block" style={{ top: "-10%", right: "0" }}></div>
             <div className="blur hidden lg:block" style={{ bottom: "30%", left: "0" }}></div>
            <Box className='container mx-auto'>
                <Fade bottom>
                <Box className='flex flex-col items-center text-center gap-0.5'>
                <img src={ServiceOutlineText} alt='about us outline text' className='hidden sm:block'/>
                <h5 className='text-3xl font-semibold sm:text-2xl'>What We Do?</h5>
                <SystemTypography variant={'subtitle'} text={'We offer developed softwares and budget price services...'} isgutter={true} style={{fontStyle: 'italic', marginBottom: '70px'}}/>
                </Box>
                </Fade>
                <Box className="grid gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {ServicesData.map((item, index) => {
                return (
                    <>
                    <ApplicationCard
                        className="cursor-pointer"
                        key={index}
                        cardmedia={
                            <img src={item.img} alt='' style={{height: 300, width: 300}} className='hover:scale-105 duration-100 w-full'/>
                        }
                        children={
                        <>
                            <h1 className="text-2xl font-main font-semibold text-center mt-4">
                            {item.title}
                            </h1>
                            <CardContent>
                                <Box className='flex flex-col justify-center text-center gap-4'>
                                <h1 className='font-body'>{item.description}</h1>
                                <AppButton
                                buttonColor="button-white"
                                buttonName={"View Details"}
                                style={{
                                    width: "100%",
                                }}
                                variant={"contained"}   
                                size={"medium"}
                                />
                                </Box>
                            </CardContent>
                        </>
                        }
                    />
                    </>
                );
                })}
            </Box>
        </Box>
        </Box>
        <Box className="curve hidden lg:block"></Box>
        </>
      )
}

export default services_field