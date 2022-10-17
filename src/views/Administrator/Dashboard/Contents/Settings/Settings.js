import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import ProjectCategorySettings from "./SettingsContent/ProjectCategorySettings";

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

const Settings = () => {
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
        <Box className="flex justify-between items-center">
          <h1 className="text-2xl font-bold font-main text-black uppercase">
            Settings
          </h1>
        </Box>
        <Box className="w-auto lg:w-full">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Settings Overview" {...a11yProps(0)} />
              <Tab label="Project Category" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* <UsersList /> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProjectCategorySettings />
          </TabPanel>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Settings;
