import React from "react";
import { Box, Stack } from "@mui/material";
import SystemContainer from "../Container/Container";
import SystemTypography from "../Typography/Typography";
import Link from "@mui/material/Link";
import { socialAccounts, businessRules } from "../../core/utils/helper";
import { Fade } from "react-reveal";
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
    <Box
      // style={{
      //   backgroundColor: "rgb(253,249,255)",
      //   width: "100%",
      //   height: fixed ? '8vh' : '10vh',
      //   display: "flex",
      //   position: fixed ? 'absolute' : 'relative',
      //   bottom: fixed ? 0 : '',
      //   flexDirection: "row",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className='w-full bg-primary md:flex justify-center items-center' 
    >
      
      <Box
        // style={{ display: "flex", justifyContent: "space-between" }}
        className="container gap-2 md:flex justify-center md:justify-between md:gap-20 items-center my-2"
      >
        <Fade bottom>
        <Box
          // style={{
          //   display: "flex",
          //   gap: ".5rem",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
          className=' flex gap-5 items-center justify-center' 
        >
          <SystemTypography
            variant={"h6"}
            text={`@ ${year} Modern Resolve. All rights Reserved`}
            style={{ fontSize: "18px" }}
          />
        </Box>

        <Box
          // direction="row"
          // style={{
          //   display: "flex",
          //   fontSize: "18px",
          //   gap: "1rem",
          //   alignItems: "center",
          // }}
          className='flex gap-2 items-center justify-center'
        >
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

        <Box
          className="flex text-lg items-center gap-1 justify-center"
        >
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
        </Fade>
      </Box>
      
    </Box>
  );
};

export default AppFooter;
