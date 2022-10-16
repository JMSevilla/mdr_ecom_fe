import React from "react";
import { Box } from "@mui/material";
import {
  ApplicationCard,
  AppButton,
  AppTextField,
  SystemGrid,
  SystemSelect
} from "../../../../../components";
import { CardContent } from "@mui/material";
import { userRole } from "../../../../../core/utils/helper";

const AddUser = () => {
  return (
    <>
      <Box className="flex flex-col gap-4">
        {/* CARDS */}
        <Box className="flex flex-col gap-4 lg:flex-row">
          {/* LEFT SIDE CARD */}
          <ApplicationCard
            className="p-2 w-full"
            children={
              <CardContent>
                <Box className="flex flex-col">
                    <Box className='flex'>
                    <span className='text-accent font-bold'>*</span><h1 className='text-xl font-subtitle text-black font-medium mb-4'>Personal Information</h1>
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
                            label={"First Name"}
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
                            label={"Last Name"}
                          />
                        ),
                      },
                      {
                        childrenId: 3,
                        children: (
                          <AppTextField
                            style={{
                              marginTop: "10px",
                              marginBottom: "20px",
                              width: "100%",
                            }}
                            variant={"outlined"}
                            label={"Contact Number"}
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
                    label={"Address"}
                  />
                    <Box className='flex'>
                        <span className='text-accent font-bold'>*</span><h1 className='text-xl font-subtitle text-black font-medium mb-4'>Security Credentials</h1>
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
                            label={"Email Address"}
                          />
                        ),
                      },
                      {
                        childrenId: 2,
                        children: (
                            <SystemSelect
                            selectionArray={userRole}
                            selectionLabel={"Select User Role"}
                            selectionTitle={"User Role"}
                            style={{ marginTop: "10px", marginBottom: "20px" }}
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
                            <AppTextField
                            type='password'
                            style={{
                              marginTop: "10px",
                              marginBottom: "20px",
                              width: "100%",
                            }}
                            variant={"outlined"}
                            label={"Password"}
                          />
                        ),
                      },
                      {
                        childrenId: 2,
                        children: (
                            <AppTextField
                            type='password'
                            style={{
                              marginTop: "10px",
                              marginBottom: "20px",
                              width: "100%",
                            }}
                            variant={"outlined"}
                            label={"Confirm Password"}
                          />
                        ),
                      },
                    ]}
                  />
                </Box>
              </CardContent>
            }
          />

          {/* RIGHT SIDE CARD */}
          <ApplicationCard
            className="p-2 w-full lg:w-1/4"
            children={
              <CardContent>
                <Box className='mb-12'>
                <label
                    class="flex flex-col w-full h-32 border-4 border-sideBar-200 border-dashed hover:bg-black-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Upload images</p>
                    </div>
                    <input type="file" class="opacity-0" />
                </label>
                </Box>
              </CardContent>
            }
          />
        </Box>
        <Box className='flex items-end justify-end'>
        <AppButton
          variant="contained"
          buttonName="Save User"
          size="medium"
        />
        </Box>
      </Box>
    </>
  )
}

export default AddUser