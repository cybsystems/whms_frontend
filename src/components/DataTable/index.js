import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const DataTable=(props)=> {
  const { rows=[], columns=[],onRowClick } = props;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        onRowClick={onRowClick}
        getRowId={(d) => d._id}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataTable