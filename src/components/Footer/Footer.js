import React from "react";
import { Box, Stack } from "@mui/material";
import SystemContainer from "../Container/Container";
import SystemTypography from "../Typography/Typography";
import Link from "@mui/material/Link";
import { socialAccounts, businessRules } from "../../core/utils/helper";

const AppFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgb(253,249,255)",
        width: "100%",
        height: "10vh",
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SystemContainer
        style={{ display: "flex", justifyContent: "space-between" }}
      >
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
                href={item.link}
                key={index}
                color={"inherit"}
                underline={"hover"}
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
      </SystemContainer>
    </Box>
  );
};

export default AppFooter;
