import React, { useContext } from "react";
import { PartContext } from "../context/PartContext";
import DataTable from "./DataTable";

const PartTable = (props) => {
  const { parts } = useContext(PartContext);
  
  const columns = [
    { field: "partNumber", headerName: "Part" },
    { field: "description", headerName: "Description" },
    { field: "matrixCode", headerName: "Matrix Code" },
  ];

  return <DataTable rows={parts} columns={columns} />;
};

export default PartTable;
