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
    <Box className={`${fixed ?' absolute h-[8vh] bottom-0' : 'relative h-[8vh]' } w-full flex items-center text-center py-24 sm:py-12`}>
      <Box className='container mx-auto'>
        <Box className='flex flex-col justify-between gap-y-2 mb-4 sm:mb-0 sm:flex-row md:gap-10'>
        <Box className=' flex gap-5 justify-center'>
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
            <Box className='flex flex-col  mx-auto items-center justify-center gap-4 sm:flex-row'>
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
            <Box className="items-center justify-center mx-auto flex gap-4">
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

      </Box>
    </Box>
  );
};

export default AppFooter;
