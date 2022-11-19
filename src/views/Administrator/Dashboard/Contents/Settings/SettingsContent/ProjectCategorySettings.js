import React from "react";
import {
  SystemContainer,
  ApplicationCard,
  SystemGrid,
  AppTextField,
  AppButton,
  ProjectTable,
} from "../../../../../../components";
import { CardContent } from "@mui/material";
import FeatureSpiels from "../../../../../../core/Spiels/FeatureSpiels";
const ProjectCategorySettings = (props) => {
  const {
    handleProjectCategory,
    projectCategory,
    handleSave,
    categories,
    handleDelete,
    handleEditCategory,
  } = props;

  const columns = [
    {
      field: FeatureSpiels.projectCategoriesPropertyNames.categoryName,
      headerName: FeatureSpiels.projectCategoriesFieldLabels.categoryName,
      flex: 1.5,
      width: 100,
    },
    {
      field: FeatureSpiels.projectCategoriesPropertyNames.isActive,
      headerName: FeatureSpiels.projectCategoriesFieldLabels.isActive,
      flex: 1.0,
      sortable: false,
      headerClassName: "",
    },
    {
      headerName: FeatureSpiels.projectCategoriesFieldLabels.actions,
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "inline-flex" }}>
          <AppButton
            buttonName={"EDIT"}
            variant={"contained"}
            size={"small"}
            style={{
              float: "right",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            handleClick={() =>
              handleEditCategory(params.row.id, params.row.categoryName)
            }
          />{" "}
          &nbsp;
          <AppButton
            buttonName={"DELETE"}
            variant={"contained"}
            color={"error"}
            size={"small"}
            style={{
              float: "right",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            handleClick={() => handleDelete(params.row.id)}
          />
        </div>
      ),
    },
  ];

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
                    <hr />
                    <AppTextField
                      style={{
                        marginTop: "10px",
                        marginBottom: "20px",
                        width: "100%",
                      }}
                      placeholder="Enter project category"
                      variant={"outlined"}
                      label={"Project Category"}
                      handleChange={handleProjectCategory}
                      value={projectCategory}
                    />
                    <AppButton
                      buttonName={"SAVE"}
                      variant={"contained"}
                      size={"small"}
                      style={{
                        float: "right",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                      handleClick={handleSave}
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
                    <p class="pt-1 text-sm tracking-wider text-black-400 group-hover:text-gray-600">
                      Project Category List
                    </p>
                    <ProjectTable dataColumns={columns} dataRow={categories} />
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
