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

const TrainingList = (props) => {
  const { rows, columns } = props;

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
                    Training List
                  </h1>
                </Box>
              </Box>
              <ProjectTable dataRow={rows} dataColumns={columns} />
            </CardContent>
          }
        />
      </Box>
    </Box>
  );
};

export default TrainingList;
