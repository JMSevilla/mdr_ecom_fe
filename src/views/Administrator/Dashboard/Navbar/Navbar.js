import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";


const AdminNavbar = (props) => {
    const {open, handleDrawerOpen, AppBar} = props;
  return (
    <>
      {/* NAVBAR START*/}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="flex items-center justify-between w-full">
            <h3 className="text-2xl font-medium font-body text-white">
              Hi, Administrator
            </h3>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cj9fuTsqPCwvnG-IqN3HAVb9jMa0BD5uxQ&usqp=CAU"
            />
          </Box>
        </Toolbar>
      </AppBar>
      {/* NAVBAR END */}
    </>
  );
};

export default AdminNavbar;
