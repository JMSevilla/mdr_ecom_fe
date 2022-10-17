import React from "react";
import { Box } from "@mui/material";
import ProductList from "./ProductMgmtContent/ProductList";
import { motion } from "framer-motion";

// for search bar
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const ProductMgmt = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className="flex flex-col h-full gap-4">
        {/* title */}
        <Box className="flex justify-between items-center">
          <h1 className="text-2xl font-bold font-main text-black uppercase">
            Product Management
          </h1>
        </Box>
        {/* Contents */}
        <Box className="flex flex-col gap-6">
          <Box className="flex gap-6 flex-col items-center lg:flex-row ">
            {/* search bar */}
            <Box>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="search product"
                  inputProps={{ "aria-label": "search product" }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
            <Box className="flex gap-2 justify-center lg:justify-end sm:gap-4 sm:flex-row sm:w-full">
              <h1 className="text-md font-medium font-main text-black bg-success px-2 py-1 text-white rounded-xl">
                Available
              </h1>
              <h1 className="text-md font-medium font-main text-black bg-ongoing px-2 py-1 text-white rounded-xl">
                In Progress
              </h1>
              <h1 className="text-md font-medium font-main text-black bg-error px-2 py-1 text-white rounded-xl">
                Fixing
              </h1>
              <h1 className="text-md font-medium font-main text-black bg-blue px-2 py-1 text-white rounded-xl">
                Idle
              </h1>
            </Box>
          </Box>
          <ProductList />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProductMgmt;
