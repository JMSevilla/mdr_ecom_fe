import React from "react";
import { Box, Stack } from "@mui/material";
import SystemContainer from "../Container/Container";
import SystemTypography from "../Typography/Typography";
import Link from "@mui/material/Link";
import { socialAccounts, businessRules } from "../../core/utils/helper";
import { Fade } from "react-reveal";

const AppFooter = ({fixed}) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box
      style={{
        backgroundColor: "rgb(253,249,255)",
        width: "100%",
        height: fixed ? '8vh' : '10vh',
        display: "flex",
        position: fixed ? 'absolute' : 'relative',
        bottom: fixed ? 0 : '',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <SystemContainer
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Fade bottom>
        <Box
          style={{
            display: "flex",
            gap: ".5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          {businessRules.map((item, index) => {
            return (
              <Link
                className='link'
                href={item.link}
                key={index}
                color={"inherit"}
                underline={"none"}
              >
                {item.name}
              </Link>
            );
          })}
        </Stack>

        <Stack
          direction="row"
          style={{
            display: "flex",
            fontSize: "22px",
            gap: "1rem",
            alignItems: "center",
          }}
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
        </Stack>
        </Fade>
      </SystemContainer>
      
    </Box>
  );
};

export default AppFooter;
