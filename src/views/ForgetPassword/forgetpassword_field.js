import React, {useState} from 'react'
import {ApplicationBar, SystemContainer, AppFooter, SystemTypography, ApplicationCard, AppTextField, SystemSelect, AppButton} from '../../components';
import { Box } from '@mui/material';
import Lottie from "react-lottie";
import * as forgetPasswordLogo from '../../assets/images/forgetpassword/forgetpassword.json'
import * as securityCode from '../../assets/images/forgetpassword/securitycode.json'
import forgetPasswordIcon from '../../assets/images/forgetpassword/forgetpasswordlogo.jpg'
import { security_questions } from '../../core/utils/helper';
import { motion } from 'framer-motion';

const style = {
    width: '345px',
    height: '322px'
  };

const ForgetPassword_field = (props) => {
  const {setOpen} = props;
  const [disableField, setDisableField] = useState(false);
  const [optionOne, setOptionOne] = useState(true);
  const [animationLogo, setAnimationLogo] = useState(forgetPasswordLogo);
  const [togglePasswordOptionOne, setTogglePasswordOptionOne] = useState(false);
  const [togglePasswordOptionTwo, setTogglePasswordOptionTwo] = useState(false);

  const handleTogglePasswordOptionOne = () => {
    setOpen(true)
    setTimeout(() => {
        setTogglePasswordOptionOne(!togglePasswordOptionOne)
        setDisableField(!disableField)
        setOpen(false)
    }, 2000)
    
  }
  const handleTogglePasswordOptionTwo = () => {
    setOpen(true)
    setTimeout(() => {
        setTogglePasswordOptionTwo(!togglePasswordOptionTwo);
        setDisableField(!disableField)
        setOpen(false)
    }, 2000) 
  }

  const handleAnotherOption = () => {
    setOptionOne(!optionOne);
    if(animationLogo === forgetPasswordLogo){
        setAnimationLogo(securityCode);
    } else {
        setAnimationLogo(forgetPasswordLogo);
    }
  }

  const loadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationLogo.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const FirstOption = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <ApplicationCard 
                children= {
                    <Box style={{display: 'flex', alignItems: 'center', gap: '5rem', padding: '60px 60px'}}>
                        <Lottie
                        options={loadingAnimation}
                        style={style}
                        height={300}
                        width={300}
                        />
                        <Box style={{display: 'flex', flexDirection: 'column'}}>
                            <Box style={{display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '0.5rem'}}>
                                <img src={forgetPasswordIcon} alt='forgetpassword icon' style={{width: '90px'}}/>
                                <Box style={{display: 'flex', flexDirection: 'column'}}>
                                    <SystemTypography variant='h6' text='Account Recovery' style={{fontSize: '30px', fontWeight: 600, textAlign: 'center'}}/> 
                                    <SystemTypography variant='subtitle' text='Security Question and Answer' style={{fontWeight: 600, fontStyle: 'italic', textAlign: 'center'}}/> 
                                </Box>
                            </Box>
                            <AppTextField
                                disabled={disableField}
                                type={'email'}
                                label={"Email Address"}
                                variant="outlined"
                                style={{ width: "400px", marginBottom: "10px" }}
                            />
                             <SystemSelect 
                                disabled={disableField}
                                selectionArray={security_questions}
                                selectionTitle={'Security Answer'}
                                style={{width: '400px', marginBottom: '10px'}}
                                />
                             <AppTextField
                                disabled={disableField}
                                type={'text'}
                                label={"Security Answer"}
                                placeholder={'Enter your Answer'}
                                variant="outlined"
                                style={{ width: "400px", marginBottom: "20px" }}
                            />
                            {togglePasswordOptionOne ? (
                                <>
                                <AppTextField
                                    type={'password'}
                                    label={"New Password"}
                                    placeholder={'Enter new password'}
                                    variant="outlined"
                                    style={{ width: "400px", marginBottom: "10px"}}
                                />
                                <AppTextField
                                    type={'password'}
                                    label={"Confirm Password"}
                                    placeholder={'Re-enter password'}
                                    variant="outlined"
                                    style={{ width: "400px", marginBottom: "10px" }}
                                />
                                </>
                            ) : (<></>)}
                            
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <AppButton handleClick={handleTogglePasswordOptionOne} buttonColor={togglePasswordOptionOne ? 'button-black' : 'button-white'} variant='contained' 
                                buttonName={togglePasswordOptionOne ? 'Change Password' : 'Continue'} style={{marginTop: '10px'}}/>
                                <AppButton buttonName={togglePasswordOptionOne ? '' : 'Choose another way?'} handleClick={handleAnotherOption} style={{marginTop: '10px', textTransform:'none', color: 'black'}}/>
                            </Box>
                        </Box>
                        
                    </Box>
                }
            
            />
        </motion.div>
    )
  }
  const SecondOption = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <ApplicationCard 
                children= {
                    <Box style={{display: 'flex', alignItems: 'center', gap: '5rem', padding: '60px 60px'}}>
                        <Box style={{display: 'flex', flexDirection: 'column', maxWidth: '400px'}}>
                            <Box style={{display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '0.5rem'}}>
                                <img src={forgetPasswordIcon} alt='forgetpassword icon' style={{width: '90px'}}/>
                                <Box style={{display: 'flex', flexDirection: 'column'}}>
                                    <SystemTypography variant='h6' text='Account Recovery' style={{fontSize: '30px', fontWeight: 600, textAlign: 'center'}}/> 
                                    <SystemTypography variant='subtitle' text='Code will be sent to your email' style={{fontWeight: 600, textAlign: 'center'}}/> 
                                </Box>
                            </Box>
                            <SystemTypography variant='subtitle' 
                            text="We want to make sure it's really you. In order to further verify your identity, enter the verification code that was sent to emailname@gmail.com"
                            style={{textAlign: 'center', marginBottom: '20px'}}
                            />
                            <AppTextField
                                disabled={disableField}
                                type={'text'}
                                variant="outlined"
                                style={{ width: "400px", marginBottom: "15px" }}
                            />
                            {togglePasswordOptionTwo ? (
                                <>
                                <AppTextField
                                    type={'password'}
                                    label={"New Password"}
                                    placeholder={'Enter new password'}
                                    variant="outlined"
                                    style={{ width: "400px", marginBottom: "10px"}}
                                />
                                <AppTextField
                                    type={'password'}
                                    label={"Confirm Password"}
                                    placeholder={'Re-enter password'}
                                    variant="outlined"
                                    style={{ width: "400px", marginBottom: "10px" }}
                                />
                                </>
                            ) : (<></>)}
                            
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <AppButton handleClick={handleTogglePasswordOptionTwo} buttonColor={togglePasswordOptionTwo ? 'button-black' : 'button-white'} variant='contained' 
                                buttonName={togglePasswordOptionTwo ? 'Change Password' : 'Resend Code'} style={{marginTop: '10px'}}/>
                                <AppButton buttonName={togglePasswordOptionTwo ? '' : 'Choose another way?'} handleClick={handleAnotherOption} style={{marginTop: '10px', textTransform:'none', color: 'black'}}/>
                            </Box>
                        </Box>
                        <Lottie
                        options={loadingAnimation}
                        style={style}
                        height={300}
                        width={300}
                        />
                    </Box>
                }
            
            />
        </motion.div>
    )
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <ApplicationBar title='Ecommerce' simplified/>
        <SystemContainer maxWidth={'lg'} style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {optionOne ? (
                <>
                    <FirstOption/>
                </>
               ) : ( 
                <>
                    <SecondOption/>
                </>
                )}
            
        </SystemContainer>
    <AppFooter fixed/>
    </motion.div>
  )
}

export default ForgetPassword_field