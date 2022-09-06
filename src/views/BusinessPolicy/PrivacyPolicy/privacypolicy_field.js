import React, {useEffect} from "react";
import { Box } from "@mui/material";
import { ApplicationBar, AppFooter} from "../../../components";
import { privacyPolicyData } from "../../../core/utils/helper";

const Privacypolicy_field = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <AppFooter fixed/>
      </>)

};

export default Privacypolicy_field;
