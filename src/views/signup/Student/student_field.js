import React, { useState, cloneElement, useRef } from "react";
import {storage} from '../../../firebase'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import {
  SystemContainer,
  ApplicationCard,
  SystemStepper,
  SystemTypography,
  SystemGrid,
  AppButton,
  AppTextField,
  NextPrevious,
  SystemSelect,
  SystemSlider,
  SystemUserGuide,
  ProjectTable,
  SystemDialog,
  LinearProgress
} from "../../../components";

import {
  studentStepper,
  projectCategory,
  projectType,
  security_questions,
  customerStepper,
  studentRequirements
} from "../../../core/utils/helper";

import { Peso } from "../../../core/utils/Intl";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { styled } from '@mui/material/styles'
import { projectbreakdown } from '../../../core/utils/dumpfeatures'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CardContent, CardMedia, Box, Grid, Card, Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FeatureSpiels from "../../../core/Spiels/FeatureSpiels";

const Student_field = (props) => {
  const {
    activeSteps,
    handleNext,
    setActiveSteps,
    allFieldSelected,
    setAllfieldSelected,
    HandleChangeFirstname,
    HandleChangeLastname,
    HandleChangeContactNumber,
    HandleChangeAddress,
    setOpen,
    HandleSliderChange,
    projectDetails,
    setProjectDetails,
    handleOnDragEnd,
    backToRegistrationSelection,
    features,
    featureData,
    deleteField,
    HandleProjectName,
    HandleSelectProjectCategory,
    HandleSelectProjectType,
    destinationArray,
    HandleChangeBOEmailSignup,
    HandleChangeBOPasswordSignup,
    HandleChangeBOConPassSignup,
    HandleSelectQuestion,
    HandleChangeBOSecAnswer,
    HandleVerification,
    timer,
    handlePrevious,
    HandleResentEmail,
    setAllFieldSelected, selectedIndex, setSelectedIndex,
  } = props;

  const { fieldSettings, priceSettings } = allFieldSelected[4];
  const [dialogOpen, setDialogOpen] = useState(false);
  const fileUpload = useRef(null)
  const [progress, setProgress] = useState(0)
  const [uploadedURL , setUploadedURL] = useState('')
  const columns = [
    {
      field: FeatureSpiels.propertyNames.featureName,
      headerName: FeatureSpiels.fieldLabels.featureName,
      flex: 3.5,
      width: 250,
    },
    {
      field: FeatureSpiels.propertyNames.featureType,
      headerName: FeatureSpiels.fieldLabels.featureType,
      flex: 1.5,
      sortable: false,
      headerClassName: "",
    },
    {
      headerName: FeatureSpiels.fieldLabels.actions,
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <>
          <AppButton
            buttonName={"REMOVE"}
            style={{
              width: "100%",
            }}
            variant={"contained"}
            color={"error"}
            size={"small"}
            handleClick={() => handleRemoveFeatures(params)}
          />
        </>
      ),
    },
  ];

  const handleRemoveFeatures = (params) => {
    if (destinationArray.length > 1) {
      deleteField(params);
    } else {
      deleteField(params);
      setDialogOpen(false);
    }
  };


  const handleUpload = () => {
    fileUpload.current.click()
  }

  const uploadRequirements = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    if(!file) return;

    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', 
    (snapshot) => {
      const inprogress = 
      Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(inprogress)
    }, (error) => {
      console.log(error)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUploadedURL(downloadURL)
      })
    })
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <SystemTypography
        isgutter={true}
        text={"Student Registration"}
        variant={"h5"}
      />
      <hr />
      <SystemStepper activeSteps={activeSteps} propArray={studentStepper} />
      {activeSteps == 0 ? (
        <>
          <SystemContainer>
            <SystemTypography
              isgutter={true}
              text="Personal Information"
              variant={"h5"}
            />
            <hr style={{ marginBottom: "20px" }} />
            <SystemGrid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <AppTextField
                      value={fieldSettings.personalInfoObjSt.firstname}
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                      }}
                      placeholder="Enter firstname"
                      handleChange={(e) => HandleChangeFirstname(e)}
                      variant={"outlined"}
                      label={"Firstname"}
                      texthelper={
                        fieldSettings.error_provider_messageSt.epm_firstname
                      }
                      iserror={fieldSettings.errorProviderSt.error_firstname}
                    />
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <AppTextField
                      value={fieldSettings.personalInfoObjSt.lastname}
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                      }}
                      placeholder="Enter lastname"
                      handleChange={(e) => HandleChangeLastname(e)}
                      variant={"outlined"}
                      label={"Lastname"}
                      texthelper={
                        fieldSettings.error_provider_messageSt.epm_lastname
                      }
                      iserror={fieldSettings.errorProviderSt.error_lastname}
                    />
                  ),
                },
              ]}
            />
            <SystemGrid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <AppTextField
                      value={fieldSettings.personalInfoObjSt.contactnum}
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                      }}
                      placeholder="Enter Contact Number"
                      handleChange={(e) => HandleChangeContactNumber(e)}
                      variant={"outlined"}
                      label={"Contact Number"}
                      texthelper={
                        fieldSettings.error_provider_messageSt.epm_contactnum
                      }
                      iserror={fieldSettings.errorProviderSt.error_contactnum}
                    />
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <AppTextField
                      value={fieldSettings.personalInfoObjSt.address}
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                      }}
                      placeholder="Enter Address"
                      handleChange={(e) => HandleChangeAddress(e)}
                      variant={"outlined"}
                      label={"Address"}
                      texthelper={
                        fieldSettings.error_provider_messageSt.epm_address
                      }
                      iserror={fieldSettings.errorProviderSt.error_address}
                      ismultiLine={true}
                      rows={4}
                    />
                  ),
                },
              ]}
            />
            <NextPrevious
              activeSteps={activeSteps}
              stepperArray={studentStepper}
              handleBack={backToRegistrationSelection}
              handleNext={() => handleNext()}
            />
          </SystemContainer>
        </>
      ) : activeSteps == 1 ? (
        <>
          <SystemContainer>
            <SystemTypography
              isgutter={true}
              text={"Project Details"}
              variant={"h5"}
            />
            <hr style={{ marginBottom: "20px" }} />
            <SystemGrid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <AppTextField
                      value={fieldSettings.projectDetailsObjSt.projectName}
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                      }}
                      placeholder="Enter Project Name"
                      handleChange={(e) => HandleProjectName(e)}
                      variant={"outlined"}
                      label={"Project Name"}
                      texthelper={
                        fieldSettings.error_provider_messageSt.epm_projectname
                      }
                      iserror={fieldSettings.errorProviderSt.error_projectname}
                    />
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <SystemSelect
                      value={fieldSettings.projectDetailsObjSt.projectCategory}
                      selectionArray={projectCategory}
                      selectionLabel={"Select Project Category"}
                      selectionTitle={"Choose Project Category"}
                      placeholder={"Choose Project Category"}
                      style={{ marginTop: "10px", marginBottom: "20px" }}
                      handleSelect={(e) => HandleSelectProjectCategory(e)}
                    />
                  ),
                },
              ]}
            />
            <SystemGrid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <SystemSelect
                      value={fieldSettings.projectDetailsObjSt.projectType}
                      selectionArray={projectType}
                      selectionLabel={"Select Project Type"}
                      selectionTitle={"Choose Project Type"}
                      placeholder={"Choose Project Type"}
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                      handleSelect={(e) => HandleSelectProjectType(e)}
                    />
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <SystemSlider
                      defaultValue={
                        fieldSettings.projectDetailsObjSt.projectPricing
                      }
                      title={"Project Pricing"}
                      max={priceSettings.max}
                      min={priceSettings.min}
                      sliderChange={HandleSliderChange}
                      value={fieldSettings.projectDetailsObjSt.projectPricing}
                      intlPrice={Peso.format(
                        fieldSettings.projectDetailsObjSt.projectPricing
                      )}
                    />
                  ),
                },
              ]}
            />
            <CKEditor
              editor={ClassicEditor}
              data={projectDetails}
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setProjectDetails(data);
              }}
              config={{
                removePlugins: [
                  "CKFinderUploadAdapter",
                  "CKFinder",
                  "EasyImage",
                  "Image",
                  "ImageCaption",
                  "ImageStyle",
                  "ImageToolbar",
                  "ImageUpload",
                  "MediaEmbed",
                ],
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
            <NextPrevious
              activeSteps={activeSteps}
              stepperArray={studentStepper}
              handleBack={() =>
                setActiveSteps((activeSteps) => activeSteps - 1)
              }
              handleNext={handleNext}
            />
          </SystemContainer>
        </>
      ) : activeSteps == 2 ? (
        <>
          <SystemContainer max={"xl"} style={{ marginTop: "20px" }}>
            <SystemTypography
              isgutter={true}
              text={"Project Features"}
              variant={"h5"}
            />
            <hr style={{ marginBottom: "20px" }} />

            <SystemUserGuide
              targetOne={
                <SystemTypography
                  text={`Your Budget Price: ${Peso.format(
                    fieldSettings.projectDetailsObjSt.projectPricing
                  )} `}
                  variant={"h6"}
                  style={{ fonstWeight: 600, marginBottom: "20px" }}
                />
              }
              targetTwo={
                <SystemTypography
                  text={`Project Type: ${
                    fieldSettings.projectDetailsObjSt.projectType === "SSP"
                      ? "Small Scale"
                      : fieldSettings.projectDetailsObjSt.projectType === "MSP"
                      ? "Medium Scale"
                      : fieldSettings.projectDetailsObjSt.projectType === "LSP"
                      ? "Large Scale"
                      : ""
                  }`}
                  variant={"h6"}
                  style={{ marginBottom: "20px", fontWeight: 600 }}
                />
              }
            >
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <Card
                          className="unique-classnameFour"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <CardContent>
                            <div className='flex justify-between mb-2 ml-12'>
                              <SystemTypography
                                isgutter={true}
                                text={"Your Project Features Here"}
                                style={{
                                  fontFamily: "Georgia",
                                }}
                              />
                              {destinationArray.length > 0 && (
                                <AppButton
                                  buttonName={"EDIT FEATURES"}
                                  variant={"contained"}
                                  color={"error"}
                                  size={"small"}
                                  style={{marginLeft: '20px'}}
                                  handleClick={() => setDialogOpen(!dialogOpen)}
                                />
                              )}
                              <SystemDialog
                                open={dialogOpen}
                                title={"List of dropped features"}
                                fullWidth={true}
                                maxWidth={"lg"}
                                handleClose={() => setDialogOpen(false)}
                                children={
                                  <>
                                    <SystemContainer
                                      max={"xl"}
                                      style={{ marginTop: "20px" }}
                                    >
                                      <ApplicationCard
                                        children={
                                          <CardContent>
                                            <SystemTypography
                                              isgutter={true}
                                              text={"Project features list"}
                                              style={{
                                                fontFamily: "Georgia",
                                                textAlign: 'center', fontSize: '20px'
                                              }}
                                            />
                                            <ProjectTable
                                              dataColumns={columns}
                                              dataRow={featureData}
                                            />
                                          </CardContent>
                                        }
                                      />
                                    </SystemContainer>
                                  </>
                                }
                              />
                            </div>
                            <hr />
                            <Grid direction="rows" container spacing={2}>
                              {destinationArray.length > 0 &&
                                destinationArray.map((item, index) => {
                                  return (
                                    <Grid item xs={12} sm={4}>
                                      <Card
                                        style={{
                                          marginTop: "10px",
                                          marginBottom: "10px",
                                        }}
                                      >
                                        <CardContent>
                                          {cloneElement(item.field)}
                                        </CardContent>
                                      </Card>
                                    </Grid>
                                  );
                                })}
                            </Grid>

                            {provided.placeholder}
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={6}>
                        <ApplicationCard
                          className="unique-classnameThree"
                          children={
                            <CardContent>
                              <SystemTypography
                                isgutter={true}
                                text={"Drag Features From Here"}
                                style={{
                                  textAlign: "center",
                                  fontFamily: "Georgia",
                                }}
                              />
                              <hr />
                              <Grid direction="rows" container spacing={2}>
                                {features.map((item, index) => {
                                  return (
                                    <Grid item xs={12} sm={4}>
                                      <Draggable
                                        key={index}
                                        draggableId={index.toString()}
                                        index={index}
                                      >
                                        {(provided, snapshot) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                          >
                                            <Card
                                              style={{
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              <CardContent>
                                                {cloneElement(item.field)}
                                              </CardContent>
                                            </Card>
                                          </div>
                                        )}
                                      </Draggable>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </CardContent>
                          }
                        />
                      </Grid>
                    </Grid>
                  )}
                </Droppable>
              </DragDropContext>
            </SystemUserGuide>
            <NextPrevious
              activeSteps={activeSteps}
              stepperArray={studentStepper}
              handleBack={() => handlePrevious()}
              handleNext={() => handleNext()}
            />
          </SystemContainer>
        </>
      ) : activeSteps == 3 ? (
        <>
          <SystemContainer max={"xl"} style={{ marginTop: "20px" }}>
            <SystemTypography
              isgutter={true}
              text={"Credentials"}
              variant={"h5"}
            />
            <hr style={{ marginBottom: "20px" }} />
            <SystemGrid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <ApplicationCard
                      children={
                        <CardContent>
                          <AppTextField
                            value={fieldSettings.credentialsObjSt.email}
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              width: "100%",
                            }}
                            placeholder="Enter email"
                            handleChange={(e) => HandleChangeBOEmailSignup(e)}
                            variant={"outlined"}
                            label={"Email"}
                            type={"email"}
                            texthelper={
                              fieldSettings.error_provider_messageSt.epm_email
                            }
                            iserror={fieldSettings.errorProviderSt.error_email}
                          />
                          <AppTextField
                            value={fieldSettings.credentialsObjSt.password}
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              width: "100%",
                            }}
                            placeholder="Enter password"
                            handleChange={(e) =>
                              HandleChangeBOPasswordSignup(e)
                            }
                            variant={"outlined"}
                            label={"Password"}
                            type={"password"}
                            texthelper={
                              fieldSettings.error_provider_messageSt
                                .epm_password
                            }
                            iserror={
                              fieldSettings.errorProviderSt.error_password
                            }
                          />
                          <AppTextField
                            value={fieldSettings.credentialsObjSt.conpass}
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              width: "100%",
                            }}
                            placeholder="Confirm your password"
                            handleChange={(e) => HandleChangeBOConPassSignup(e)}
                            variant={"outlined"}
                            label={"Confirm Password"}
                            type={"password"}
                            texthelper={
                              fieldSettings.error_provider_messageSt.epm_conpass
                            }
                            iserror={
                              fieldSettings.errorProviderSt.error_conpass
                            }
                          />
                        </CardContent>
                      }
                    />
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <ApplicationCard
                      children={
                        <CardContent>
                          <SystemTypography
                            isgutter={true}
                            text={"Security Area"}
                            variant={"h6"}
                          />
                          <hr />
                          <SystemSelect
                            value={fieldSettings.credentialsObjSt.sec_question}
                            selectionArray={security_questions}
                            selectionLabel={"Select Question"}
                            selectionTitle={"Choose Question"}
                            placeholder={"Choose Question"}
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                            handleSelect={(e) => HandleSelectQuestion(e)}
                          />
                          <AppTextField
                            value={fieldSettings.credentialsObjSt.sec_answer}
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              width: "100%",
                            }}
                            placeholder="State your answer"
                            handleChange={(e) => HandleChangeBOSecAnswer(e)}
                            variant={"outlined"}
                            label={"Answer"}
                            texthelper={
                              fieldSettings.error_provider_messageSt
                                .epm_sec_answer
                            }
                            iserror={
                              fieldSettings.errorProviderSt.error_sec_answer
                            }
                          />
                        </CardContent>
                      }
                    />
                  ),
                },
              ]}
            />
            <NextPrevious
              activeSteps={activeSteps}
              stepperArray={studentStepper}
              handleBack={() => handlePrevious()}
              handleNext={() => handleNext()}
            />
          </SystemContainer>
        </>
      ) : activeSteps == 4 ? (
        <>
          <SystemContainer max={"xl"} style={{ marginTop: "20px" }}>
            <SystemTypography
              isgutter={true}
              text={"Account Verification"}
              variant={"h5"}
            />
            <hr className='mb-8'/>
            <AppTextField
              value={fieldSettings.verificationObjSt.verificationcode}
              style={{ marginTop: "10px", marginBottom: "30px", width: "100%"}}
              placeholder="Enter verification code"
              handleChange={(e) => HandleVerification(e)}
              variant={"outlined"}
              label={"Please enter the verification code sent to your email.."}
              texthelper={fieldSettings.verificationObjSt.epm_verify}
              iserror={fieldSettings.verificationObjSt.error_verify}
            />
            <Box className='flex gap-1'>
            <span style={{color: 'red'}}>*</span>
            <SystemTypography
              isgutter={true}
              text={"Kindly submit atleast 1(one) requirement of the following:"}
              variant={"h6"}
              style={{fontSize: '16px'}}
            />
            </Box>
            <ul className='mb-4'>
              {studentRequirements.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
            <Stack direction="row" alignItems="center" spacing={2}>
            <label for="consultation">Select a file:</label>
            <input ref={fileUpload} onChange={uploadRequirements} style={{ opacity : "0"}} accept="image/*" multiple type="file" />
              <Button onClick={handleUpload} variant="contained" component="label">
                Upload
              </Button>
              <span>or</span>
              <IconButton color="primary" aria-label="upload picture" component="label">
              <input type="file" className="hidden" accept="image/*;capture=camera"/>
                <PhotoCamera />
              </IconButton>
              <LinearProgress progressHelper={progress} />A
            </Stack>
            <NextPrevious
              disabled={timer === 0 ? false : true}
              buttonName={
                timer === 0
                  ? "Resend"
                  : `Resend in: ${timer} ${timer > 1 ? "secs" : "sec"}`
              }
              activeSteps={activeSteps}
              stepperArray={customerStepper}
              handleBack={() => handlePrevious()}
              handleNext={() => handleNext()}
              hasResend={true}
              handleResend={() => HandleResentEmail()}
            />
          </SystemContainer>
        </>
      ) : activeSteps == 5 ? (
        <>
          <SystemContainer max={"xl"} style={{ marginTop: "20px" }}>
            <SystemTypography
              isgutter={true}
              text={"Consultation Area"}
              variant={"h5"}
            />
            <hr className='mb-4'/>
            <Box className='flex flex-col gap-4'>

            <SystemTypography
              isgutter={true}
              text={"Select available date and time for your project consultation."}
              variant={"h6"}
              style={{fontSize: '16px'}}
            />
        
            <Box className="flex gap-1">
            <span style={{color: 'red'}}>*</span>
            <label for="consultation">Choose Available Date:</label>
            </Box>
            <Box className='flex gap-2'>
            <Box className='flex gap-1 items-center'>
            <label for="consultation">From:</label>
            <input type="date" id="consultation" className='border-solid border-2 border-black-500 px-1 rounded' name="consultation"/>
            </Box>
            <Box className='flex gap-1 items-center'>
            <label for="consultation">To:</label>
            <input type="date" id="consultation" className='border-solid border-2 border-black-500 px-1 rounded' name="consultation"/>
            </Box>
            </Box>

            <Box className="flex gap-1">
            <span style={{color: 'red'}}>*</span>
            <label for="consultation">Choose Available Time:</label>
            </Box>
            <Box className='flex gap-2'>
            <Box className='flex gap-1 items-center'>
            <label for="appt">From:</label>
            <input type="time" id="appt" className='border-solid border-2 border-black-500 px-1 rounded' name="appt"/>
            </Box>
            <Box className='flex gap-1 items-center'>
            <label for="appt">To:</label>
            <input type="time" id="appt" className='border-solid border-2 border-black-500 px-1 rounded' name="appt"/>
            </Box>
            </Box>

            <SystemTypography
              isgutter={true}
              text={"Note: Selected date and time will be subject for approval of the team."}
              variant={"h6"}
              style={{fontSize: '14px', fontStyle: 'italic', marginTop: '20px'}}
            />
            </Box>
            <NextPrevious
              activeSteps={activeSteps}
              stepperArray={studentStepper}
              handleBack={() => handlePrevious()}
              handleNext={() => handleNext()}
            />
            </SystemContainer>
        </>
      ) : activeSteps == 6 ? (
        <>
          <SystemContainer max={"xl"} style={{ marginTop: "20px" }}>
            <SystemTypography
              isgutter={true}
              text={"Account Preview"}
              variant={"h5"}
            />
            <hr />
            <SystemGrid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginBottom: "15px" }}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <ApplicationCard
                      children={
                        <CardContent>
                          <SystemTypography
                            isgutter={true}
                            text={"Personal Information"}
                            variant={"h6"}
                            style={{ textAlign: "center" }}
                          />
                          <hr />
                          {allFieldSelected[selectedIndex].businessFieldArray &&
                            allFieldSelected[
                              selectedIndex
                            ].businessFieldArray.map((item) => {
                              return (
                                <Box
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                  }}
                                >
                                  <Box
                                    style={{ display: "flex", gap: "0.5rem" }}
                                  >
                                    <Item style={{ width: "50%" }}>
                                      <SystemTypography
                                        isgutter={true}
                                        text={
                                          "Firstname :" + " " + item.firstname
                                        }
                                        style={{
                                          color: "black",
                                          textAlign: "left",
                                        }}
                                      />
                                    </Item>
                                    <Item style={{ width: "50%" }}>
                                      <SystemTypography
                                        isgutter={true}
                                        text={
                                          "Lastname :" + " " + item.lastname
                                        }
                                        style={{
                                          color: "black",
                                          textAlign: "left",
                                        }}
                                      />
                                    </Item>
                                  </Box>
                                  <Item>
                                    <SystemTypography
                                      isgutter={true}
                                      text={
                                        "Contact No : " + 0 + item.contactnumber
                                      }
                                      style={{
                                        color: "black",
                                        textAlign: "left",
                                      }}
                                    />
                                  </Item>
                                  <Item>
                                    <SystemTypography
                                      isgutter={true}
                                      text={"Address :" + " " + item.address}
                                      style={{
                                        color: "black",
                                        textAlign: "left",
                                      }}
                                    />
                                  </Item>
                                </Box>
                              );
                            })}
                        </CardContent>
                      }
                    />
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <ApplicationCard
                      children={
                        <CardContent>
                          <SystemTypography
                            isgutter={true}
                            text={"User Credentials"}
                            variant={"h6"}
                            style={{ textAlign: "center" }}
                          />
                          <hr />
                          {allFieldSelected[selectedIndex].businessFieldArray &&
                            allFieldSelected[
                              selectedIndex
                            ].businessFieldArray.map((item) => {
                              return (
                                <Box
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                  }}
                                >
                                  <Item>
                                    <SystemTypography
                                      isgutter={true}
                                      text={"Email Address:" + " " + item.email}
                                      style={{
                                        color: "black",
                                        textAlign: "left",
                                      }}
                                    />
                                  </Item>
                                  <Item>
                                    <SystemTypography
                                      isgutter={true}
                                      text={
                                        "Security question : " +
                                        item.sec_question
                                      }
                                      style={{
                                        color: "black",
                                        textAlign: "left",
                                      }}
                                    />
                                  </Item>
                                  <Item>
                                    <SystemTypography
                                      isgutter={true}
                                      text={
                                        "Security Answer :" +
                                        " " +
                                        item.sec_answer
                                      }
                                      style={{
                                        color: "black",
                                        textAlign: "left",
                                      }}
                                    />
                                  </Item>
                                  <SystemTypography
                                    isgutter={true}
                                    text={
                                      "Some of the information from credentials is prohibited to preview"
                                    }
                                    style={{
                                      color: "black",
                                      fontSize: "13px",
                                      fontStyle: "italic",
                                      textAlign: "center",
                                    }}
                                  />
                                </Box>
                              );
                            })}
                        </CardContent>
                      }
                    />
                  ),
                },
              ]}
            />

            <ApplicationCard
              children={
                <CardContent>
                  <SystemTypography
                    isgutter={true}
                    text={"Project Preview"}
                    variant={"h6"}
                    style={{ textAlign: "center" }}
                  />
                  <hr />
                  {allFieldSelected[selectedIndex].projectFieldArray &&
                    allFieldSelected[selectedIndex].projectFieldArray.map(
                      (item) => {
                        let newFeatures = JSON.parse(item.projectfeatures);
                        return (
                          <>
                            <Item style={{ marginBottom: "10px" }}>
                              <SystemTypography
                                isgutter={true}
                                text={"Project Name :" + " " + item.projectname}
                                style={{ color: "black" }}
                              />
                            </Item>
                            <Item style={{ marginBottom: "10px" }}>
                              <SystemTypography
                                isgutter={true}
                                text={"Project Features :"}
                                style={{ color: "black" }}
                              />
                              <Grid direction="rows" container spacing={2}>
                                {newFeatures.map((component) => {
                                  let filteredFeatures =
                                    projectbreakdown.filter(
                                      (o) => o.field_id === component.field_id
                                    );
                                  return (
                                    <>
                                      {filteredFeatures.map((field) => {
                                        return (
                                          <Grid item xs={12} sm={4}>
                                            {cloneElement(field.field)}
                                          </Grid>
                                        );
                                      })}
                                    </>
                                  );
                                })}
                              </Grid>
                            </Item>
                          </>
                        );
                      }
                    )}
                </CardContent>
              }
            />
          </SystemContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Student_field;
