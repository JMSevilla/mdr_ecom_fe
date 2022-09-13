import React, {useEffect} from "react";
import { Box } from "@mui/material";
import { ApplicationBar, AppFooter} from "../../../components";
import { termsAndConditionsData } from "../../../core/utils/helper";

const Termsandcondition_field = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ApplicationBar title="Ecommerce" simplified/>
      <Box className='container mx-auto mt-32'>
        {termsAndConditionsData.map((item, index) => {
          const {title, description, moreInfo} = item;
          return (
            <Box className='flex flex-col gap-2'>
              <h1 className='text-xl text-black font-body font-semibold lg:text-2xl' key={index}>{title}</h1>
              {description && (
                <>
                <h1 className='text-lg font-body text-justify lg:text-xl' key={index}>{description}</h1>
                <br/>
                </>
              )}
              {moreInfo && (<>
                {moreInfo.map((item, index) => {
                return (
                  <>
                    <h1 className='text-xl font-body text-justify' key={index}>{item.subDescription}</h1>
                  </>
                )
              })}
              <br/>
              </>)}
            </Box>
          )
        })}
          
      </Box>
      <AppFooter />
    </>
  );
};

export default Termsandcondition_field;
