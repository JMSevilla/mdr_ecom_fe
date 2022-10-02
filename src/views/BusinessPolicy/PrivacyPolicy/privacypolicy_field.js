import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import { ApplicationBar, AppFooter} from "../../../components";
import { privacyPolicyData } from "../../../core/utils/helper";

const Privacypolicy_field = () => {
  const [footerPosition, setFooterPosition] = useState(true)
  useEffect(() => {
    window.addEventListener('resize', () => {
      return window.innerWidth < 1280 ? setFooterPosition(false) : setFooterPosition(true);
    }, [footerPosition])
    window.scrollTo(0, 0);
  }, [footerPosition]);
  return (
    <>
    <ApplicationBar title="Ecommerce" simplified/>
      <Box className='container mx-auto mt-32'>
        {privacyPolicyData.map((item, index) => {
          const {title, description} = item;
          return (
            <Box className='flex flex-col gap-10'>
              <h1 className='text-2xl text-black font-body font-semibold lg:text-3xl text-center' key={index}>{title}</h1>
              {description && (
                <>
                <h1 className='text-lg font-body text-justify lg:text-xl' key={index}>{description}</h1>
                <br/>
                </>
              )}
            </Box>
          )
        })}
          
      </Box>
      <AppFooter fixed={footerPosition}/>
      </>)

};

export default Privacypolicy_field;
