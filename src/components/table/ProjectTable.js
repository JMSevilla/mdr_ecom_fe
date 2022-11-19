import React, { useState, cloneElement } from "react";
import { DataGrid } from "@mui/x-data-grid";

const ProjectTable = ({ dataRow, dataColumns }) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={dataRow}
        columns={dataColumns}
        pageSize={pageSize}
        getRowId={(row) => row.id}
        onPageSizeChange={(pageSize) => setPageSize(pageSize)}
        rowsPerPageOptions={[10, 15, 20, 25]}
        sortingOrder={["asc", "desc", null]}
        disableSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
};

export default ProjectTable;
