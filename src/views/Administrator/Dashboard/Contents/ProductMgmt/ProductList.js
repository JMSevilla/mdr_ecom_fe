import React, {useState} from "react";
import { Box } from "@mui/material";
import { ApplicationCard, SystemGrid, AppButton} from "../../../../../components";
import { CardContent } from "@mui/material";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Pagination from "@mui/material/Pagination";
import { ProductManagementData } from "../../../../../core/utils/helper";
import { useHistory } from "react-router-dom";
import { appAdminRouter } from "../../../../../routes/router";

const ProductList = () => {
  const history = useHistory();
  const navigateToAddProductMgmt = () => {
    history.push(appAdminRouter.AddProductMgmt.path);
  }
  return (
    <Box className="flex flex-col gap-4 mb-12">
      <Box className='grid gap-y-4 gap-x-4 grid-cols-1 md:gap-y-4 md:gap-x-4 md:grid-cols-2 lg:gap-y-4 lg:gap-x-4 lg:grid-cols-3'>
        {ProductManagementData.map((item, index) => {
          return (
            <>
              <ApplicationCard
                key={index}
                className="p-2"
                children={
                  <CardContent>
                    <Box className="flex flex-col gap-4">
                      {/* card header */}
                      <Box className="flex flex-col gap-2">
                        <Chip
                          label="React Project"
                          color={item.status}
                          className="w-full lg:w-[30%]"
                        />
                        <h1 className="text-lg font-bold font-subtitle">
                          {item.title}
                        </h1>
                      </Box>
                      {/* card content */}
                      <Box className="flex flex-col">
                        <h1 className="text-md font-semibold font-main mb-1">
                          Project features
                        </h1>
                        <ul className="marker:text-accent list-outside list-disc ml-6">
                            {item.description.map((items, index) => {
                                return (
                                    <>
                                     <li key={index}>{items.features}</li>
                                    </>
                                )
                            })}
                         
                        </ul>
                        <h1 className="text-md font-body">+15 more</h1>
                      </Box>
                      {/* card footer */}
                      <Box className="flex flex-col gap-2">
                        <h3 className="font-main font-semibold">Developers</h3>
                        <Box className="flex flex-col gap-2 items-start justify-between sm:items-center sm:flex-row sm:gap-0">
                          <AvatarGroup max={4}>
                            {item.developers.map((items, index) => {
                                return (
                                    <>
                                    <Avatar
                                     key={index}
                                    alt={items.alt}
                                    src={items.img}
                                    />
                                    </>
                                )
                            })}
                          </AvatarGroup>
                          <AppButton
                            variant="contained"
                            buttonName="Manage Details"
                            size="small"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                }
              />
            </>
          );
        })}
      </Box>

      <Box className="flex flex-col gap-4 mb-8 justify-between items-center md:flex-row sm:gap-0 sm:mb-0">
        <Pagination count={10} color="primary" className="items-end" />
        <AppButton
        handleClick={navigateToAddProductMgmt}
        style={{ backgroundColor: "black", color: "white" }}
        buttonName="Add New Product"
        size="large"/>
      </Box>
    </Box>
  );
};

export default ProductList;
