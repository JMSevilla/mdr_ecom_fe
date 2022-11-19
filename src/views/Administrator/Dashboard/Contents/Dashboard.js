import React from "react";
import { Box } from "@mui/material";
import { CardContent } from "@mui/material";
import { SystemGrid, ApplicationCard } from "../../../../components";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className="flex flex-col gap-4">
        <h1 className="text-black text-4xl font-main">Dashboard</h1>
        <SystemGrid
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          xs={8}
          sm={3}
          md={3}
          GridItems={[
            {
              childrenId: 1,
              children: (
                <ApplicationCard
                  children={
                    <CardContent>
                      <h3>Users</h3>
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
                      <h3>Users</h3>
                    </CardContent>
                  }
                />
              ),
            },
            {
              childrenId: 3,
              children: (
                <ApplicationCard
                  children={
                    <CardContent>
                      <h3>Users</h3>
                    </CardContent>
                  }
                />
              ),
            },
            {
              childrenId: 4,
              children: (
                <ApplicationCard
                  children={
                    <CardContent>
                      <h3>Users</h3>
                    </CardContent>
                  }
                />
              ),
            },
          ]}
        />
      </Box>
    </motion.div>
  );
};

export default Dashboard;
