import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from '../../../../assets/images/logo/modernresolve.png';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { boSidebarData } from "../../../../core/utils/helper";

const BOSidebar = (props) => {
    const {open, handleDrawerClose, theme, handleClick, dropDown, Drawer, DrawerHeader} = props;
  return (
    <>
     {/* SIDEBAR STARTS HERE*/}
     <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#051e34",
            color: "white",
          },
        }}
      >
        {/* SIDEBAR WHOLE CONTENT */}
        <Box className="flex flex-col justify-between h-full">
          {/* HEADER and SIDEBAR TABS */}
          <Box className="flex flex-col">
            <DrawerHeader>
              <Box className="flex gap-2 items-center">
                <img src={Logo} style={{ height: "38px" }} alt="logo" />
                <h3 className="font-logo font-medium text-white text-xl">
                  Modern Resolve
                </h3>
              </Box>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon style={{ color: "white" }} />
                ) : (
                  <ChevronLeftIcon style={{ color: "white" }} />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider className="bg-sideBarTabHover" />
            <List style={{ marginTop: "5px" }}>
              {boSidebarData.map((text, index) => (
                <Box className="flex flex-col items-center">
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      display: "block",
                      background: "#122c44",
                      margin: "4px 0px",
                      borderRadius: "10px",
                      width: "90%",
                      "&:hover": {
                        backgroundColor: "#253d53",
                      },
                    }}
                  >
                    {text.dropDown ? (
                      <>
                        {/* DROPDOWN */}
                        <ListItemButton onClick={handleClick}>
                          <ListItemIcon>
                            <InboxIcon className="text-white" />
                          </ListItemIcon>
                          <ListItemText primary="Inbox" />
                          {dropDown ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={dropDown} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <StarBorder className="text-white" />
                              </ListItemIcon>
                              <ListItemText primary="Starred" />
                            </ListItemButton>
                          </List>
                        </Collapse>
                      </>
                    ) : (
                      <>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              color: "white",
                            }}
                          >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText
                            primary={text.title}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </>
                    )}
                  </ListItem>
                </Box>
              ))}
            </List>
            <Divider className="bg-sideBarTabHover" />
            <List>
              {["Our Products", "Settings"].map((text, index) => (
                <Box className="flex flex-col items-center">
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      display: "block",
                      background: "#122c44",
                      margin: "4px 0px",
                      borderRadius: "10px",
                      width: "90%",
                      "&:hover": {
                        backgroundColor: "#253d53",
                      },
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Box>
              ))}
            </List>
          </Box>
          {/* SIDEBAR HEADER AND CONTENT END */}
          {/* SIDEBAR FOOTER */}
          <Box className="flex flex-col py-2 gap-2">
            <Divider className="bg-sideBarTabHover" />
            <h3
              className={
                open ? "block font-serif text-white text-center" : "hidden"
              }
            >
              All rights Reserved MDR 🔥
            </h3>
          </Box>
          {/* SIDBAR FOOTER END */}
        </Box>
      </Drawer>
      {/* SIDEBAR ENDS HERE */}
    </>
  )
}

export default BOSidebar