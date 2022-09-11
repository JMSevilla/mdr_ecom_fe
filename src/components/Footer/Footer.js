import React from "react";
import { Box, Stack } from "@mui/material";
import SystemContainer from "../Container/Container";
import SystemTypography from "../Typography/Typography";
import Link from "@mui/material/Link";
import { socialAccounts, businessRules } from "../../core/utils/helper";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";

const AppFooter = ({fixed}) => {
  const date = new Date();
  const year = date.getFullYear();
  const history = useHistory();
  const navigateTermsAndConditions = () => {
    history.push(appRouter.TermsAndConditions.path);
  };
  const navigatePrivacyPolicy = () => {
    history.push(appRouter.PrivacyPolicy.path);
  };

  return (
    <Box className={`${fixed ?' absolute h-[8vh]' : ' relative h-[8vh]' }  w-full items-center justify-center my-4`} >
      
      <SystemContainer
        style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box className='mx-auto flex flex-col sm:flex-row md:gap-10 gap-y-2'>

        <Box className=' flex gap-5 items-center justify-center' >
          <SystemTypography
            variant={"h6"}
            text={`@ ${year} Modern Resolve. All rights Reserved`}
            style={{ fontSize: "18px" }}
          />
        </Box>

        <Stack
          direction="row"
          style={{
            display: "flex",
            fontSize: "18px",
            gap: "1rem",
            alignItems: "center",
          }}
          >
            <Box className='flex flex-col  mx-auto items-center justify-center sm:flex-row '>
          {businessRules.map((item, index) => {
            return (
              <Link
                className='link'
                onClick={eval(item.link)}
                key={index}
                color={"inherit"}
                underline={"none"}
                style={{cursor: 'pointer'}}
              >
                {item.name}
              </Link>
            );
          })}
          </Box>
        </Stack>
        
        <Stack
          direction="row"
          style={{
            display: "flex",
            fontSize: "22px",
            gap: "1rem",
            alignItems: "center",
          }}>
            <Box className="items-center justify-center mx-auto flex gap-1">
          {socialAccounts.map((item, index) => {
            return (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                color={"inherit"}
              >
                  {item.icon}
              </Link>
            );
          })}
            </Box>
        </Stack>
        </Box>
      </SystemContainer>
      
    </Box>
  );
};

export default AppFooter;
