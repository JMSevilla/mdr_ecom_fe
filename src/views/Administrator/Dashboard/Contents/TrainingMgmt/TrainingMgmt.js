import React, { useState, useEffect } from "react";
import { Box, Chip, IconButton, Menu, MenuItem, Popover } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import AddTraining from "./TrainingMgmtContent/AddTraining";
import TrainingList from "./TrainingMgmtContent/TrainingList";
import FormService from "../../../../../core/service/apiservice";
import {
  SystemBackdrop,
  CustomizedSnackbars,
  SystemDialog,
  AppTextField,
  AppButton,
  SystemGrid,
  SystemContainer,
  SystemSelect,
} from "../../../../../components";
import { storage } from "../../../../../firebase";
import ToastMessage from "../../../../../core/utils/toastUtility";

import FeatureSpiels from "../../../../../core/Spiels/FeatureSpiels";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import axios from "axios";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  trainingCategory,
  trainingStatus,
  trainingCareerLevel,
} from "../../../../../core/utils/helper";

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

const TrainingManagement = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trainingValues, setTrainingValues] = useState({
    title: "",
    category: "",
    status: "",
    description: "",
    days: "",
    level: "",
    proctor: "",
    capacity: "",
    imgurl: "",
  });
  const [backdrop, setBackdrop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const moreActions = Boolean(anchorEl);
  const [dialogEdit, setDialogEdit] = useState(false);
  const [initTraining, setInitTraining] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const handleChangeTraining = (fieldName) => (event) => {
    setTrainingValues({
      ...trainingValues,
      [fieldName]: event.target.value,
    });
  };
  const [trainingRows, setTrainingRows] = useState([]);
  useEffect(() => {
    getAllTrainings();
  }, []);
  const handleMoreActions = (event, rows) => {
    setAnchorEl(event.currentTarget);
    setInitTraining({ ...initTraining, ...rows.row });
  };
  const handleChangeInitTraining = (fieldName) => (event) => {
    setInitTraining({ ...initTraining, [fieldName]: event.target.value });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialogEdit = () => {
    setDialogEdit(!dialogEdit);
  };
  const columns = [
    {
      field: FeatureSpiels.trainingPropertyNames.trainingTitle,
      headerName: FeatureSpiels.trainingFieldsLabels.Title,
      flex: 1.5,
      width: 100,
    },
    {
      field: FeatureSpiels.trainingPropertyNames.trainingCategory,
      headerName: FeatureSpiels.trainingFieldsLabels.Category,
      flex: 1.0,
      sortable: false,
      headerClassName: "",
    },
    {
      field: FeatureSpiels.trainingPropertyNames.trainingDays,
      headerName: FeatureSpiels.trainingFieldsLabels.Days,
      flex: 1.0,
    },
    {
      field: FeatureSpiels.trainingPropertyNames.trainingImgURL,
      headerName: FeatureSpiels.trainingFieldsLabels.ImgUrl,
      flex: 1.0,
      renderCell: (params) => (
        <>
          <img
            style={{ width: "20%", height: "auto" }}
            src={params.row.trainingImgURL}
            alt="Training banners"
          />
        </>
      ),
    },
    {
      field: FeatureSpiels.trainingPropertyNames.trainingStatus,
      headerName: FeatureSpiels.trainingFieldsLabels.Status,
      flex: 1.0,
      renderCell: (params) => (
        <>
          {params.row.trainingStatus == "live" && (
            <Chip label="LIVE" variant="outlined" color="success" />
          )}
        </>
      ),
    },
    {
      field: FeatureSpiels.trainingPropertyNames.trainingLevel,
      headerName: FeatureSpiels.trainingFieldsLabels.Level,
      flex: 1.0,
      renderCell: (params) => (
        <>
          {params.row.trainingLevel == "code_dummy" && (
            <Chip label="Dummy" color="warning" />
          )}
        </>
      ),
    },
    {
      headerName: FeatureSpiels.trainingFieldsLabels.actions,
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <>
          <IconButton
            aria-controls={moreActions ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={moreActions ? "true" : undefined}
            onClick={(e) => handleMoreActions(e, params)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={moreActions}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleDialogEdit()}>Edit</MenuItem>
            {params.row.trainingStatus == "live" ? (
              <>
                <MenuItem>Stop live</MenuItem>
                <MenuItem>Done</MenuItem>
              </>
            ) : params.row.trainingStatus == "closed" ? (
              <>
                <MenuItem>Open</MenuItem>
                <MenuItem onClick={() => setDeleteModal(!deleteModal)}>
                  Remove
                </MenuItem>
              </>
            ) : params.row.trainingStatus == "open" ? (
              <>
                <MenuItem>Done</MenuItem>
                <MenuItem>Close</MenuItem>
                <MenuItem onClick={() => setDeleteModal(!deleteModal)}>
                  Remove
                </MenuItem>
              </>
            ) : (
              params.row.trainingStatus == "done" && (
                <>
                  <MenuItem onClick={() => setDeleteModal(!deleteModal)}>
                    Remove
                  </MenuItem>
                </>
              )
            )}
          </Menu>
        </>
      ),
    },
  ];
  // setDeleteModal(!deleteModal)
  const handleShowDelete = () => {
    console.log(initTraining);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveEdit = () => {
    setDialogEdit(false);
    var data = new FormData();
    data.append("id", initTraining.id);
    data.append("title", initTraining.trainingTitle);
    data.append("category", initTraining.trainingCategory);
    data.append("days", initTraining.trainingDays);
    data.append("status", initTraining.trainingStatus);
    data.append("level", initTraining.trainingLevel);
    const resolveWithSomeData = new Promise((resolve) =>
      setTimeout(() => {
        const response = axios.post(
          process.env.REACT_APP_API_DEV_URL +
            "training-management/edit-trainings",
          data
        );
        return response.then((repository) => {
          const { data } = repository;
          if (data == "success_edit_training") {
            resolve("Successfully Saved Training");
            getAllTrainings();
          }
        });
      }, 3000)
    );
    ToastMessage.promise(resolveWithSomeData);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `training/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const inprogress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(inprogress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setTrainingValues({
            ...trainingValues,
            ["imgurl"]: downloadURL,
          });
          console.log(trainingValues);
        });
      }
    );
  };

  const getAllTrainings = () => {
    const response = axios.get(
      process.env.REACT_APP_API_DEV_URL + "get-all-trainings"
    );
    return response.then((res) => {
      const { data } = res;
      const finalData = data.map((item) => {
        return {
          id: item.id,
          trainingTitle: item.trainingTitle,
          trainingCategory: item.trainingCategory,
          trainingDays: item.trainingDays,
          trainingImgURL: item.trainingImgURL,
          trainingStatus: item.trainingStatus,
          trainingLevel: item.trainingLevel,
        };
      });
      setTrainingRows(finalData);
    });
  };

  const handleSaveTraining = () => {
    setBackdrop(!backdrop);
    const data = new FormData();
    data.append("title", trainingValues.title);
    data.append("category", trainingValues.category);
    data.append("description", trainingValues.description);
    data.append("days", trainingValues.days);
    data.append("imgurl", trainingValues.imgurl);
    data.append("status", trainingValues.status);
    data.append("level", trainingValues.level);
    data.append("proctor", trainingValues.proctor);
    data.append("capacity", trainingValues.capacity);
    const response = axios.post(
      process.env.REACT_APP_API_DEV_URL + "administrator/training-add",
      data
    );
    return response
      .then((res) => {
        const { data } = res;
        if (data.message == "success_training_add") {
          setBackdrop(false);
          ToastMessage.success(
            "Successfully saved training",
            "top-right",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "dark"
          );
          getAllTrainings();
        }
      })
      .catch((err) => {
        ToastMessage.error(
          "Error upon saving",
          "top-right",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "dark"
        );
        console.log(err);
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
            Training Management
          </h1>
        </Box>
        <Box className="w-auto lg:w-full">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Trainings Overview" {...a11yProps(0)} />
              <Tab label="Add Training" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TrainingList rows={trainingRows} columns={columns} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddTraining
              handleChangeTraining={handleChangeTraining}
              trainingValues={trainingValues}
              progress={progress}
              handleUpload={handleUpload}
              handleSaveTraining={handleSaveTraining}
            />
          </TabPanel>
        </Box>
      </Box>
      <SystemBackdrop open={backdrop} />
      <SystemDialog
        open={dialogEdit}
        handleClose={() => setDialogEdit(!dialogEdit)}
        title={"Edit Training"}
        buttonCancelText={"CANCEL"}
        buttonAgreeText={"SAVE"}
        handleDisagree={() => setDialogEdit(!dialogEdit)}
        fullWidth={true}
        maxWidth={"md"}
        handleAgree={handleSaveEdit}
        children={
          <>
            <SystemContainer style={{ marginTop: "20px" }}>
              <SystemGrid
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                GridItems={[
                  {
                    childrenId: 1,
                    children: (
                      <>
                        <AppTextField
                          style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            width: "100%",
                          }}
                          variant={"outlined"}
                          label={"Training Title"}
                          value={initTraining.trainingTitle}
                          handleChange={handleChangeInitTraining(
                            "trainingTitle"
                          )}
                        />
                      </>
                    ),
                  },
                  {
                    childrenId: 2,
                    children: (
                      <>
                        <SystemSelect
                          value={initTraining.trainingCategory}
                          selectionArray={trainingCategory}
                          selectionLabel={"Select Training Category"}
                          selectionTitle={"Choose Training Category"}
                          placeholder={"Choose Training Category"}
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeInitTraining(
                            "trainingCategory"
                          )}
                        />
                      </>
                    ),
                  },
                ]}
              />
              <SystemGrid
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                lg={4}
                GridItems={[
                  {
                    childrenId: 1,
                    children: (
                      <>
                        <AppTextField
                          style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            width: "100%",
                          }}
                          variant={"outlined"}
                          label={"Days"}
                          value={initTraining.trainingDays}
                          handleChange={handleChangeInitTraining(
                            "trainingDays"
                          )}
                        />
                      </>
                    ),
                  },
                  {
                    childrenId: 2,
                    children: (
                      <>
                        <SystemSelect
                          value={initTraining.trainingStatus}
                          selectionArray={trainingStatus}
                          selectionLabel={"Select Training Status"}
                          selectionTitle={"Choose Training Status"}
                          placeholder={"Choose Training Status"}
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeInitTraining(
                            "trainingStatus"
                          )}
                        />
                      </>
                    ),
                  },
                  {
                    childrenId: 3,
                    children: (
                      <>
                        <SystemSelect
                          value={initTraining.trainingLevel}
                          selectionArray={trainingCareerLevel}
                          selectionLabel={"Select Training Level"}
                          selectionTitle={"Choose Training Level"}
                          placeholder={"Choose Training Level"}
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeInitTraining(
                            "trainingLevel"
                          )}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </SystemContainer>
          </>
        }
      />
      <SystemDialog
        open={deleteModal}
        handleClose={() => setDeleteModal(!deleteModal)}
        title={"Delete Training"}
        buttonCancelText={"CANCEL"}
        buttonAgreeText={"SAVE"}
        handleDisagree={() => setDeleteModal(!deleteModal)}
        fullWidth={true}
        maxWidth={"md"}
        handleAgree={() => handleShowDelete}
        children={
          <>
            <Typography variant="h5">
              Are you sure you want to delete this training ?
            </Typography>
          </>
        }
      />
      {/* <CustomizedSnackbars
        open={snackbar.isOpen}
        message={snackbar.message}
        handleClose={handleSnackbarClose}
        severity={snackbar.severity}
        autoHideDuration={snackbar.autoHideDuration}
      /> */}
    </motion.div>
  );
};

export default TrainingManagement;
