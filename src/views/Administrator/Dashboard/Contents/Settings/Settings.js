import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import ProjectCategorySettings from "./SettingsContent/ProjectCategorySettings";
import FormService from "../../../../../core/service/apiservice";
import {
  SystemBackdrop,
  CustomizedSnackbars,
  SystemDialog,
  AppTextField,
} from "../../../../../components";
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
  const [value, setValue] = useState(0);
  const [projectCategory, setProjectCategory] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editCategory, setEditCategory] = useState({
    id: null,
    categoryName: null,
  });
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "",
    severity: "success",
    autoHideDuration: 3000,
  });
  useEffect(() => {
    getAllProjectCategories();
  }, []);
  const getAllProjectCategories = () => {
    FormService.SETTINGS_PRODUCT_GETALL_CATEGORIES().then((response) => {
      const { data } = response;
      setCategories(data);
    });
  };
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, ["isOpen"]: false });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleProjectCategory = (event) => {
    const value = event.currentTarget.value;
    setProjectCategory(value);
  };
  const handleDelete = (id) => {
    const isdelete = window.confirm(
      "Are you sure you want to delete this record ?"
    );
    if (isdelete) {
      setBackdrop(!backdrop);
      FormService.SETTINGS_PRODUCT_DELETE_CATEGORY(id).then((response) => {
        const { data } = response;
        if (data.message == "success_delete") {
          setSnackbar((prev) => ({
            ...prev,
            isOpen: true,
            message: "Successfully Deleted",
            severity: "success",
          }));
          getAllProjectCategories();
          setBackdrop(false);
        }
      });
    }
  };
  const handleSave = () => {
    if (!projectCategory) {
      setSnackbar((prev) => ({
        ...prev,
        isOpen: true,
        message: "Kindly provide project category name",
        severity: "error",
      }));
    } else {
      setBackdrop(!backdrop);
      FormService.SETTINGS_PRODUCT_ADD_CATEGORY(projectCategory).then(
        (response) => {
          const { data } = response;
          if (data.message == "success_product_category") {
            setBackdrop(false);
            setProjectCategory("");
            setSnackbar((prev) => ({
              ...prev,
              isOpen: true,
              message: "Successfully Saved",
              severity: "success",
            }));
            getAllProjectCategories();
          }
        }
      );
    }
  };
  const handleEditCategory = (id, categname) => {
    setOpen(!open);
    setEditCategory({
      ...editCategory,
      ["id"]: id,
      ["categoryName"]: categname,
    });
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
            <ProjectCategorySettings
              handleProjectCategory={handleProjectCategory}
              projectCategory={projectCategory}
              handleSave={handleSave}
              categories={categories}
              handleDelete={handleDelete}
              handleEditCategory={handleEditCategory}
            />
          </TabPanel>
        </Box>
      </Box>
      <SystemBackdrop open={backdrop} />
      <CustomizedSnackbars
        open={snackbar.isOpen}
        message={snackbar.message}
        handleClose={handleSnackbarClose}
        severity={snackbar.severity}
        autoHideDuration={snackbar.autoHideDuration}
      />
      <SystemDialog
        open={open}
        fullWidth={true}
        handleClose={() => setOpen(false)}
        title={"Edit project category"}
        children={
          <>
            <AppTextField
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                width: "100%",
              }}
              placeholder="Edit category name"
              variant={"outlined"}
              label={"Project Category"}
              // handleChange={handleProjectCategory}
              value={editCategory.categoryName}
            />
          </>
        }
        buttonCancelText={"CANCEL"}
        buttonAgreeText={"SAVE"}
      />
    </motion.div>
  );
};

export default Settings;
