import React from "react";
import {
  SystemContainer,
  ApplicationCard,
  SystemGrid,
} from "../../../../../../components";
import { CardContent } from "@mui/material";
const ProjectCategorySettings = (props) => {
  const {} = props;

  return (
    <SystemContainer className="mt-20" maxWidth={"xl"}>
      <SystemGrid
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        xs={12}
        lg={6}
        GridItems={[
          {
            childrenId: 1,
            children: (
              <ApplicationCard
                children={
                  <CardContent>
                    <p class="pt-1 text-sm tracking-wider text-black-400 group-hover:text-gray-600">
                      Add new project category form
                    </p>
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
                    <p class="pt-1 text-sm tracking-wider text-black-400 group-hover:text-gray-600">
                      Project Category List
                    </p>
                  </CardContent>
                }
              />
            ),
          },
        ]}
      />
    </SystemContainer>
  );
};

export default ProjectCategorySettings;
