import React from "react";
import {
  SystemContainer,
  ApplicationCard,
  SystemGrid,
  AppTextField,
  AppButton,
  ProjectTable,
  SystemSelect,
  LinearProgress,
} from "../../../../../../components";
import { CardContent, Box } from "@mui/material";
import FeatureSpiels from "../../../../../../core/Spiels/FeatureSpiels";
import {
  trainingCategory,
  trainingStatus,
  trainingCareerLevel,
  trainingProctor,
  handleSaveTraining,
} from "../../../../../../core/utils/helper";

const AddTraining = (props) => {
  const {
    handleChangeTraining,
    trainingValues,
    progress,
    handleUpload,
    handleSaveTraining,
  } = props;

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col gap-4 lg:flex-row">
        <ApplicationCard
          className="p-2 w-full"
          children={
            <CardContent>
              <Box className="flex flex-col">
                <Box className="flex">
                  <span className="text-accent font-bold">*</span>
                  <h1 className="text-xl font-subtitle text-black font-medium mb-4">
                    Training Information
                  </h1>
                </Box>
                <SystemGrid
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  xs={12}
                  lg={4}
                  GridItems={[
                    {
                      childrenId: 1,
                      children: (
                        <AppTextField
                          style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            width: "100%",
                          }}
                          variant={"outlined"}
                          label={"Training Title"}
                          value={trainingValues.title}
                          handleChange={handleChangeTraining("title")}
                        />
                      ),
                    },
                    {
                      childrenId: 2,
                      children: (
                        <SystemSelect
                          value={trainingValues.category}
                          selectionArray={trainingCategory}
                          selectionLabel={"Select Training Category"}
                          selectionTitle={"Choose Training Category"}
                          placeholder={"Choose Training Category"}
                          //   testid="signupProjectCategory"
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeTraining("category")}
                        />
                      ),
                    },
                    {
                      childrenId: 3,
                      children: (
                        <SystemSelect
                          value={trainingValues.status}
                          selectionArray={trainingStatus}
                          selectionLabel={"Select Training Status"}
                          selectionTitle={"Choose Training Status"}
                          placeholder={"Choose Training Status"}
                          //   testid="signupProjectCategory"
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeTraining("status")}
                        />
                      ),
                    },
                  ]}
                />
                <AppTextField
                  style={{
                    marginTop: "10px",
                    marginBottom: "30px",
                    width: "100%",
                  }}
                  variant={"outlined"}
                  label={"Description"}
                  handleChange={handleChangeTraining("description")}
                  value={trainingValues.description}
                />
                <Box className="flex">
                  <span className="text-accent font-bold">*</span>
                  <h1 className="text-xl font-subtitle text-black font-medium mb-4">
                    More training informations
                  </h1>
                </Box>
                <SystemGrid
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  xs={12}
                  lg={6}
                  GridItems={[
                    {
                      childrenId: 1,
                      children: (
                        <AppTextField
                          style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            width: "100%",
                          }}
                          variant={"outlined"}
                          label={"Training Days"}
                          handleChange={handleChangeTraining("days")}
                          value={trainingValues.days}
                        />
                      ),
                    },
                    {
                      childrenId: 2,
                      children: (
                        <SystemSelect
                          selectionArray={trainingCareerLevel}
                          selectionLabel={"Select Training Career Level"}
                          selectionTitle={"Choose Training Career Level"}
                          placeholder={"Choose Training Career Level"}
                          //   testid="signupProjectCategory"
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeTraining("level")}
                          value={trainingValues.level}
                        />
                      ),
                    },
                  ]}
                />
                <SystemGrid
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  xs={12}
                  lg={6}
                  GridItems={[
                    {
                      childrenId: 1,
                      children: (
                        <SystemSelect
                          selectionArray={trainingProctor}
                          selectionLabel={"Select Training Proctor"}
                          selectionTitle={"Choose Training Proctor"}
                          placeholder={"Choose Training Proctor"}
                          //   testid="signupProjectCategory"
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          handleSelect={handleChangeTraining("proctor")}
                          value={trainingValues.proctor}
                        />
                      ),
                    },
                    {
                      childrenId: 2,
                      children: (
                        <AppTextField
                          style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            width: "100%",
                          }}
                          variant={"outlined"}
                          label={"Training Capacity"}
                          handleChange={handleChangeTraining("capacity")}
                          value={trainingValues.capacity}
                        />
                      ),
                    },
                  ]}
                />
              </Box>
            </CardContent>
          }
        />
        <ApplicationCard
          className="p-2 w-full lg:w-1/4"
          children={
            <CardContent>
              <Box className="mb-12">
                <label class="flex flex-col w-full h-32 border-4 border-sideBar-200 border-dashed hover:bg-black-100 hover:border-gray-300">
                  <div class="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Upload images
                    </p>
                  </div>

                  <input
                    onChange={handleUpload}
                    type="file"
                    class="opacity-0"
                    accept="image/*"
                  />
                </label>
              </Box>
              <LinearProgress progressHelper={progress} />
            </CardContent>
          }
        />
      </Box>
      <Box className="flex items-end justify-end">
        <AppButton
          variant="contained"
          buttonName="Save Training"
          size="medium"
          handleClick={handleSaveTraining}
        />
      </Box>
    </Box>
  );
};

export default AddTraining;
