import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

// for tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AddUser from "./UserMgmtContent/AddUser";
import UsersList from './UserMgmtContent/UsersList';

// for tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserMgmt = () => {
  // for tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className="flex flex-col h-full gap-4">
        {/* title */}
        <Box className="flex justify-between items-center">
          <h1 className="text-2xl font-bold font-main text-black uppercase">
            User Management
          </h1>
        </Box>
        {/* TAB CONTENT */}
        <Box className="w-auto lg:w-full">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Users List" {...a11yProps(0)} />
              <Tab label="Add New User" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <UsersList />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddUser />
          </TabPanel>
        </Box>
      </Box>
    </motion.div>
  );
};

export default UserMgmt;
